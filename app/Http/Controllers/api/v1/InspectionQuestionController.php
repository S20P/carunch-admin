<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\InspectionItem;
use App\Models\ItemOption;
use App\Models\Vehicle;
use App\Models\VehicleAnswerReport;
use App\Models\VehicleAnswerReportItem;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use App\Models\Inspector;

class InspectionQuestionController extends Controller
{
    public function question(Request $request)
    {
        $inspection_items = InspectionItem::with('getItemOptionAttributes.getItemOptionValues')->where('status', true)->orderBy('position')->get();
        if (!is_null($inspection_items) && count($inspection_items) > 0) {
            $response = [];
            $newResult = [];
            foreach ($inspection_items as $row) {
                $response['position'] = $row->position;
                $response['id'] = $row->id;
                $response['location'] = array('id' => $row->inspection_location_id, 'name' => $row->inspection_location_name);
                $response['location_type'] = array('id' => $row->inspection_type_id, 'type' => $row->inspection_type_name);
                $response['location_item'] = array('id' => $row->id, 'name' => $row->name);
                $response['item_options']['parent'] = array(
                    'label' => "No Prior Event Observed",
                    'label_type' => 'checkbox',
                    'name' => "parent" . $row->inspection_location_name . $row->inspection_location_id . $row->inspection_type_id . $row->id
                );

                $items = $row->getItemOptionAttributes;
                $new_options = [];
                foreach ($items as $item) {
                    $option['id'] = $item->id;
                    $option['label'] = $item->label;
                    $option['label_type'] = $item->label_type;
                    if ($item->label_type == 'checkbox') {
                        $item_option_values = $item->getItemOptionValues;
                        $values = [
                            'option_label' => $item_option_values->label1,
                            'option_value_wholesale' => $item_option_values->value1_wholesale,
                            'option_value_retail' => $item_option_values->value1_retail,
                            'option_label2' => $item_option_values->label2,
                            'option_value2_wholesale' => $item_option_values->value2_wholesale,
                            'option_value2_retail' => $item_option_values->value2_retail,
                        ];
                        $option['label_options'] = json_encode($values);
                    } else {
                        $option['label_options'] = null;
                    }

                    $option['name'] = "child" . $row->inspection_location_name . $row->inspection_location_id . $row->inspection_type_id . $row->id . $item->id;

                    $new_options[] = $option;
                }
                $response['item_options']['child'] = $new_options;

                $newResult[] = $response;
            }
            return response()->json([
                'status' => 1,
                'data' => $newResult,
                'message' => "Success...!!",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "Not Created",
            ]);
        }
    }
    public function questionForm(Request $request, $paramater)
    {
        if ($paramater != '' && $paramater != null && $paramater != 'null') {
            try {
                $key_string = Crypt::decryptString($paramater);
                parse_str($key_string, $key_data);
                if (isset($key_data['customer_id']) && isset($key_data['vehicle_type']) && isset($key_data['vehicle_id'])) {
                    $inspection_items = InspectionItem::with('getItemOptionAttributes.getItemOptionValues')->where('status', true)->whereJsonContains('vehicle_types', strval($key_data['vehicle_type']))->orderBy('position')->get();
                    if (!is_null($inspection_items) && count($inspection_items) > 0) {
                        $response = [];
                        $newResult = [];
                        foreach ($inspection_items as $row) {
                            $response['position'] = $row->position;
                            $response['vehicle_type_name'] = $key_data['vehicle_type_name'];
                            $response['id'] = $row->id;
                            $response['location'] = array('id' => $row->inspection_location_id, 'name' => $row->inspection_location_name);
                            $response['location_type'] = array('id' => $row->inspection_type_id, 'type' => $row->inspection_type_name);
                            $response['location_item'] = array('id' => $row->id, 'name' => $row->name);
                            $response['item_options']['parent'] = array(
                                'label' => "No Prior Event Observed",
                                'label_type' => 'checkbox',
                                'name' => "parent" . $row->inspection_location_name . $row->inspection_location_id . $row->inspection_type_id . $row->id
                            );

                            $items = $row->getItemOptionAttributes;
                            $new_options = [];
                            foreach ($items as $item) {
                                $option['id'] = $item->id;
                                $option['label'] = $item->label;
                                $option['label_type'] = $item->label_type;
                                if ($item->label_type == 'checkbox') {
                                    $item_option_values = $item->getItemOptionValues;
                                    $values = [
                                        'option_label' => $item_option_values->label1,
                                        'option_value_wholesale' => $item_option_values->value1_wholesale,
                                        'option_value_retail' => $item_option_values->value1_retail,
                                        'option_label2' => $item_option_values->label2,
                                        'option_value2_wholesale' => $item_option_values->value2_wholesale,
                                        'option_value2_retail' => $item_option_values->value2_retail,
                                    ];
                                    $option['label_options'] = json_encode($values);
                                } else {
                                    $option['label_options'] = null;
                                }

                                $option['name'] = "child" . $row->inspection_location_name . $row->inspection_location_id . $row->inspection_type_id . $row->id . $item->id;

                                $new_options[] = $option;
                            }
                            $response['item_options']['child'] = $new_options;

                            $newResult[] = $response;
                        }
                        $vehicle = Vehicle::findOrFail($key_data['vehicle_id'])->makeHidden(['status','created_at','updated_at','vehicle_type_id','inspector_id','deleted_at','inspector_full_name','hasCustomers']);
                        $fn=$vehicle->hasCustomers->full_name;
                        $vehicle['customer_full_name']=$fn;
                        $vehicle['customer']=$vehicle->hasCustomers->makeHidden(['created_at','id','updated_at']);
                        return response()->json([
                            'status' => 1,
                            'data' => $newResult,
                            'message' => "Success...!!",
                            'customer_id' => $key_data['customer_id'],
                            'vehicle_id'=>$key_data['vehicle_id'],
                            'vehicles'=>$vehicle
                        ]);
                    } else {
                        return response()->json([
                            'status' => -1,
                            'data' => [],
                            'message' => "No Record Found",
                        ]);
                    }
                } else {
                    return response()->json([
                        'status' => -1,
                        'data' => [],
                        'message' => "No Record Found",
                    ]);
                }
            } catch (\Exception $e) {
                return response()->json([
                    'status' => -1,
                    'data' => [],
                    'message' => $e->getMessage(),
                ]);
            }
        } else {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => "No Record Found",
            ]);
        }
    }
    public function order_report(Request $request)
    {
        dd($request);
    }
    public function saveInspectionReport(Request $request)
    {
        $request->validate(
            [
                'data' => 'required|json',
            ],
        );
        try {
            $data_json=$request->data;
            $data=json_decode($data_json);
            if (!is_null($data) && !empty($data) ) {
                $vehicle_id=$data->vehicle_id;
                $vehicle=Vehicle::findOrfail($vehicle_id);

             

                if($vehicle->is_inspection_done==false && $vehicle->hasVehicleAnswerReport->isEmpty()){
                    $question_err=[];
                    $ans_err=[];
                        foreach($data->questions as $question)
                        {
                            $inspection_item_id=$question->inspection_item_id;
                            $no_prior_event_observed=$question->no_prior_event_observed;
                            $answers=$question->answers;
                            $VehicleAnswerReport = VehicleAnswerReport::create([
                                'vehicle_id' => $vehicle_id,
                                'inspection_item_id' => $inspection_item_id,
                                'no_prior_event_observed' => $no_prior_event_observed,
                            ]);
                            if($VehicleAnswerReport)
                            {
                                $question_err[]=true;
                            }
                            else
                            {
                                $question_err[]=false;
                            }
                            if($VehicleAnswerReport && $no_prior_event_observed==false && !empty($answers))
                            {
                                $ans_data=[];
                               
                                $vehicle_answer_report_id=$VehicleAnswerReport->id;
                                foreach($answers as $ans)
                                {
                                    $ans_data[] = [
                                        'vehicle_answer_report_id' => $vehicle_answer_report_id,
                                        'item_option_attribute_id' => $ans->item_option_attribute_id,
                                        'item_option_answerd' => $ans->item_option_answerd,
                                    ];
                                }
                                if (!empty($ans_data)) {
                                    $VehicleAnswerReportItem = VehicleAnswerReportItem::insert($ans_data);
                                    if($VehicleAnswerReportItem)
                                    {
                                        $ans_err[]=true;
                                    }    
                                    else{
                                        $ans_err[]=false;
                                    }
                                  
                                } else {
                                    $VehicleAnswerReportItem = true;
                                }
                            }
                        }
                        if(!in_array(false,$question_err) && !in_array(false,$ans_err))
                        {
                           
                            if(!is_null($vehicle))
                            {
                                $vehicle->is_inspection_done=true;
                                $vehicle->save();
                            }
                            
                            $inspectorId = $vehicle->inspector_id;
                            $inspector = Inspector::findOrfail($inspectorId);

                            return response()->json([
                                'status' => 1,
                                'data' => [],
                                'inspection_status'=>true,
                                'inspector'=> $inspector,
                                'message' => trans('translation.created',['name'=>'inspection report']),
                            ]);
                        }
                        else
                        {
                            VehicleAnswerReport::where('vehicle_id',$vehicle_id)->delete();
                            return response()->json([
                                'status' => -1,
                                'data' => [],
                                'message' =>trans('translation.error'),
                            ]);
                        }
                }
                else
                {
                    $inspectorId = $vehicle->inspector_id;
                    $inspector = Inspector::findOrfail($inspectorId);
                    
                    return response()->json([
                        'status' => -1,
                        'data' => [],
                        'inspection_status'=>true,
                        'inspector'=> $inspector,
                        'message' =>trans('translation.inspection_already_submited'),
                    ]);
                }
               
              }
              else
              {
                return response()->json([
                    'status' => -1,
                    'data' => [],
                    'message' =>trans('translation.data_invalid'),
                ]);
              }
            return $data;
        } catch (\Exception $e) {
            return response()->json([
                'status' => -1,
                'data' => [],
                'message' => $e->getMessage(),
            ]);
        }
    }
}
