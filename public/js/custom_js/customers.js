jQuery(document).ready(function() {
    $("#customer_edit_form").validate({
        // form rules
        rules: {
            first_name: {
                required: true,
                maxlength: 160
            },
            last_name: {
                required: true,
                maxlength: 160
            },
            address: {
                required: true,
                maxlength: 250
            },
            state: {
                required: true,
                maxlength: 160
            },
            mobile: {
                required: true,
                maxlength: 10,
                number: true,
            },
            email: {
                required: true,
                maxlength: 160,
                email: true

            },
            zipcode: {
                required: true,
                maxlength: 10
            },

        },
        // validation message
        messages: {},
        errorPlacement: function(error, element) {
            error.addClass("mt-2");
            error.appendTo(element.parent());
        },
        submitHandler: function(form) {
            return true;
        },
    });
    if (jQuery(document).find('#Datatable').length > 0) {
        var Ot = $("#Datatable").dataTable().fnDestroy();
        var Ot = jQuery(document).find('#Datatable').DataTable({
            processing: true,
            serverSide: true,
            filter: true,
            "searching": true,
            ajax: customersIndex,
            columns: [
                { data: 'DT_RowIndex', name: 'DT_RowIndex' },
                { data: 'first_name', name: 'first_name' },
                { data: 'last_name', name: 'last_name' },
                { data: 'email', name: 'email' },
                { data: 'mobile', name: 'mobile' },
                { data: 'state', name: 'state' },
                { data: 'address', name: 'address' },
                { data: 'zipcode', name: 'zipcode' },
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

        jQuery(document).find('input[name="data_tbl_search"]').on('keyup', function() {
            Ot.search(this.value).draw();
        });
    }
    $(document).on('click', ".delete_row", function() {
        var id = $(this).data('id');
        Swal.fire({
            text: "Are you sure you want to delete selected customer?",
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

                        if (data.status == 1) {
                            Swal.fire({
                                text: "You have deleted selected customer!.",
                                icon: "success",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn fw-bold btn-primary"
                                }
                            });
                            // toastr.error("Oops ! Error: Deleted Successfully.!!!");
                            Ot.draw();
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
});