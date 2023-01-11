item_list();

function item_list() {
    if (jQuery(document).find('#item_table').length > 0) {
        $("#item_table").dataTable().fnDestroy();
        var Ot = jQuery(document).find('#item_table').DataTable({
            processing: true,
            serverSide: true,
            filter: true,
            "searching": true,
            "responsive": true,
            ajax: {
                url: itemIndex,
                data: function(d) {
                    d.inspection_location_id = $('#inspection_location_id').val();
                    d.inspection_type_id = $('#inspection_type_id').val();
                    d.status = $('#status').val();
                    d.vehicle_types = $('#vehicle_types').val();
                }
            },
            columns: [
                { data: 'position', name: 'position', 'visible': false },
                { data: 'name', name: 'name' },
                { data: 'inspection_location_id', name: 'inspection_location_id' },
                { data: 'inspection_type_id', name: 'inspection_type_id' },
                // { data: 'vehicle_types', name: 'vehicle_types', orderable: false },
                { data: 'status', name: 'status' },
                // { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            columnDefs: [{
                    targets: -1,
                    orderable: false,
                },
                {
                    targets: 0,
                    orderable: true,
                }
            ]
        });

        jQuery(document).find('input[name="data_tbl_search"]').on('keyup', function() {
            Ot.search(this.value).draw();
        });
        $('.filter-apply-btn').click(function() {
            Ot.draw();
        });
        $('.filter-clear-btn').click(function() {
            $('#inspection_location_id').val(null).trigger('change');
            $('#inspection_type_id').val(null).trigger('change');
            $('#status').val(null).trigger('change');
            $('#vehicle_types').val(null).trigger('change');
            Ot.draw();
        });
    }
}

$(document).on('click', ".delete_item", function() {
    var id = $(this).data('id');
    Swal.fire({
        text: "Are you sure you want to delete selected inspector?",
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
                    console.log(data);
                    // data = JSON.parse(data);

                    if (data.status == 1) {
                        Swal.fire({
                            text: "You have deleted all selected Item!.",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary"
                            }
                        });
                        // toastr.error("Oops ! Error: Deleted Successfully.!!!");
                        item_list();
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