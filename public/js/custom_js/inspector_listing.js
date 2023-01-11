inspector_list();

function inspector_list()
{
if (jQuery(document).find('#inspectors_table').length > 0) {
    $("#inspectors_table").dataTable().fnDestroy();
    var Ot = jQuery(document).find('#inspectors_table').DataTable({
        processing: true,
        serverSide: true,
        filter: true,
        "searching": true,
        ajax: inspectorIndex,
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'inspector_full_name', name: 'inspector_full_name' },
            { data: 'mobile', name: 'mobile' },
            { data: 'email', name: 'email' },
            { data: 'state', name: 'state' },
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
$(document).on('click', ".delete_inspector", function () {
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
                            text: "You have deleted all selected inspector!.",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary"
                            }
                        });
                        // toastr.error("Oops ! Error: Deleted Successfully.!!!");
                        inspector_list();
                    }else{
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
