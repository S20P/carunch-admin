<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Inspector;
use App\Models\OrderRequest;
use App\Models\State;
use App\Models\Vehicle;
use App\Models\VehicleType;
use Illuminate\Http\Request;
use DataTables;
use Illuminate\Support\Facades\Crypt;
use App\Models\InspectionItem;
use App\Models\ItemOptionAttribute;
use App\Models\ItemOptionValue;
use App\Models\VehicleInspectionItem;
use App\Models\VehicleItemOptionAttribute;
use App\Models\VehicleItemOptionValue;

class OrderRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = Vehicle::with('hasCustomers')->orderby('created_at','DESC')->get();
            return DataTables::of($data)
                ->addIndexColumn()
                ->addColumn('action', function (Vehicle $order) {
                    $actionBtn = '';
                    $edit_button = '<a title="Vehicle information edit" href="' . route('order_requests.edit', $order->id) . '" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                    <span class="svg-icon svg-icon-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
                            <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </a>';
                    $paramter = 'customer_id=' . $order->customer_id . '&vehicle_type=' . $order->vehicle_type_id . '&vehicle_type_name=' . $order->vehicle_type . '&vehicle_id=' . $order->id;
                    $pm = Crypt::encryptString($paramter);
                    $view_button = '<a title="Frontend Inspection Form" target="_blank" href="' . env('FRONTEND_URL') . 'inspection-form?key=' . $pm . '" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                        <span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor"/>
                        <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor"/>
                        <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor"/>
                        <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor"/>
                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"/>
                        </svg></span>
            </a>';
                    $delete_button = '<a title="Vehicle Order Request Delete" href="#" data-id="' . route('order_requests.destroy', $order->id) . '" class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1 delete_request">
                    <span class="svg-icon svg-icon-3">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor"></path>
							<path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor"></path>
							<path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor"></path>
						</svg>
					</span>
                </a>';
                    if ($order->hasVehicleAnswerReport->isNotEmpty()) {
                        $view_button = '';
                        $ans_button = '<a title="Completed inspection form report" href="' . route('inspection-report.edit', $order->id) . '" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                    <span class="svg-icon svg-icon-muted svg-icon-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor"/>
                        <path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor"/>
                        </svg>
                        </span>
                </a>';
                    } else {
                        $ans_button = '';
                    }
                    return "<div class='btn-wrap-action' style='display:flex'>" . $view_button . '' . $ans_button . ' ' . $edit_button . ' ' . $delete_button . "</div>";
                })
                ->editColumn('active', function (Vehicle $order) {
                    if ($order->status == '1') {
                        return 'Active';
                    } else {
                        return 'De-Active';
                    }
                })
                ->editColumn('user_full_name', function (Vehicle $order) {
                    if ($order->hasCustomers->full_name != '') {
                        return $order->hasCustomers->full_name;
                    } else {
                        return '';
                    }
                })
                ->editColumn('email', function (Vehicle $order) {
                    if ($order->hasCustomers->email != '') {
                        return $order->hasCustomers->email;
                    } else {
                        return '';
                    }
                })
                ->editColumn('vehicle_wholesale_value', function (Vehicle $order) {
                    if ($order->vehicle_wholesale_value != '') {
                        $vehicle_wholesale_value = $order->vehicle_wholesale_value;
                    } else {
                        $vehicle_wholesale_value = 0;
                    }

                    if ($order->hasVehicleAnswerReport->isNotEmpty()) {
                        $final_wholesale = 0;
                        foreach ($order->hasVehicleAnswerReport as $report) {
                            if ($report->hasVehicleAnswerReportItem->isNotEmpty()) {
                                $collection = collect($report->hasVehicleAnswerReportItem);
                                $sum_wholesale = $collection->sum('inspection_value.wholesale');
                                $final_wholesale = $final_wholesale + $sum_wholesale;
                            }
                        }
                        $final_wholesale_price = $vehicle_wholesale_value - $final_wholesale;
                    } else {
                        $final_wholesale_price = '';
                    }
                    $vi = '';
                    $vi .= '<span>$' . number_format($vehicle_wholesale_value, 2, ".", ",") . '</span><br>';
                    if ($final_wholesale_price != '') {
                        $vi .= '<span style="color:#1875ff">$' . number_format($final_wholesale_price, 2, ".", ",") . '</span><br>';
                    } else {
                        $vi .= '<span style="color:#1875ff">' . $final_wholesale_price . '</span><br>';
                    }
                    return $vi;
                })->editColumn('vehicle_retail_value', function (Vehicle $order) {

                    if ($order->vehicle_retail_value != '') {
                        $vehicle_retail_value = $order->vehicle_retail_value;
                    } else {
                        $vehicle_retail_value = 0;
                    }
                    if ($order->hasVehicleAnswerReport->isNotEmpty()) {
                        $final_retail = 0;
                        foreach ($order->hasVehicleAnswerReport as $report) {
                            if ($report->hasVehicleAnswerReportItem->isNotEmpty()) {
                                $collection = collect($report->hasVehicleAnswerReportItem);
                                $sum_retail = $collection->sum('inspection_value.retail');
                                $final_retail = $final_retail + $sum_retail;
                            }
                        }
                        // $final_retail_price='$' .number_format($final_retail,2,".",",");
                        $final_retail_price = $vehicle_retail_value - $final_retail;
                    } else {
                        $final_retail_price = '';
                    }

                    $vi = '';
                    $vi .= '<span>$' . number_format($vehicle_retail_value, 2, ".", ",") . '</span><br>';
                    if ($final_retail_price != '') {
                        $vi .= '<span style="color:#1875ff">$' . number_format($final_retail_price, 2, ".", ",") . '</span><br>';
                    } else {
                        $vi .= '<span style="color:#1875ff">' . $final_retail_price . '</span><br>';
                    }
                    return $vi;
                })
                ->addColumn('vehicle_info', function (Vehicle $order) {
                    $vi = '';
                    if ($order->vehicle_year != null) {
                        $vi .= '<span><b>Year : </b>' . $order->vehicle_year . '</span><br>';
                    }
                    if ($order->vehicle_make != null) {
                        $vi .= '<span><b>Make : </b>' . $order->vehicle_make . '</span><br>';
                    }
                    if ($order->vehicle_model != null) {
                        $vi .= '<span><b>Model : </b>' . $order->vehicle_model . '</span><br>';
                    }
                    if ($order->vehicle_mileage != null) {
                        $vi .= '<span><b>Mileage : </b>' . $order->vehicle_mileage . '</span><br>';
                    }
                    return $vi;
                })
                ->rawColumns(['action', 'vehicle_info', 'vehicle_wholesale_value', 'vehicle_retail_value'])
                ->make(true);
        } else {
            return view('theme.order_requests.index');
        }
    }
    public function indexDeleted(Request $request)
    {
        if ($request->ajax()) {
            $data =  Vehicle::onlyTrashed()->with('hasCustomers')->get();
            return DataTables::of($data)
                ->addIndexColumn()
                ->addColumn('action', function (Vehicle $order) {
                    $actionBtn = '';
                    $edit_button = '<a title="View order vehicle information" href="' . route('order_requests.showDeleted', $order->id) . '" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                    <!--begin::Svg Icon | path: assets/media/icons/duotune/general/gen004.svg-->
                    <span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"/>
                    <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"/>
                    </svg></span>
                    <!--end::Svg Icon-->
                </a>';

                    $delete_button = '<a title="Vehicle Order Request UnDelete" href="#" data-id="' . route('order_requests.undelete', $order->id) . '" class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1 delete_request">
                    <span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.5 20.7259C14.6 21.2259 14.2 21.826 13.7 21.926C13.2 22.026 12.6 22.0259 12.1 22.0259C9.5 22.0259 6.9 21.0259 5 19.1259C1.4 15.5259 1.09998 9.72592 4.29998 5.82592L5.70001 7.22595C3.30001 10.3259 3.59999 14.8259 6.39999 17.7259C8.19999 19.5259 10.8 20.426 13.4 19.926C13.9 19.826 14.4 20.2259 14.5 20.7259ZM18.4 16.8259L19.8 18.2259C22.9 14.3259 22.7 8.52593 19 4.92593C16.7 2.62593 13.5 1.62594 10.3 2.12594C9.79998 2.22594 9.4 2.72595 9.5 3.22595C9.6 3.72595 10.1 4.12594 10.6 4.02594C13.1 3.62594 15.7 4.42595 17.6 6.22595C20.5 9.22595 20.7 13.7259 18.4 16.8259Z" fill="currentColor"/>
                    <path opacity="0.3" d="M2 3.62592H7C7.6 3.62592 8 4.02592 8 4.62592V9.62589L2 3.62592ZM16 14.4259V19.4259C16 20.0259 16.4 20.4259 17 20.4259H22L16 14.4259Z" fill="currentColor"/>
                    </svg></span>
            </a>';
                    return "<div class='btn-wrap-action' style='display:flex'>" . $edit_button . "". $delete_button."</div>";
                })
                ->editColumn('active', function (Vehicle $order) {
                    if ($order->status == '1') {
                        return 'Active';
                    } else {
                        return 'De-Active';
                    }
                })
                ->editColumn('user_full_name', function (Vehicle $order) {
                    if ($order->hasCustomers->full_name != '') {
                        return $order->hasCustomers->full_name;
                    } else {
                        return '';
                    }
                })
                ->editColumn('email', function (Vehicle $order) {
                    if ($order->hasCustomers->email != '') {
                        return $order->hasCustomers->email;
                    } else {
                        return '';
                    }
                })
                ->editColumn('vehicle_wholesale_value', function (Vehicle $order) {
                    if ($order->vehicle_wholesale_value != '') {
                        $vehicle_wholesale_value = $order->vehicle_wholesale_value;
                    } else {
                        $vehicle_wholesale_value = 0;
                    }

                    if ($order->hasVehicleAnswerReport->isNotEmpty()) {
                        $final_wholesale = 0;
                        foreach ($order->hasVehicleAnswerReport as $report) {
                            if ($report->hasVehicleAnswerReportItem->isNotEmpty()) {
                                $collection = collect($report->hasVehicleAnswerReportItem);
                                $sum_wholesale = $collection->sum('inspection_value.wholesale');
                                $final_wholesale = $final_wholesale + $sum_wholesale;
                            }
                        }
                        $final_wholesale_price = $vehicle_wholesale_value - $final_wholesale;
                    } else {
                        $final_wholesale_price = '';
                    }
                    $vi = '';
                    $vi .= '<span>$' . number_format($vehicle_wholesale_value, 2, ".", ",") . '</span><br>';
                    if ($final_wholesale_price != '') {
                        $vi .= '<span style="color:#1875ff">$' . number_format($final_wholesale_price, 2, ".", ",") . '</span><br>';
                    } else {
                        $vi .= '<span style="color:#1875ff">' . $final_wholesale_price . '</span><br>';
                    }
                    return $vi;
                })->editColumn('vehicle_retail_value', function (Vehicle $order) {

                    if ($order->vehicle_retail_value != '') {
                        $vehicle_retail_value = $order->vehicle_retail_value;
                    } else {
                        $vehicle_retail_value = 0;
                    }
                    if ($order->hasVehicleAnswerReport->isNotEmpty()) {
                        $final_retail = 0;
                        foreach ($order->hasVehicleAnswerReport as $report) {
                            if ($report->hasVehicleAnswerReportItem->isNotEmpty()) {
                                $collection = collect($report->hasVehicleAnswerReportItem);
                                $sum_retail = $collection->sum('inspection_value.retail');
                                $final_retail = $final_retail + $sum_retail;
                            }
                        }
                        // $final_retail_price='$' .number_format($final_retail,2,".",",");
                        $final_retail_price = $vehicle_retail_value - $final_retail;
                    } else {
                        $final_retail_price = '';
                    }

                    $vi = '';
                    $vi .= '<span>$' . number_format($vehicle_retail_value, 2, ".", ",") . '</span><br>';
                    if ($final_retail_price != '') {
                        $vi .= '<span style="color:#1875ff">$' . number_format($final_retail_price, 2, ".", ",") . '</span><br>';
                    } else {
                        $vi .= '<span style="color:#1875ff">' . $final_retail_price . '</span><br>';
                    }
                    return $vi;
                })
                ->addColumn('vehicle_info', function (Vehicle $order) {
                    $vi = '';
                    if ($order->vehicle_year != null) {
                        $vi .= '<span><b>Year : </b>' . $order->vehicle_year . '</span><br>';
                    }
                    if ($order->vehicle_make != null) {
                        $vi .= '<span><b>Make : </b>' . $order->vehicle_make . '</span><br>';
                    }
                    if ($order->vehicle_model != null) {
                        $vi .= '<span><b>Model : </b>' . $order->vehicle_model . '</span><br>';
                    }
                    if ($order->vehicle_mileage != null) {
                        $vi .= '<span><b>Mileage : </b>' . $order->vehicle_mileage . '</span><br>';
                    }
                    return $vi;
                })
                ->rawColumns(['action', 'vehicle_info', 'vehicle_wholesale_value', 'vehicle_retail_value'])
                ->make(true);
        } else {
            return view('theme.order_requests.indexDeleted');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $states = State::where('status', 1)->get();
        $vehicle_types = VehicleType::where('status', 1)->get();
        $Inspectors = Inspector::where('status', 1)->get();
        return view('theme.order_requests.create', compact('states', 'vehicle_types', 'Inspectors'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'first_name' => 'required|max:160',
                'last_name' => 'required|max:160',
                'address' => 'required|max:250',
                'state' => 'required|max:160',
                'mobile' => 'required|max:15|digits_between:0,15',
                'email' => 'required|email|max:160',
                'zipcode' => 'required|max:10',
                'vin_no' => 'required|max:160',
                'vehicle_type_id' => 'required',
                'vehicle_year' => 'required|digits:4|integer|min:1700|max:' . (date('Y') + 2),
                'vehicle_make' => 'required|max:160',
                'vehicle_model' => 'required|max:160',
                'vehicle_mileage' => 'required|integer|max:9223372036854775807',
                'vehicle_wholesale_value' => 'required|numeric|between:0,999999.98',
                'vehicle_retail_value' => 'required|numeric|between:0,999999.98',
                'inspector_id' => 'required|integer',
            ],
        );
        $data = $request->all();
        $email = $request->email;
        $customer_get = getCustomerByEmail($email);
        if ($customer_get != null) {
            //existing customer
            $customer_id = $customer_get->id;
        } else {
            //create customer
            $customer = Customer::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'address' => $request->address,
                'state' => $request->state,
                'mobile' => $request->mobile,
                'email' => $request->email,
                'zipcode' => $request->zipcode,
            ]);
            if ($customer) {
                $customer_id = $customer->id;
            } else {
                $customer_id = null;
            }
        }

        if ($customer_id != null) {
            $data['customer_id'] = $customer_id;
            $result = Vehicle::create($data);
            if ($result) {

                $vehicle_type_id = $request->vehicle_type_id;
                $vehicle_order_report_id = $result->id;
                $this->cloneQuestionData($vehicle_type_id,$vehicle_order_report_id);
                 
                return redirect()->route('order_requests.index')
                    ->with('success', "inspector Created");
            } else {
                return redirect()->back()
                    ->with('error', "Something Went Wrong");
            }
        } else {
            return redirect()->back()
                ->with('error', "Something Went Wrong");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderRequest  $OrderRequest
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicle $OrderRequest)
    {
    }
    public function showDeleted(Request $request, Vehicle $OrderRequest, $id)
    {
        if ($id == null || !is_numeric($id)) {
            return redirect()->route('order_requests.indexDeleted')
                ->with('error', trans('translation.id_invalid'));
        }
        $OrderRequest = Vehicle::onlyTrashed()->findOrFail($id);
        $states = State::where('status', 1)->get();
        $vehicle_types = VehicleType::where('status', 1)->get();
        $Inspectors = Inspector::where('status', 1)->get();
        return view('theme.order_requests.show_deleted', compact('OrderRequest', 'states', 'vehicle_types', 'Inspectors'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderRequest  $OrderRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(Vehicle $OrderRequest)
    {
        $states = State::where('status', 1)->get();
        $vehicle_types = VehicleType::where('status', 1)->get();
        $Inspectors = Inspector::where('status', 1)->get();
        return view('theme.order_requests.edit', compact('OrderRequest', 'states', 'vehicle_types', 'Inspectors'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderRequest  $OrderRequest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vehicle $OrderRequest)
    {
        $request->validate(
            [
                'vin_no' => 'required|max:160',
                'vehicle_type_id' => 'required',
                'vehicle_year' => 'required|digits:4|integer|min:1700|max:' . (date('Y') + 2),
                'vehicle_make' => 'required|max:160',
                'vehicle_model' => 'required|max:160',
                'vehicle_mileage' => 'required|integer|max:9223372036854775807',
                'vehicle_wholesale_value' => 'required|numeric|between:0,999999.98',
                'vehicle_retail_value' => 'required|numeric|between:0,999999.98',
                'inspector_id' => 'required|integer',
            ],
        );

        $data = $request->all();
        $result = $OrderRequest->update($data);
        if ($result) {
            return redirect()->route('order_requests.index')
                ->with('success', "Vehicle Order Request Updated");
        } else {
            return redirect()->route('order_requests.index')
                ->with('error', "Something Went Wrong");
        }
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
    public function undelete($id)
    {
        $delete_request=Vehicle::where('id', $id)->withTrashed()->restore();
        if ($delete_request) {
            return response()->json([
                'status' => 1,
                'result' => 'Success',
                'message' => "UnDeleted",
            ]);
        } else {
            return response()->json([
                'status' => -1,
                'result' => 'fail',
                'message' => "Not UnDeleted",
            ]);
        }
    }


     public function cloneQuestionData($vehicle_type_id,$vehicle_order_report_id){

        $inspectionItems = InspectionItem::where('vehicle_types', 'LIKE', "%".$vehicle_type_id."%")->get();
        if(count($inspectionItems)){
            foreach($inspectionItems as $key=>$inspectionItem){
                $item = [];
                $max_position = VehicleInspectionItem::max('position');
                if ($max_position != '' && $max_position != null) {
                    $next_position = $max_position + 1;
                } else {
                    $next_position = 1;
                }
                $item['name'] = $inspectionItem['name'];
                $item['inspection_location_id'] = $inspectionItem['inspection_location_id'];
                $item['inspection_type_id'] = $inspectionItem['inspection_type_id'];
                $item['position'] = $next_position;
                $item['status'] = $inspectionItem['status'];
                $item['vehicle_order_report_id'] = $vehicle_order_report_id;                
                $result = VehicleInspectionItem::create($item);
                if ($result) {
                   $itemAttrs = ItemOptionAttribute::where('inspection_item_id', $inspectionItem['id'])->get();
                   if(count($itemAttrs)){
                    foreach($itemAttrs as $key=>$itemAttr){
                          $attr = [];
                          $attr['label'] = $itemAttr['label'];
                          $attr['label_type'] = $itemAttr['label_type'];
                          $attr['vehicle_inspection_item_id'] = $result->id;

                          $result_sub = VehicleItemOptionAttribute::create($attr);
                          if($result_sub && $result_sub->id!='' && $result_sub->id!=null)
                          {
                            
                            $itemOptionValues = ItemOptionValue::where('item_option_attributes_id', $itemAttr['id'])->get();
                            if(count($itemOptionValues)){
                                foreach($itemOptionValues as $key=>$itemValue){

                                    $itemVal = [];
                                    $itemVal['vehicle_item_option_attributes_id'] = $result_sub->id;
                                    $itemVal['label1'] = $itemValue['label1'];
                                    $itemVal['value1_wholesale'] = $itemValue['value1_wholesale'];
                                    $itemVal['value1_retail'] = $itemValue['value1_retail'];
                                    $itemVal['label2'] = $itemValue['label2'];
                                    $itemVal['value2_wholesale'] = $itemValue['value2_wholesale'];
                                    $itemVal['value2_retail'] = $itemValue['value2_retail'];

                                    $result_sub_value = VehicleItemOptionValue::create($itemVal);
                                }
                            }
                         }
                     }
                  }
                }
            }
        }
     }
}
