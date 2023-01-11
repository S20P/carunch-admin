$(document).ready(function() {
    jQuery.validator.addMethod("checkYear", function(value, element) {
        var year = $(element).val();
        return (year > 1700) && (year <= (new Date()).getFullYear() + 2);
    }, "Invalid year");
    jQuery.validator.addMethod("decimal_point", function(value, element) {
        return this.optional(element) || /^\d{0,6}(.\d+)?$/i.test(value);
    }, "The field must be between 0 and 999999.99.");

    $("#add_form").validate({
        errorElement: 'span',
        errorClass: 'invalid-feedback',
        rules: {
            first_name: {
                required: true,
                maxlength: 160,
            },
            last_name: {
                required: true,
                maxlength: 160,
            },
            address: {
                required: true,
                maxlength: 250,
            },
            state: {
                required: true,
                maxlength: 160,
            },

            mobile: {
                required: true,
                maxlength: 15,
                number: true
            },
            email: {
                required: true,
                email: true,
                maxlength: 160,
            },
            zipcode: {
                required: true,
                maxlength: 10,
            },
            vin_no: {
                required: true,
                maxlength: 160,
            },
            vehicle_type_id: {
                required: true,
            },
            vehicle_year: {
                required: true,
                checkYear: true,
            },
            vehicle_make: {
                required: true,
                maxlength: 160,
            },
            vehicle_model: {
                required: true,
                maxlength: 160,
            },
            vehicle_mileage: {
                required: true,
                number: true,
                maxlength: '9223372036854775807'
            },
            vehicle_wholesale_value: {
                required: true,
                decimal_point: true
            },
            vehicle_retail_value: {
                required: true,
                decimal_point: true
            },
            inspector_id: {
                required: true,
            },
        },
        // validation message
        messages: {
            first_name: {
                required: "The first name field is required.",
            },
            last_name: {
                required: "The last name field is required.",
            },
            address: {
                required: "The address field is required.",
            },
            state: {
                required: "The state field is required.",
            },
            mobile: {
                required: "The mobile field is required.",
            },
            email: { required: "The email field is required.", },
            zipcode: { required: "The zipcode field is required.", },
            vin_no: { required: "The vin number field is required.", },
            vehicle_type_id: { required: "The vehicle type field is required.", },
            vehicle_year: { required: "The vehicle year field is required.", },
            vehicle_make: { required: "The vehicle make field is required.", },
            vehicle_model: { required: "The vehicle model field is required.", },
            vehicle_mileage: { required: "The vehicle mileage field is required.", },
            vehicle_wholesale_value: { required: "The vehicle wholesale value field is required.", },
            vehicle_retail_value: { required: "The vehicle retail value field is required.", },
            inspector_id: { required: "The inspector field is required.", },
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function(form) {
            return true;
        },
    });
    $("#edit_form").validate({
        errorElement: 'span',
        errorClass: 'invalid-feedback',
        rules: {
            vin_no: {
                required: true,
                maxlength: 160,
            },
            vehicle_type_id: {
                required: true,
            },
            vehicle_year: {
                required: true,
                checkYear: true,
            },
            vehicle_make: {
                required: true,
                maxlength: 160,
            },
            vehicle_model: {
                required: true,
                maxlength: 160,
            },
            vehicle_mileage: {
                required: true,
                number: true,
                maxlength: '9223372036854775807'
            },
            vehicle_wholesale_value: {
                required: true,
                decimal_point: true
            },
            vehicle_retail_value: {
                required: true,
                decimal_point: true
            },
            inspector_id: {
                required: true,
            },
        },
        // validation message
        messages: {
            zipcode: { required: "The zipcode field is required.", },
            vin_no: { required: "The vin number field is required.", },
            vehicle_type_id: { required: "The vehicle type field is required.", },
            vehicle_year: { required: "The vehicle year field is required.", },
            vehicle_make: { required: "The vehicle make field is required.", },
            vehicle_model: { required: "The vehicle model field is required.", },
            vehicle_mileage: { required: "The vehicle mileage field is required.", },
            vehicle_wholesale_value: { required: "The vehicle wholesale value field is required.", },
            vehicle_retail_value: { required: "The vehicle retail value field is required.", },
            inspector_id: { required: "The inspector field is required.", },
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function(form) {
            return true;
        },
    });

});