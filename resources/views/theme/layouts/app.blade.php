@include('theme.layouts.header')
<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
                @include('theme.layouts.sidebar')
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                @include('theme.layouts.topbar')

                @yield('main-content')

                @include('theme.layouts.copyright')
            </div>
            </div>
</div>  
@include('theme.layouts.footer')          