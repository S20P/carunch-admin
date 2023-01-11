$(document).ready(function () {

    // form validation
    $("#inspector_register_form").validate({
        // form rules
        rules: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            address: {
                required: true,
            },
            state: {
                required: true,
            },
            
            mobile: {
                required: true,
            },
            email: {
                required: true,
            },
        },
        // validation message
        messages: {
            first_name: {
                required: "Dealer First Name",
            },
            last_name: {
                required: "Dealer Last Name",
            },
            address: {
                required: "Enter address",
            },
            state: {
                required: "Select state",
            },
            mobile: {
                required: "Enter Mobile Number",
            },
            email: {
                required: "Enter Email",
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
