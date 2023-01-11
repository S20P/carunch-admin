item_list();

function item_list() {
    if (jQuery(document).find('#item_table').length > 0) {
        $("#item_table").dataTable().fnDestroy();
        var Ot = jQuery(document).find('#item_table').DataTable({
            processing: true,
            serverSide: true,
            filter: true,
            "searching": true,
            ajax: itemOptionIndex,
            columns: [
                { data: 'DT_RowIndex', name: 'DT_RowIndex' },
                { data: 'item_name', name: 'item_name' },
                { data: 'location_name', name: 'location_name' },
                { data: 'type_name', name: 'type_name' },
                { data: 'active', name: 'active' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            columnDefs: [{
                targets: -1,
                orderable: false,
            },
            {
                targets: 0,
                orderable: false,
            }
            ]
        });

        jQuery(document).find('input[name="data_tbl_search"]').on('keyup', function () {
            Ot.search(this.value).draw();
        });
    }
}

$(document).on('click', ".delete_item", function () {
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
    }).then((function (isConfirm) {
        if (isConfirm.isConfirmed) {
            $.ajax({
                type: "POST",
                url: id,
                data: ({ submit_type: 'ajax', '_token': config.data.csrf, _method: 'DELETE' }),
                success: function (data) {
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
        }
        else {
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
