$(document).ready(function() {

    // form validation
    $("#add_type_form").validate({
        // form rules
        rules: {
            type: {
                required: true,
            },
            // location_id: {
            //     required: true,
            // },
            // vehicle_types: {
            //     required: true,
            // },
        },
        // validation message
        messages: {
            type: {
                required: "Inspection Type is required",
            },
            // location_id: {
            //     required: "Select Inspection Location.",
            // },
            // vehicle_types: {
            //     required: "Select Vehicle Types.",
            // },
        },
        errorPlacement: function(error, element) {
            error.addClass("mt-2");
            error.appendTo(element.parent());
        },
        submitHandler: function(form) {
            return true;
        },
    });

    // form validation
    $(".inspection-type-edit-form").validate({
        // form rules
        rules: {
            type: {
                required: true,
            },
            // location_id: {
            //     required: true,
            // },
            // vehicle_types: {
            //     required: true,
            // },
        },
        // validation message
        messages: {
            type: {
                required: "Inspection Type is required",
            },
            // location_id: {
            //     required: "Select Inspection Location.",
            // },
            // vehicle_types: {
            //     required: "Select Vehicle Types.",
            // },
        },
        errorPlacement: function(error, element) {
            error.addClass("mt-2");
            error.appendTo(element.parent());
        },
        submitHandler: function(form) {
            return true;
        },
    });

});