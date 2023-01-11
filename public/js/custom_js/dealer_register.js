$(document).ready(function () {

    // form validation
    $("#dealer_register_form").validate({
        // form rules
        rules: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            licence: {
                required: true,
            },
            address: {
                required: true,
            },
            state: {
                required: true,
            },
            inventory_location: {
                required: true,
            },
            contact_first_name: {
                required: true,
            },
            contact_last_name: {
                required: true,
            },
            mobile: {
                required: true,
            },
            email: {
                required: true,
            },
            carfax_api: {
                required: true,
            },
            autocheck_api: {
                required: true,
            },
            billtrust_api: {
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
            licence: {
                required: "Enter Licence Information",
            },
            address: {
                required: "Enter address",
            },
            state: {
                required: "Select state",
            },
            inventory_location: {
                required: "Enter Inventory Location.",
            },
            contact_first_name: {
                required: "Contact First Name",
            },
            contact_last_name: {
                required: "Contact Last Name",
            },
            mobile: {
                required: "Enter Mobile Number",
            },
            email: {
                required: "Enter Email",
            },
            carfax_api: {
                required: "Enter CarFax API Information",
            },
            autocheck_api: {
                required: "Enter AutoCheck API Information",
            },
            billtrust_account: {
                required: "Enter BillTrust API Information",
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
