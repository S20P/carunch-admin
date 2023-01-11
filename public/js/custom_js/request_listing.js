request_list();

function request_list() {
    if (jQuery(document).find('#request_table').length > 0) {
        $("#request_table").dataTable().fnDestroy();
        var Ot = jQuery(document).find('#request_table').DataTable({
            processing: true,
            serverSide: true,
            "fixedHeader": {
                header: true,
                headerOffset: $('#kt_content').offset().top + 16
            },
            // scrollY: '500px',
            // scrollCollapse: true,
            filter: true,
            "searching": true,
            "scrollX": true,
            ajax: requestIndex,
            columns: [
                { data: 'DT_RowIndex', name: 'DT_RowIndex' },
                { data: 'user_full_name', name: 'user_full_name' },
                { data: 'email', name: 'email' },
                { data: 'vin_no', name: 'vin_no' },
                { data: 'vehicle_info', name: 'vehicle_info' },
                { data: 'vehicle_wholesale_value', name: 'vehicle_wholesale_value' },
                { data: 'vehicle_retail_value', name: 'vehicle_retail_value' },
                { data: 'inspector_full_name', name: 'inspector_full_name' },
                { data: 'active', name: 'active' },
                { data: 'action', name: 'action', orderable: false, searchable: false, "width": "50%" },
            ],
            columnDefs: [{
                    targets: -1,
                    orderable: false,
                },
                {
                    targets: 0,
                    orderable: false,
                },
            ]
        });
        jQuery(document).find('input[name="data_tbl_search"]').on('keyup', function() {
            Ot.search(this.value).draw();
        });
    }
}
$(document).on('click', ".delete_request", function() {
    var id = $(this).data('id');
    console.log(id);
    Swal.fire({
        text: "Are you sure you want to delete selected Request?",
        icon: "warning",
        showCancelButton: !0,
        buttonsStyling: !1,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: "No, cancel",
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-active-light-primary"
        }
    }).then((function(isConfirm) {
        if (isConfirm.isConfirmed) {
            $.ajax({
                type: "POST",
                url: id,
                data: ({ submit_type: 'ajax', '_token': config.data.csrf, _method: 'DELETE' }),
                success: function(data) {
                    if (data.status == 1) {
                        Swal.fire({
                            text: "You have deleted selected Request!.",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary"
                            }
                        });
                        // toastr.error("Oops ! Error: Deleted Successfully.!!!");
                        request_list();
                    }
                },
            });
        } else {
            Swal.fire({
                text: "Failed...!!!",
                icon: "error",
                buttonsStyling: !1,
                confirmButtonText: "Ok, got it!",
                customClass: {
                    confirmButton: "btn fw-bold btn-primary"
                }
            });
        }
    }))
});