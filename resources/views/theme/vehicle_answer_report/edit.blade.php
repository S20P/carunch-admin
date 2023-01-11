@extends('theme.layouts.app')
@section('main-content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar" id="kt_toolbar">
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <div data-kt-swapper="true" data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                    class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                    <h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">Completed Vehicle Report Order</h1>
                    <span class="h-20px border-gray-300 border-start mx-4"></span>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <li class="breadcrumb-item text-muted">
                            <a href="{{route('home')}}" class="text-muted text-hover-primary">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-300 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-muted">
                            <a href="{{route('order_requests.index')}}" class="text-muted text-hover-primary">Vehicle Report Order</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-300 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-dark">Edit</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="toolbar mt-17" id="kt_toolbar2">
            <div id="kt_toolbar_container1" class="container-fluid d-flex flex-stack vehicle-info-stickey-wrapper">
                <div data-kt-swapper="true" data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container1'}"
                    class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                    <h1 class="d-flex text-dark fw-bolder fs-6 align-items-center my-1">{{ __('Customer') }}</h1>
                    <span class="h-20px border-gray-300 border-start mx-4"></span>
                    <div class="d-flex flex-wrap fw-bold fs-8 pe-2">
                        <span
                            class="d-flex align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                            <span class="svg-icon svg-icon-4 me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path opacity="0.3"
                                        d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 
                                        12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 
                                        6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            {{ $vehicle->hasCustomers->full_name }}
                        </span>
                        <span
                            class="d-flex align-items-center 
                        text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                            <!--begin::Svg Icon | path: assets/media/icons/duotune/communication/com005.svg-->
                            <span class="svg-icon svg-icon-4 me-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 
                                        16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                                        fill="currentColor" />
                                    <path opacity="0.3"
                                        d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 
                                        17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 
                                        7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 
                                        13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                                        fill="currentColor" />
                                </svg></span>
                            <!--end::Svg Icon-->{{ $vehicle->hasCustomers->mobile }}
                        </span>
                        <span
                            class="d-flex align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com011.svg-->
                            <span class="svg-icon svg-icon-4 me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path opacity="0.3"
                                        d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 
                                        18.6 21.6 19 21 19Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 
                                        12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->{{ $vehicle->hasCustomers->email }}
                        </span>
                    </div>
                </div>
                <div data-kt-swapper="true" data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container1'}"
                    class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                    <h1 class="d-flex text-dark fw-bolder fs-6 align-items-center my-1">{{ __('Vehicle') }}</h1>
                    <span class="h-20px border-gray-300 border-start mx-4"></span>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-8 my-1">
                        <li class="breadcrumb-item text-muted">
                            <span class="text-gray-400 fw-bolder">Make :
                                <span
                                    class="text-gray-800 text-hover-primary fw-bolder">{{ $vehicle->vehicle_make }}</span></span>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="text-gray-400 fw-bolder">Model :
                                <span
                                    class="text-gray-800 text-hover-primary fw-bolder">{{ $vehicle->vehicle_model }}</span></span>
                        </li>
                        <li class="breadcrumb-item text-muted">
                            <span class="text-gray-400 fw-bolder">Year :
                                <span
                                    class="text-gray-800 text-hover-primary fw-bolder">{{ $vehicle->vehicle_year }}</span></span>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="text-gray-400 fw-bolder">VIN :
                                <span
                                    class="text-gray-800 text-hover-primary fw-bolder">{{ $vehicle->vin_no }}</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="toolbar" id="kt_toolbar3" style='margin-top:110px'>
            <div id="kt_toolbar_container2" class="container-fluid d-flex flex-stack vehicle-info-stickey-wrapper">
                <div class="d-flex flex-wrap fw-bold fs-6 pe-2">
                    <div
                        class="align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                        <span class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-0">Wholesale</span>
                        <input type="hidden" class="cal_wholesale_original" value="{{$vehicle->vehicle_wholesale_value}}">
                        <input type="hidden" class="cal_retail_original" value="{{$vehicle->vehicle_retail_value}}">
                        <span
                            class="text-gray-600 fw-bold d-block fs-6">{{ env('CURRENCY_SYMBOL') }}{{ number_format($vehicle->vehicle_wholesale_value, 2, '.', ',') }}</span>
                    </div>
                    <span class="h-30px border-gray-300 border-start mx-4"></span>
                    <div
                        class="align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                        <span class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-0">Adjustment</span>
                        @if ($final_wholesale_price < 0)
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 green-val final_wholesale_price">{{ env('CURRENCY_SYMBOL') }}({{ number_format(abs($final_wholesale_price), 2, '.', ',') }})</span>
                        @else
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 red-val final_wholesale_price">{{ env('CURRENCY_SYMBOL') }}{{ number_format(abs($final_wholesale_price), 2, '.', ',') }}</span>
                        @endif
                    </div>
                    <span class="h-30px border-gray-300 border-start mx-4"></span>
                    <div
                        class="align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                        <span class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-0">Carunch Value</span>
                        @php
                             $car_whole_val = (float) $vehicle->vehicle_wholesale_value - (float) $final_wholesale_price;
                        @endphp
                        @if ($car_whole_val < 0)
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 blue-val car_whole_val">{{ env('CURRENCY_SYMBOL') }}({{ number_format(abs($car_whole_val), 2, '.', ',') }})</span>
                        @else
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 blue-val car_whole_val">{{ env('CURRENCY_SYMBOL') }}{{ number_format($car_whole_val, 2, '.', ',') }}</span>
                        @endif

                    </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-8 pe-2">
                    <div
                        class="align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                        <span class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-0">Retail</span>
                        <span
                            class="text-gray-600 fw-bold d-block fs-6">{{ env('CURRENCY_SYMBOL') }}{{ number_format($vehicle->vehicle_retail_value, 2, '.', ',') }}</span>
                    </div>
                    <span class="h-30px border-gray-300 border-start mx-4"></span>
                    <div
                        class="align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                        <span class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-0">Adjustment</span>
                        @if ($final_retail_price < 0)
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 green-val final_retail_price">{{ env('CURRENCY_SYMBOL') }}({{ number_format(abs($final_retail_price), 2, '.', ',') }})</span>
                        @else
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 red-val final_retail_price">{{ env('CURRENCY_SYMBOL') }}{{ number_format(abs($final_retail_price), 2, '.', ',') }}</span>
                        @endif
                    </div>
                    <span class="h-30px border-gray-300 border-start mx-4"></span>
                    <div
                        class="align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                        <span class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-0">Carunch Value</span>
                        @php
                            $car_retail_val = (float) $vehicle->vehicle_retail_value - (float) $final_retail_price;
                        @endphp
                        @if ($car_retail_val < 0)
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 blue-val car_retail_val">{{ env('CURRENCY_SYMBOL') }}({{ number_format(abs($car_retail_val), 2, '.', ',') }})</span>
                        @else
                            <span
                                class="text-gray-600 fw-bold d-block fs-6 blue-val car_retail_val">{{ env('CURRENCY_SYMBOL') }}{{ number_format($car_retail_val, 2, '.', ',') }}</span>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <div class="post d-flex flex-column-fluid" id="kt_post" style='padding-top:110px'>
            <div id="kt_content_container" class="container-xxl">
                @if ($message = Session::get('success'))
                    <div class="alert alert-success d-flex align-items-center p-5 mb-10">
                        <span class="svg-icon svg-icon-2hx svg-icon-success me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3"
                                    d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 
                                    4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 
                                    17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 
                                    21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 
                                    21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 
                                    14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 
                                    10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 
                                    11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 
                                    8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <div class="d-flex flex-column">
                            <h4 class="mb-1 text-dark">Success....!!!!</h4>
                            <span>inspector Created Successfully....!!!</span>
                        </div>
                    </div>
                @elseif ($message = Session::get('error'))
                    <div class="alert alert-danger d-flex align-items-center p-5 mb-10">
                        <span class="svg-icon svg-icon-2hx svg-icon-danger me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3"
                                    d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 
                                    4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 
                                    17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 
                                    11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 
                                    16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 
                                    13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 
                                    8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 
                                    13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 
                                    14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <div class="d-flex flex-column">
                            <h4 class="mb-1 text-dark">Failed....!!!!</h4>
                            <span>Something Went Wrong....!!!!</span>
                        </div>
                    </div>
                @endif
                <div class="card mb-5 mb-xl-10">
                    <div id="kt_account_settings_profile_details" class="collapse show">
                        {{-- =========================================================== --}}
                        @php
                            $vehicle_wholesale_value = $vehicle->vehicle_wholesale_value;
                            $vehicle_retail_value = $vehicle->vehicle_retail_value;
                        @endphp
                        <input type="hidden" name="vehicle_wholesale_value" value="{{ $vehicle_wholesale_value }}">
                        <input type="hidden" name="vehicle_retail_value" value="{{ $vehicle_retail_value }}">
                        <div class="card pt-4 mb-6 mb-xl-9">
                            <div id="kt_customer_view_payment_method" class="card-body pt-0">
                                @if ($InspectionItems != null && !empty($InspectionItems) && $InspectionItems->isNotEmpty())
                                    @php
                                        $ip = 1;
                                    @endphp
                                    @foreach ($InspectionItems as $question)
                                        <form id="edit_item_form" class="form edit-question-form" method="post"
                                            action="">
                                            @csrf
                                            @method('PUT')
                                            <div class="py-0" data-kt-customer-payment-method="row">
                                                <div class="py-3 d-flex flex-stack flex-wrap">
                                                    <div class="d-flex align-items-center collapsible rotate collapsed"
                                                        data-bs-toggle="collapse"
                                                        href="#kt_customer_view_payment_method_{{ $ip }}"
                                                        role="button" aria-expanded="false"
                                                        aria-controls="kt_customer_view_payment_method_{{ $ip }}">
                                                        <div class="me-3 rotate-90">
                                                            <span class="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 
                                                                        8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 
                                                                        18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 
                                                                        11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 
                                                                        5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 
                                                                        11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                                                        fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="me-3">
                                                            <div class="d-flex align-items-center">
                                                                <div class="text-gray-800 fw-bold">Inspection Item Name:
                                                                    <b>{{ $question->name }}</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        @php
                                                        $sum_wholesale_original = 0;
                                                        $sum_retail_original = 0;
                                                            $sum_wholesale_val = 0;
                                                            if ($VehicleAnswerReport->where('inspection_item_id', $question->id)->isNotEmpty()) {
                                                                $VehicleAnswer = $VehicleAnswerReport->where('inspection_item_id', $question->id)->first();
                                                            } else {
                                                                $VehicleAnswer = null;
                                                            }
                                                            if ($VehicleAnswer != null && $VehicleAnswer->no_prior_event_observed == true) {
                                                                $no_prior_event_observed = 'checked';
                                                                $no_prior_event_observed_cls = '';
                                                            } else {
                                                                $no_prior_event_observed = '';
                                                                $no_prior_event_observed_cls = 'd-none';
                                                            }
                                                            if ($VehicleAnswer != null) {
                                                                $vehicle_answer_report_id = $VehicleAnswer->id;
                                                            
                                                                if ($VehicleAnswer->hasVehicleAnswerReportItem->isNotEmpty()) {
                                                                    $collection = collect($VehicleAnswer->hasVehicleAnswerReportItem);
                                                                    $sum_wholesale = $collection->sum('inspection_value.wholesale');
                                                                    $sum_wholesale_val = abs($sum_wholesale);
                                                                    $sum_wholesale_original = $sum_wholesale;
                                                                    if($sum_wholesale <= 0)
                                                                    {
                                                                        $sum_wholesale = env('CURRENCY_SYMBOL') . number_format(abs($sum_wholesale), 2, ".", ",");
                                                                        $sum_wholesale_str = "<b class='green-val'>".$sum_wholesale.'</b>';
                                                                    }else {
                                                                        $sum_wholesale = env('CURRENCY_SYMBOL') .'('. number_format(abs($sum_wholesale), 2, ".", ",").')';
                                                                        $sum_wholesale_str = "<b class='red-val'>".$sum_wholesale.'</b>';
                                                                    }
                                                                   
                                                                    $sum_retail = $collection->sum('inspection_value.retail');
                                                                    $sum_retail_original = $sum_retail;
                                                                    $sum_retail_val = abs($sum_retail);
                                                                    if($sum_retail <= 0)
                                                                    {
                                                                        $sum_retail = env('CURRENCY_SYMBOL') . number_format(abs($sum_retail), 2, ".", ",");
                                                                        $sum_retail_str = "<b class='green-val'>".$sum_retail.'</b>';

                                                                    }else {
                                                                        $sum_retail = env('CURRENCY_SYMBOL') . '('. number_format(abs($sum_retail), 2, ".", ",").')';
                                                                        $sum_retail_str = "<b class='red-val'>".$sum_retail.'</b>';

                                                                    }
                                                                  
                                                                } else {
                                                                    $sum_wholesale_str ="<b class='green-val'>".env('CURRENCY_SYMBOL') . '0'.'</b>';
                                                                    $sum_retail_str ="<b class='green-val'>".env('CURRENCY_SYMBOL') . '0'.'</b>';
                                                                }
                                                            } else {
                                                                $vehicle_answer_report_id = 'new';
                                                                $sum_wholesale_str ="<b class='green-val'>".env('CURRENCY_SYMBOL') . '0'.'</b>';
                                                                $sum_retail_str ="<b class='green-val'>".env('CURRENCY_SYMBOL') . '0'.'</b>';
                                                            }
                                                        @endphp
                                                    </div>
                                                    
                                                    <div class="d-flex my-3 ms-9" style="width: 40%;
                                                    justify-content: end; align-items: center;">
                                                        <div class="row w-100 is_inspection_val_disp">
                                                            <div class="col-md-6 inspection_val_disp" style="white-space: nowrap;">
                                                                <div class="fw-bold wholesale_val wholesale_val_total_str">
                                                                    Wholesale: {!! $sum_wholesale_str !!}
                                                                </div>
                                                                <input type="hidden" value="{{$sum_wholesale_original}}" class="wholesale_val_total_original">
                                                            </div>
                                                            <div class="col-md-6 inspection_val_disp" style="white-space: nowrap;">
                                                                <div class="fw-bold retail_val retail_val_total_str">
                                                                    Retail: {!! $sum_retail_str !!}
                                                                </div>
                                                                <input type="hidden" value="{{$sum_retail_original}}" class="retail_val_total_original">
                                                            </div>
                                                        </div>
                                                         <div class="row w-100 inspection_val_disp_empty" style="display:none" >
                                                            <div class="col-md-6" style="white-space: nowrap;">
                                                                <div class="fw-bold wholesale_val">
                                                                    Wholesale: <b class='green-val'>{{env('CURRENCY_SYMBOL') }} 0</b>
                                                                </div>
                                                                <input type="hidden" value="0" class="wholesale_val_total_original">
                                                            </div>
                                                            <div class="col-md-6" style="white-space: nowrap;">
                                                                <div class="fw-bold retail_val">
                                                                    Retail: <b class='green-val'>{{env('CURRENCY_SYMBOL') }} 0</b>
                                                                </div>
                                                                <input type="hidden" value="0" class="retail_val_total_original">
                                                            </div>
                                                        </div>
                                                        <a href="javascript:void(0);"
                                                            class="edit-btn btn btn-icon btn-active-light-primary w-30px h-30px me-3">
                                                            <span data-bs-toggle="tooltip" data-bs-trigger="hover"
                                                                aria-label="Edit" data-kt-initialized="1">
                                                                <span class="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24"
                                                                        viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 
                                                                            2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 
                                                                            1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 
                                                                            21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 
                                                                            21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 
                                                                            14.109L2.06399 20.309C1.98815 20.5354 1.97703 
                                                                            20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 
                                                                            21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 
                                                                            21.9115 2.989 21.9658C3.22158 22.0201 3.4647 
                                                                            22.0084 3.69099 21.932H3.68699Z"
                                                                            fill="currentColor"></path>
                                                                        <path
                                                                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 
                                                                            2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 
                                                                            21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 
                                                                            20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 
                                                                            21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 
                                                                            4.75098L4.13499 14.105Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="kt_customer_view_payment_method_{{ $ip }}"
                                                    class="fs-6 ps-10 collapse"
                                                    data-bs-parent="#kt_customer_view_payment_method" style="">
                                                    <div class="d-flex flex-wrap py-5 question-list-wrapper">
                                                        {{-- =========================================== --}}
                                                        <div class="form-group" style="width: 60%">
                                                            <div data-repeater-list="kt_docs_repeater_advanced">
                                                                <div data-repeater-item="" class="option-item-wrap">
                                                                    <div class="form-group row mb-5">
                                                                        <div class="col-md-12">
                                                                            <div class="form-check">

                                                                                <input type='hidden'
                                                                                    name='vehicle_answer_report_id'
                                                                                    value='{{ $vehicle_answer_report_id }}'>
                                                                                <input type='hidden' name='vehicle_id'
                                                                                    value='{{ $vehicle->id }}'>
                                                                                <input type='hidden'
                                                                                    name='inspection_item_id'
                                                                                    value='{{ $question->id }}'>
                                                                                <input
                                                                                    class="frm-checkbox form-check-input no_prior_event_observed_checkbox"
                                                                                    type="checkbox"
                                                                                    name='no_prior_event_observed'
                                                                                    value="true"
                                                                                    id="flexCheckDefault{{ $question->id }}"
                                                                                    {{ $no_prior_event_observed }}
                                                                                    disabled>
                                                                                <label class="form-check-label"
                                                                                    for="flexCheckDefault{{ $question->id }}">No
                                                                                    Prior Event
                                                                                    Observed</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    @if ($question->getItemOptionAttributes->isNotEmpty())
                                                                        <div class="sub-question-wraapper"
                                                                            @if ($no_prior_event_observed == 'checked') style='display:none'
                                                        ; @endif>
                                                                            @php
                                                                                $i = 0;
                                                                            @endphp
                                                                            @foreach ($question->getItemOptionAttributes as $options)
                                                                                @php
                                                                                    if ($VehicleAnswer != null && $VehicleAnswer->hasVehicleAnswerReportItem->where('item_option_attribute_id', $options->id)->isNotEmpty()) {
                                                                                        $VehicleAnswer_opt = $VehicleAnswer->hasVehicleAnswerReportItem->where('item_option_attribute_id', $options->id)->first();
                                                                                    } else {
                                                                                        $VehicleAnswer_opt = null;
                                                                                    }
                                                                                    if ($VehicleAnswer_opt != null) {
                                                                                        $item_option_answerd = $VehicleAnswer_opt->item_option_answerd;
                                                                                        $ques_check = 'checked';
                                                                                        $ques_check_display = '';
                                                                                    } else {
                                                                                        $item_option_answerd = null;
                                                                                        $ques_check = '';
                                                                                        $ques_check_display = 'display:none;';
                                                                                    }
                                                                                @endphp
                                                                                @if ($options->label_type == 'input')
                                                                                    <div class="radio-option"
                                                                                        style="display:block">
                                                                                        <div class="form-group row mb-5">
                                                                                            <div class="col-md-1">
                                                                                            </div>
                                                                                            <div class="col-md-11">
                                                                                                <label
                                                                                                    class="form-label">{{ $options->label }}</label>
                                                                                                <input type="text"
                                                                                                    name="ques_parent[{{ $i }}][value]"
                                                                                                    class="form-control form-control-lg form-control-solid check-required frm-textbox"
                                                                                                    value="{{ $item_option_answerd }}"
                                                                                                    disabled>
                                                                                                <input type="hidden"
                                                                                                    name='ques_parent[{{ $i }}][item_option_attribute_id]'
                                                                                                    value='{{ $options->id }}'>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                @elseif ($options->label_type == 'checkbox')
                                                                                    <div class="radio-option"
                                                                                        style="display:block">
                                                                                        <div class="form-group row mb-5">
                                                                                            <div class="col-md-1">
                                                                                            </div>
                                                                                            <div
                                                                                                class="col-md-11 radio-checkbox-main-wrapper">
                                                                                                <div
                                                                                                    class="form-check p-0 mb-5 sub-question-radio">
                                                                                                    <div class="row">
                                                                                                        <div
                                                                                                            class="col-md-4">
                                                                                                            <input
                                                                                                                class="form-check-input checkbox-question frm-checkbox"
                                                                                                                type="checkbox"
                                                                                                                name="ques_parent[{{ $i }}]"
                                                                                                                value="{{ $options->id }}"
                                                                                                                id="flexCheckDefault{{ $options->id }}"
                                                                                                                {{ $ques_check }}
                                                                                                                disabled>
                                                                                                            <label
                                                                                                                class="form-check-label"
                                                                                                                for="flexCheckDefault{{ $options->id }}">{{ $options->label }}</label>
                                                                                                        </div>
                                                                                                        <div class="col-md-4 inspection_val_disp"
                                                                                                            style="{{ $ques_check_display }}">
                                                                                                            @php
                                                                                                                $loption = $options->getItemOptionValues;
                                                                                                                $loption_id = $loption->id;
                                                                                                                $option_label1 = $loption->label1;
                                                                                                                $option_value1_wholesale = $loption->value1_wholesale;
                                                                                                                $option_value1_retail = $loption->value1_retail;
                                                                                                                $option_label2 = $loption->label2;
                                                                                                                $option_value2_wholesale = $loption->value2_wholesale;
                                                                                                                $option_value2_retail = $loption->value2_retail;
                                                                                                                
                                                                                                                if ($item_option_answerd == $option_label1) {
                                                                                                                    $cal_perce_val_wholesale = $option_value1_wholesale;
                                                                                                                    $cal_perce_val_retail = $option_value1_retail;
                                                                                                                } else {
                                                                                                                    $cal_perce_val_wholesale = $option_value2_wholesale;
                                                                                                                    $cal_perce_val_retail = $option_value2_retail;
                                                                                                                }
                                                                                                                $cal_perce_val_wholesale_pos = abs((float) $cal_perce_val_wholesale);
                                                                                                                $whole_per_value = ((float) $vehicle_wholesale_value * (float) $cal_perce_val_wholesale_pos) / 100;
                                                                                                                if ($cal_perce_val_wholesale < 0) {
                                                                                                                    //negative value
                                                                                                                    $whole_per_value_str = "<b class='green-val'>" . env('CURRENCY_SYMBOL') . '' . $whole_per_value . '</b>';
                                                                                                                } else {
                                                                                                                    //positive value
                                                                                                                    $whole_per_value_str = "<b class='red-val'>" . env('CURRENCY_SYMBOL') . '(' . $whole_per_value . ')</b>';
                                                                                                                }
                                                                                                                
                                                                                                                $cal_perce_val_retail_pos = abs((float) $cal_perce_val_retail);
                                                                                                                $reatail_per_value = ((float) $vehicle_retail_value * (float) $cal_perce_val_retail_pos) / 100;
                                                                                                                if ($cal_perce_val_retail < 0) {
                                                                                                                    //negative value
                                                                                                                    $reatail_per_value_str = "<b class='green-val'>" . env('CURRENCY_SYMBOL') . '' . $reatail_per_value . '</b>';
                                                                                                                } else {
                                                                                                                    //positive value
                                                                                                                    $reatail_per_value_str = "<b class='red-val'>" . env('CURRENCY_SYMBOL') . '(' . $reatail_per_value . ')</b>';
                                                                                                                }
                                                                                                            @endphp
                                                                                                            <div
                                                                                                                class="fw-bold wholesale_val">
                                                                                                                Wholesale:
                                                                                                                {!! $whole_per_value_str !!}
                                                                                                            </div>
                                                                                                           
                                                                                                        </div>
                                                                                                        <div class="col-md-4 inspection_val_disp"
                                                                                                            style="{{ $ques_check_display }}">
                                                                                                            <div
                                                                                                                class="fw-bold retail_val">
                                                                                                                Retail:
                                                                                                                {!! $reatail_per_value_str !!}
                                                                                                                {{-- <b>{{env('CURRENCY_SYMBOL')}}{{$reatail_per_value}}</b> --}}
                                                                                                            </div>
                                                                                                           
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>

                                                                                                <div class="checkbox-radio-wrapper "
                                                                                                    style='{{ $ques_check_display }}'>
                                                                                                    <div class="radio-option"
                                                                                                        style="display:block">
                                                                                                        <div
                                                                                                            class="form-group row mb-5 ">
                                                                                                            {{-- <div class="col-md-1">
                                                                                </div> --}}
                                                                                                            <div
                                                                                                                class="col-md-4">
                                                                                                                <div
                                                                                                                    class="form-check">
                                                                                                                    <input
                                                                                                                        data-wholesale_value="{{ $option_value1_wholesale }}"
                                                                                                                        data-retail_value="{{ $option_value1_retail }}"
                                                                                                                        class="form-check-input radio-btn-check per_opt_radio"
                                                                                                                        type="radio"
                                                                                                                        value="{{ $option_label1 }}"
                                                                                                                        id="flexCheckDefault1first{{ $loption_id }}"
                                                                                                                        name="ques_child[{{ $options->id }}]"
                                                                                                                        @if ($option_label1 == $item_option_answerd) {{ 'checked' }} @endif
                                                                                                                        disabled>
                                                                                                                    <label
                                                                                                                        class="form-check-label"
                                                                                                                        for="flexCheckDefault1first{{ $loption_id }}">{{ $option_label1 }}</label>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="col-md-4">
                                                                                                                <div
                                                                                                                    class="fw-bold">
                                                                                                                    Wholesale:
                                                                                                                    <b>{{ $option_value1_wholesale }}%</b>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="col-md-4">
                                                                                                                <div
                                                                                                                    class="fw-bold">
                                                                                                                    Retail:
                                                                                                                    <b>{{ $option_value1_retail }}%</b>
                                                                                                                </div>

                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="radio-option"
                                                                                                        style="display:block">
                                                                                                        <div
                                                                                                            class="form-group row mb-5 ">
                                                                                                            {{-- <div class="col-md-1">
                                                                                </div> --}}
                                                                                                            <div
                                                                                                                class="col-md-4">
                                                                                                                <div
                                                                                                                    class="form-check">
                                                                                                                    <input
                                                                                                                        data-wholesale_value="{{ $option_value2_wholesale }}"
                                                                                                                        data-retail_value="{{ $option_value2_retail }}"
                                                                                                                        class="form-check-input radio-btn-check per_opt_radio"
                                                                                                                        type="radio"
                                                                                                                        value="{{ $option_label2 }}"
                                                                                                                        id="flexCheckDefault1second{{ $loption_id }}"
                                                                                                                        name="ques_child[{{ $options->id }}]"
                                                                                                                        @if ($option_label2 == $item_option_answerd) {{ 'checked' }} @endif
                                                                                                                        disabled>
                                                                                                                    <label
                                                                                                                        class="form-check-label"
                                                                                                                        for="flexCheckDefault1second{{ $loption_id }}">{{ $option_label2 }}</label>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="col-md-4">
                                                                                                                <div
                                                                                                                    class="fw-bold">
                                                                                                                    Wholesale:
                                                                                                                    <b>{{ $option_value2_wholesale }}%</b>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="col-md-4">
                                                                                                                <div
                                                                                                                    class="fw-bold">
                                                                                                                    Retail:
                                                                                                                    <b>{{ $option_value2_retail }}%</b>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                @endif
                                                                                @php
                                                                                    $i++;
                                                                                @endphp
                                                                            @endforeach
                                                                        </div>
                                                                    @endif
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {{-- =========================================== --}}
                                                    </div>
                                                    <div class="edit-wrapper d-flex justify-content-end py-6 px-9 d-none">
                                                        <button type="button"
                                                            class="btn btn-light btn-active-light-primary me-2 edit-cancel">Discard</button>
                                                        <button type="submit" class="btn btn-primary"
                                                            id="kt_account_profile_details_submit">Save Changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="separator separator-dashed"></div>
                                            @php
                                                $ip++;
                                            @endphp
                                        </form>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                        {{-- =========================================================== --}}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('pagespecificstyles')
    <style>
        .vehicle-info-stickey-wrapper {
            /* flex-direction: column; */
            align-items: flex-start;
        }
    </style>
@endsection
@section('pagespecificscripts')
    <script src="{{ asset('js/custom_js/inspection_report.js') }}"></script>
@endsection
