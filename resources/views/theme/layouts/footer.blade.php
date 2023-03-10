
<!--begin::Javascript-->
		<!--begin::Global Javascript Bundle(used by all pages)-->
		<script src="{{asset('admin/assets/plugins/global/plugins.bundle.js')}}"></script>
		<script src="{{asset('admin/assets/js/scripts.bundle.js')}}"></script>
		<!--end::Global Javascript Bundle-->
		<!--begin::Page Vendors Javascript(used by this page)-->
		<script src="{{asset('admin/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js')}}"></script>
		<script src="{{asset('admin/assets/plugins/custom/datatables/datatables.bundle.js')}}"></script>
		<script src="{{asset('js/jquery.validate.js')}}"></script>
	<!--end::Page Vendors Javascript-->
	@yield('pagespecificscripts')
		<!--begin::Page Custom Javascript(used by this page)-->
		<script src="{{asset('admin/assets/js/widgets.bundle.js')}}"></script>
		<script src="{{asset('admin/assets/js/custom/widgets.js')}}"></script>
		<script src="{{asset('admin/assets/js/custom/apps/chat/chat.js')}}"></script>
		<script src="{{asset('admin/assets/js/custom/utilities/modals/upgrade-plan.js')}}"></script>
		<script src="{{asset('admin/assets/js/custom/utilities/modals/create-app.js')}}"></script>
		<script src="{{asset('admin/assets/js/custom/utilities/modals/users-search.js')}}"></script>
		<script src="{{asset('admin/assets/plugins/custom/formrepeater/formrepeater.bundle.js')}}"></script>
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
        <script>
            jQuery(document).ready(function(){
                    jQuery(document).on('click','.admin_logout_btn',function(){
                        jQuery(document).find('form#logout-form').submit();
                    });

					setTimeout(() => {
						$('.alert').alert('close');
					}, 3000);
            });
        </script>
	</body>
	<!--end::Body-->
</html>