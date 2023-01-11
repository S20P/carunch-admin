<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head>
		<title>Carunch Admin</title>
		<meta charset="utf-8" />
		<!--begin::Fonts-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<!--end::Fonts-->
		<!--begin::Page Vendor Stylesheets(used by this page)-->
		<link href="{{asset('admin/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{asset('admin/assets/plugins/custom/datatables/datatables.bundle.css')}}" rel="stylesheet" type="text/css" />
		<!--end::Page Vendor Stylesheets-->
		<!--begin::Global Stylesheets Bundle(used by all pages)-->
		<link href="{{asset('admin/assets/plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{asset('admin/assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{asset('css/custom.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{asset('admin/assets/plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
		<link href="{{ asset('vendor/laravel_backup_panel/app.css') }}" rel="stylesheet">
		@livewireStyles
		<!-- end::Global Stylesheets Bundle-->
		@yield('pagespecificstyles')
        <script>
        var config = {
                data: {
                    csrf:"{{csrf_token()}}",
                    base_url:"{{  url('') }}",
					CURRENCY_SYMBOL:"{{env('CURRENCY_SYMBOL')}}"
                }
            };
    	</script>
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
		<!--begin::Main-->