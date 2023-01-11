@extends('theme.layouts.app')
@section('main-content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
            <div data-kt-swapper="true" data-kt-swapper-mode="prepend"
                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                <h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">Vehicle Report Order</h1>
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
                    <li class="breadcrumb-item text-dark">Add</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            @if ($message = Session::get('success'))
            <div class="alert alert-success d-flex align-items-center p-5 mb-10">
                <span class="svg-icon svg-icon-2hx svg-icon-success me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                    <form id="add_form" class="form" method="post"
                        action="{{route('order_requests.store')}}">
                        @csrf
                        <div class="card-body border-top p-9">
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label required fw-bold fs-6">Full Name</label>
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-lg-6 fv-row">
                                            <input type="text" name="first_name"
                                                class="form-control @error('first_name') is-invalid @enderror form-control-lg form-control-solid mb-3 mb-lg-0"
                                                placeholder="First name" value='{{old("first_name")}}' />
                                            @error('first_name')
                                            <span class="invalid-feedback" role="alert">
                                                {{ $message }}
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="col-lg-6 fv-row">
                                            <input type="text" name="last_name"
                                                class="form-control @error('last_name') is-invalid @enderror form-control-lg form-control-solid"
                                                placeholder="Last name" value='{{old("last_name")}}'/>
                                            @error('last_name')
                                            <span class="invalid-feedback" role="alert">
                                                {{ $message }}
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Mobile</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="Phone number must be active"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="tel" name="mobile"
                                        class="form-control form-control-lg form-control-solid @error('mobile') is-invalid @enderror" 
                                        placeholder="Mobile number" value='{{old("mobile")}}' />
                                    @error('mobile')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">Email</label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="email"
                                        class="form-control form-control-lg form-control-solid @error('email') is-invalid @enderror"
                                        placeholder="Email address" value='{{old("email")}}'/>
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label required fw-bold fs-6">Address</label>
                                <div class="col-lg-8 fv-row">
                                    <textarea placeholder='Address' name="address"
                                        class="form-control form-control-lg form-control-solid @error('address') is-invalid @enderror">{{old("address")}}</textarea>
                                    @error('address')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">State</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <select name="state" aria-label="Select a State" data-control="select2"
                                        data-placeholder="Select a State..."
                                        class="form-select form-select-solid form-select-lg fw-bold @error('state') is-invalid @enderror">
                                        <option value="">Select a State...</option>
                                        @foreach($states as $state)
                                        <option value="{{ $state->name }}" @if (old("state")==$state->name)
                                            {{'selected'}}
                                        @endif>{{ $state->name }}</option>
                                        @endforeach
                                    </select>
                                    @error('state')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Zipcode</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="zipcode"
                                        class="form-control @error('zipcode') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="Zipcode" value='{{old("zipcode")}}'/>
                                    @error('zipcode')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Vehicle Type</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <select name="vehicle_type_id" aria-label="Select a vehicle" data-control="select2"
                                        data-placeholder="Select a Vehicle..."
                                        class="form-select form-select-solid form-select-lg fw-bold @error('vehicle_type_id') is-invalid @enderror">
                                        <option value="">Select a vehicle...</option>
                                        @foreach($vehicle_types as $vehicle_type)
                                        <option value="{{ $vehicle_type->id }}" @if (old('vehicle_type_id')==$vehicle_type->id)
                                            {{'selected'}}
                                        @endif>{{ $vehicle_type->name }}</option>
                                        @endforeach
                                    </select>
                                    @error('vehicle_type_id')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">VIN Number</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="vin_no"
                                        class="form-control @error('vin_no') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="VIN Number" value='{{old("vin_no")}}'/>
                                    @error('vin_no')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Vehicle Year</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="vehicle_year"
                                        class="form-control @error('vehicle_year') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="Vehicle Year" value='{{old("vehicle_year")}}'/>
                                    @error('vehicle_year')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Vehicle Make</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="vehicle_make"
                                        class="form-control @error('vehicle_make') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="Vehicle Make" value='{{old("vehicle_make")}}'/>
                                    @error('vehicle_make')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Vehicle Model</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="vehicle_model"
                                        class="form-control @error('vehicle_model') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="Vehicle Model" value='{{old("vehicle_model")}}'/>
                                    @error('vehicle_model')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Vehicle Mileage</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="vehicle_mileage"
                                        class="form-control @error('vehicle_mileage') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="Vehicle Mileage" value='{{old("vehicle_mileage")}}'/>
                                    @error('vehicle_mileage')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Vehicle Wholesale Value</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="vehicle_wholesale_value"
                                        class="form-control @error('vehicle_wholesale_value') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="Vehicle Wholesale Value" value='{{old("vehicle_wholesale_value")}}'/>
                                    @error('vehicle_wholesale_value')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Vehicle Retail Value</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <input type="text" name="vehicle_retail_value"
                                        class="form-control @error('vehicle_retail_value') is-invalid @enderror form-control-lg form-control-solid"
                                        placeholder="Vehicle Retail Value" value='{{old("vehicle_retail_value")}}'/>
                                    @error('vehicle_retail_value')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-6">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Assign Inspector</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="State of origination"></i>
                                </label>
                                <div class="col-lg-8 fv-row">
                                    <select name="inspector_id" aria-label="Select a vehicle" data-control="select2"
                                        data-placeholder="Select a Inspector..."
                                        class="form-select form-select-solid form-select-lg fw-bold @error('inspector_id') is-invalid @enderror">
                                        <option value="">Select a Inspectors...</option>
                                        @foreach($Inspectors as $Inspector)
                                        <option value="{{$Inspector->id}}" @if (old('inspector_id')==$Inspector->id)
                                            {{'selected'}}
                                        @endif>{{ $Inspector->inspector_full_name }}</option>
                                        @endforeach
                                    </select>
                                    @error('inspector_id')
                                    <span class="invalid-feedback" role="alert">
                                        {{ $message }}
                                    </span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-end py-6 px-9">
                            <button type="button" class="btn btn-light btn-active-light-primary me-2"  onclick="history.back()">Cancel</button>
                            <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">Save
                                Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('pagespecificscripts')
<script src="{{asset('js/custom_js/request_add.js')}}"></script>
@endsection