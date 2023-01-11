<?php

namespace App\Http\Controllers;

use App\Models\InspectionItem;
use App\Models\InspectionLocation;
use App\Models\InspectionType;
use App\Models\VehicleType;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;

class VehicleFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$code)
    {
        $VehicleType=VehicleType::where('code',$code)->where('status',true)->get()->first();
        if($VehicleType!=null && !empty($VehicleType))
        {
            if ($request->ajax()) {
                $data=InspectionItem::query()->whereJsonContains('vehicle_types',strval($VehicleType->id));     
                if ($request->get('inspection_location_id') != '' && $request->get('inspection_location_id')!=null) {
                    $data = $data->where('inspection_location_id',$request->get('inspection_location_id'));
                }    
                if ($request->get('inspection_type_id') != '' && $request->get('inspection_type_id')!=null) {
                    $data = $data->where('inspection_type_id',$request->get('inspection_type_id'));
                } 
                if ($request->get('status') != '' && $request->get('status')!=null) {
                    $data = $data->where('status',$request->get('status'));
                }   
                $data = $data->get();
                return DataTables::of($data)
                    ->editColumn('status', function (InspectionItem $item) {
                        if ($item->status == '1') {
                            $active = '<span class="badge badge-success">Active</span>';
                        } else {
                            $active = '<span class="badge badge-danger">De-Active</span>';
                        }
                        return $active;
                    })
                    ->editColumn('inspection_location_id', function (InspectionItem $item) {
                        if (isset($item->locationName['name'])) {
                            return $item->locationName['name'];
                        } else {
                            return '-';
                        };
                    })
                    ->editColumn('inspection_type_id', function (InspectionItem $item) {
                        if (isset($item->typeName['type'])) {
                            return $item->typeName['type'];
                        } else {
                            return '-';
                        };
                    })
                    ->rawColumns(['action', 'status','vehicle_types'])
                    ->make(true);
            } else {
            $locations = InspectionLocation::where('status', 1)->get();
            $inspection_type = InspectionType::where('status', 1)->get();
            $vehicles = VehicleType::where('status', 1)->get();
                return view('theme.vehicle_form_item.index',compact('locations','inspection_type','vehicles','code','VehicleType'));
            }
        }
        else
        {
            abort('404');
        }
    }
}
