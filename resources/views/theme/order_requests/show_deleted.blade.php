@extends('theme.layouts.app')
@section('main-content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar" id="kt_toolbar">
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <div data-kt-swapper="true" data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                    class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                    <h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">Vehicle Report Order Deleted</h1>
                    <span class="h-20px border-gray-300 border-start mx-4"></span>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <li class="breadcrumb-item text-muted">
                            <a href="{{ route('home') }}" class="text-muted text-hover-primary">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-300 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-muted">
                            <a href="{{route('order_requests.indexDeleted')}}" class="text-muted text-hover-primary">Vehicle Report Order Deleted</a>
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
                    <div class="d-flex flex-wrap fw-bold fs-6 pe-2">
                        <span
                            class="d-flex align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                            <span class="svg-icon svg-icon-4 me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path opacity="0.3"
                                        d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            {{ $OrderRequest->hasCustomers->full_name }}
                        </span>
                        <span
                            class="d-flex align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                            <!--begin::Svg Icon | path: assets/media/icons/duotune/communication/com005.svg-->
                            <span class="svg-icon svg-icon-4 me-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                                        fill="currentColor" />
                                    <path opacity="0.3"
                                        d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                                        fill="currentColor" />
                                </svg></span>
                            <!--end::Svg Icon-->{{ $OrderRequest->hasCustomers->mobile }}
                        </span>
                        <span
                            class="d-flex align-items-center text-gray-400 text-hover-primary me-5 text-gray-800 text-hover-primary fw-bolder">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com011.svg-->
                            <span class="svg-icon svg-icon-4 me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path opacity="0.3"
                                        d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->{{ $OrderRequest->hasCustomers->email }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="post d-flex flex-column-fluid pt-17" id="kt_post">
            <div id="kt_content_container" class="container-xxl">
                @if ($message = Session::get('success'))
                    <div class="alert alert-success d-flex align-items-center p-5 mb-10">
                        <span class="svg-icon svg-icon-2hx svg-icon-success me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3"
                                    d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <div class="d-flex flex-column">
                            <h4 class="mb-1 text-dark">Success....!!!!</h4>
                            <span>{{ $message }}</span>
                        </div>
                    </div>
                @elseif ($message = Session::get('error'))
                    <div class="alert alert-danger d-flex align-items-center p-5 mb-10">
                        <span class="svg-icon svg-icon-2hx svg-icon-danger me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3"
                                    d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <div class="d-flex flex-column">
                            <h4 class="mb-1 text-dark">Failed....!!!!</h4>
                            <span>{{ $message }}</span>
                        </div>
                    </div>
                @endif
                <div class="card mb-5 mb-xl-10">
                    <div id="kt_account_settings_profile_details" class="collapse show">
                        <form id="edit_form" class="form" method="post"
                            action="{{ route('order_requests.update', $OrderRequest->id) }}">
                            @csrf
                            @method('PUT')
                            <div class="card-body border-top p-9">
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Vehicle Type</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                            @foreach ($vehicle_types as $vehicle_type)
                                                    @if ($OrderRequest->vehicle_type_id == $vehicle_type->id) 
                                                    <p class="form-control  form-control-lg form-control-solid">
                                                        {{ $vehicle_type->name }}
                                                    </p>
                                                    @endif
                                            @endforeach
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">VIN Number</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        <p class="form-control  form-control-lg form-control-solid">
                                            {{ $OrderRequest->vin_no }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Vehicle Year</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        <p class="form-control  form-control-lg form-control-solid">
                                            {{ $OrderRequest->vehicle_year }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Vehicle Make</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        <p class="form-control  form-control-lg form-control-solid">
                                            {{ $OrderRequest->vehicle_make }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Vehicle Model</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        <p class="form-control  form-control-lg form-control-solid">
                                            {{ $OrderRequest->vehicle_model }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Vehicle Mileage</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        <p class="form-control  form-control-lg form-control-solid">
                                            {{ $OrderRequest->vehicle_mileage }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Vehicle Wholesale Value</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        <p class="form-control  form-control-lg form-control-solid">
                                            {{ $OrderRequest->vehicle_wholesale_value }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Vehicle Retail Value</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        <p class="form-control  form-control-lg form-control-solid">
                                            {{ $OrderRequest->vehicle_retail_value }}
                                        </p>
                                    </div>
                                </div>
                                @if($OrderRequest->inspector_id!='' && $OrderRequest->inspector_id!=null)
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">
                                        <span class="">Assign Inspector</span>
                                    </label>
                                    <div class="col-lg-8 fv-row">
                                        @foreach ($Inspectors as $Inspector)
                                            @if ($OrderRequest->inspector_id == $Inspector->id)
                                                <p class="form-control  form-control-lg form-control-solid">
                                                    {{ $Inspector->inspector_full_name }}
                                                </p>
                                            @endif
                                        @endforeach
                                    </div>
                                </div>
                                @endif
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('pagespecificscripts')
    <script src="{{ asset('js/custom_js/deleted_request.js') }}"></script>
@endsection
