$(document).ready(function () {

    // form validation
    $("#add_location_form").validate({
        // form rules
        rules: {
            name: {
                required: true,
            },
        },
        // validation message
        messages: {
            name: {
                required: "Inspection Location Name",
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
