<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\InspectionItem;
use App\Models\InspectionLocation;
use App\Models\InspectionType;
use App\Models\Inspector;
use App\Models\OrderRequest;
use App\Models\State;
use App\Models\Vehicle;
use App\Models\VehicleAnswerReport;
use App\Models\VehicleAnswerReportItem;
use App\Models\VehicleType;
use Illuminate\Http\Request;
use DataTables;
use Exception;
use Illuminate\Support\Facades\Crypt;

class VehicleAnswerReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderRequest  $OrderRequest
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicle $OrderRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderRequest  $OrderRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $vehicle = Vehicle::findOrFail($id);

        if ($vehicle->hasVehicleAnswerReport->isNotEmpty()) {
            $final_wholesale = 0;
            $final_retail = 0;
            foreach ($vehicle->hasVehicleAnswerReport as $report) {
                if ($report->hasVehicleAnswerReportItem->isNotEmpty()) {
                    $collection = collect($report->hasVehicleAnswerReportItem);
                    $sum_wholesale = $collection->sum('inspection_value.wholesale');
                    $sum_retail = $collection->sum('inspection_value.retail');
                    $final_wholesale = $final_wholesale + $sum_wholesale;
                    $final_retail = $final_retail + $sum_retail;
                }
            }
            $final_wholesale_price = $final_wholesale;
            $final_retail_price = $final_retail;
        } else {
            $final_wholesale_price = 0;
            $final_retail_price = 0;
        }
        $vehicle_type_id = $vehicle->vehicle_type_id;
        if ($vehicle_type_id != '') {
            $InspectionItems = InspectionItem::with('getItemOptionAttributes.getItemOptionValues')->where('status', true)->whereJsonContains('vehicle_types', strval($vehicle_type_id))->orderBy('position')->get();
            $VehicleAnswerReport = VehicleAnswerReport::with('hasVehicleAnswerReportItem')->where('vehicle_id', $id)->get()->makeHidden(['hasVehicleAnswerReportItem.hasVehicleAnswerReportData']);
            return view('theme.vehicle_answer_report.edit', compact('InspectionItems', 'VehicleAnswerReport','vehicle','final_wholesale_price','final_retail_price'));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderRequest  $OrderRequest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vehicle $OrderRequest,$id)
    {

     $request->validate(
            [
                'vehicle_answer_report_id' => 'required',
                'vehicle_id' => 'required|integer|exists:App\Models\Vehicle,id',
            ],
        );
        if (isset($request->no_prior_event_observed) && $request->no_prior_event_observed != '' && $request->no_prior_event_observed != null && $request->no_prior_event_observed == true) {
            $no_prior_event_observed = true;
        } else {
            $no_prior_event_observed = false;
        }
        if($request->vehicle_answer_report_id=='new' && !is_numeric($request->vehicle_answer_report_id))
        {
            if ($no_prior_event_observed == true) {
               
                try {
                    $result = VehicleAnswerReport::create([
                        'vehicle_id' => $request->vehicle_id,
                        'inspection_item_id' => $request->inspection_item_id,
                        'no_prior_event_observed' => $no_prior_event_observed,
                    ]);
                    if ($result) {
                        $finalPrice  =  $this->getfinalprice($request->vehicle_id);
                        return response()->json([
                            'result' => 'success',
                            'status' => 1,
                            'final_price' => $finalPrice,
                            'message' => trans('translation.updated', ['name' => 'answers'])
                        ]);
                    }
                    return $result;
                } catch (Exception $e) {
                    return response([
                        'status' => 'error',
                        'errors' => $e->getMessage(),
                        'message' => trans('translation.error'),
                    ], 404);
                }
            } else {
                
                try {

                    $result = VehicleAnswerReport::create([
                        'vehicle_id' => $request->vehicle_id,
                        'inspection_item_id' => $request->inspection_item_id,
                        'no_prior_event_observed' => $no_prior_event_observed,
                    ]);

                    if ($result) {
                        $ques_parent=$request->ques_parent;
                        if($ques_parent!=null && !empty($ques_parent) && $ques_parent!='')
                        {
                            $updated_val=array();
                            foreach($ques_parent as $qp)
                            {
                               if(is_array($qp))
                               {
                                //text box
                                if(isset($qp['item_option_attribute_id']) && isset($qp['value']) && $qp['value']!='')
                                {
                                    $updated_val[]=$qp['item_option_attribute_id'];
                                    $item_option_attribute_id=$qp['item_option_attribute_id'];
                                    $item_option_attribute_value=$qp['value'];
                                    $VehicleAnswerReportItem = VehicleAnswerReportItem::updateOrCreate(
                                        ['vehicle_answer_report_id'=>$result->id
                                        ,'item_option_attribute_id' => $item_option_attribute_id],
                                        ['item_option_answerd' => $item_option_attribute_value]
                                    );
                                }
                               } 
                               else
                               {
                                //checkbox
                                $updated_val[]=$qp;
                                $item_option_attribute_id=$qp;
                                if($request->ques_child!=null && !empty($request->ques_child))
                                {
                                    $ques_child=$request->ques_child;
                                    if(isset($ques_child[$item_option_attribute_id]) && $ques_child[$item_option_attribute_id]!='')
                                    {
                                        $item_option_attribute_value=$ques_child[$item_option_attribute_id];
                                        $VehicleAnswerReportItem = VehicleAnswerReportItem::updateOrCreate(
                                            ['vehicle_answer_report_id'=>$result->id
                                            ,'item_option_attribute_id' => $item_option_attribute_id],
                                            ['item_option_answerd' => $item_option_attribute_value]
                                        );
                                    }
                                }
                               }
                            }
                        }
                        $finalPrice  =  $this->getfinalprice($request->vehicle_id);
                        return response()->json([
                            'result' => 'success',
                            'status' => 1,
                            'final_price' => $finalPrice,
                            'message' => trans('translation.updated', ['name' => 'answers'])
                        ]);
                    }
                    return $result;
                } catch (Exception $e) {
                    return response([
                        'status' => 'error',
                        'errors' => $e->getMessage(),
                        'message' => trans('translation.error'),
                    ], 404);
                }
            }
        }
        else
        {
         
            if ($no_prior_event_observed == true) {
                
                try {
                    $VehicleAnswerReport = VehicleAnswerReport::findOrFail($request->vehicle_answer_report_id);
                    $VehicleAnswerReport->no_prior_event_observed = true;
                    $result = $VehicleAnswerReport->save();
                    if ($result) {
                        $finalPrice  =  $this->getfinalprice($request->vehicle_id);
                        return response()->json([
                            'result' => 'success',
                            'status' => 1,
                            'final_price' => $finalPrice,
                            'message' => trans('translation.updated', ['name' => 'answers'])
                        ]);
                    }
                    return $result;
                } catch (Exception $e) {
                    return response([
                        'status' => 'error',
                        'errors' => $e->getMessage(),
                        'message' => trans('translation.error'),
                    ], 404);
                }
            } else {
                
                try {
                    $VehicleAnswerReport = VehicleAnswerReport::findOrFail($request->vehicle_answer_report_id);
                    $VehicleAnswerReport->no_prior_event_observed = false;
                    $result = $VehicleAnswerReport->save();
                    if ($result) {
                        $ques_parent=$request->ques_parent;
                        $old_answers=$VehicleAnswerReport->hasVehicleAnswerReportItem->pluck('item_option_attribute_id')->toArray();
                        if($ques_parent!=null && !empty($ques_parent) && $ques_parent!='')
                        {
                            $updated_val=array();
                            foreach($ques_parent as $qp)
                            {
                               if(is_array($qp))
                               {
                                //text box
                                if(isset($qp['item_option_attribute_id']) && isset($qp['value']) && $qp['value']!='')
                                {
                                    $updated_val[]=$qp['item_option_attribute_id'];
                                    $item_option_attribute_id=$qp['item_option_attribute_id'];
                                    $item_option_attribute_value=$qp['value'];
                                    $VehicleAnswerReportItem = VehicleAnswerReportItem::updateOrCreate(
                                        ['vehicle_answer_report_id'=>$request->vehicle_answer_report_id,'item_option_attribute_id' => $item_option_attribute_id],
                                        ['item_option_answerd' => $item_option_attribute_value]
                                    );
                                }
                               } 
                               else
                               {
                                //checkbox
                                $updated_val[]=$qp;
                                $item_option_attribute_id=$qp;
                                if($request->ques_child!=null && !empty($request->ques_child))
                                {
                                    $ques_child=$request->ques_child;
                                    if(isset($ques_child[$item_option_attribute_id]) && $ques_child[$item_option_attribute_id]!='')
                                    {
                                        $item_option_attribute_value=$ques_child[$item_option_attribute_id];
                                        $VehicleAnswerReportItem = VehicleAnswerReportItem::updateOrCreate(
                                            ['vehicle_answer_report_id'=>$request->vehicle_answer_report_id,'item_option_attribute_id' => $item_option_attribute_id],
                                            ['item_option_answerd' => $item_option_attribute_value]
                                        );
                                    }
                                }
                               }
                            }
                            $delete=array_diff($old_answers,$updated_val); 
                            if(!empty($delete) && $delete!=null)
                            {
                                $category_delete=VehicleAnswerReportItem::where('vehicle_answer_report_id',$request->vehicle_answer_report_id)->whereIn('item_option_attribute_id',$delete)->delete();
                            }
                        }
                        $finalPrice  =  $this->getfinalprice($request->vehicle_id);
                        return response()->json([
                            'result' => 'success',
                            'status' => 1,
                            'final_price' => $finalPrice,
                            'message' => trans('translation.updated', ['name' => 'answers'])
                        ]);
                    }
                    return $result;
                } catch (Exception $e) {
                    return response([
                        'status' => 'error',
                        'errors' => $e->getMessage(),
                        'message' => trans('translation.error'),
                    ], 404);
                }
            }
        }
        
    }

    public function getfinalprice($id)
    {
        $vehicle = Vehicle::findOrFail($id);
                           
        if ($vehicle->hasVehicleAnswerReport->isNotEmpty()) {
            $final_wholesale = 0;
            $final_retail = 0;
            foreach ($vehicle->hasVehicleAnswerReport as $report) {
                if ($report->hasVehicleAnswerReportItem->isNotEmpty()) {
                    $collection = collect($report->hasVehicleAnswerReportItem);
                    $sum_wholesale = $collection->sum('inspection_value.wholesale');
                    $sum_retail = $collection->sum('inspection_value.retail');
                    $final_wholesale = $final_wholesale + $sum_wholesale;
                    $final_retail = $final_retail + $sum_retail;
                }
            }
            $final_wholesale_price = $final_wholesale;
            $final_retail_price = $final_retail;
        } else {
            $final_wholesale_price = 0;
            $final_retail_price = 0;
        }

        $car_whole_val = (float) $vehicle->vehicle_wholesale_value - (float) $final_wholesale_price;
        $car_retail_val = (float) $vehicle->vehicle_retail_value - (float) $final_retail_price;
        return [
            "car_whole_val" =>  env('CURRENCY_SYMBOL'). number_format(abs($car_whole_val), 2, '.', ','),
            "car_retail_val" =>  env('CURRENCY_SYMBOL'). number_format(abs($car_retail_val), 2, '.', ','),
            "final_wholesale_price" => env('CURRENCY_SYMBOL'). number_format(abs($final_wholesale_price), 2, '.', ','),
            "final_retail_price" => env('CURRENCY_SYMBOL').number_format(abs($final_retail_price), 2, '.', ',')
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderRequest  $OrderRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vehicle $OrderRequest)
    {
        $delete_request = $OrderRequest->delete();

        if ($delete_request) {
            return response()->json([
                'status' => 1,
                'result' => 'Success',
                'message' => "Deleted",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'result' => 'fail',
                'message' => "Not Deleted",
            ]);
        }
    }
}
