$(document).ready(function () {

    // form validation
    $("#vehicle_register_form").validate({
        // form rules
        rules: {
            name: {
                required: true,
            },
            code: {
                required: true,
            },
        },
        // validation message
        messages: {
            name: {
                required: "Vehicle Name",
            },
            code: {
                required: "Vehicle Code",
            },
        },
        errorPlacement: function (error, element) {
            error.addClass("mt-2");
            error.appendTo(element.parent());
        },
        submitHandler: function (form) {
            return true;
        },
    });

});
