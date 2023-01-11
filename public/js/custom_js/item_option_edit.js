$(document).ready(function () {
    // form validation
    $("#add_item_option_form").validate({
        // form rules
        rules: {
            kt_docs_repeater_advanced: {
                required: true,
            },
            inspection_location_id: {
                required: true,
            },
            inspection_type_id: {
                required: true,
            },
            inspection_item_id: {
                required: true,
            },
            position: {
                required: true,
            },
        },
        // validation message
        messages: {
            kt_docs_repeater_advanced: {
                required: "Enter Option Label",
            },
            type: {
                required: "Inspection Item Name",
            },
            inspection_location_id: {
                required: "Select Inspection Location.",
            },
            inspection_type_id: {
                required: "Select Inspection Type.",
            },
            inspection_item_id: {
                required: "Select Inspection Item.",
            },
            position: {
                required: "Enter Position.",
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

    $('[name^="kt_docs_repeater_advanced"]').each(function(){
        console.log("hi");
        $(this).rules("add", {
            required: true,
            messages: {
                required: "Specify the Option Label"
            }
        } );            
    }); 

    $(document).on('change', '#inspection_location_id', function () {
        var id = $(this).val();
        $.ajax({
            url: inspectionTypeIndex + '/' + id,
            processData: false,
            async: true,
            contentType: false,
            success: function (json) {
                datas = JSON.parse(json);
                $('#inspection_type_id').html(datas.data);
            },
        });
    });

    $(document).on('change', '#inspection_type_id', function () {
        var id = $(this).val();
        $.ajax({
            url: inspectionItemIndex + '/' + id,
            processData: false,
            async: true,
            contentType: false,
            success: function (json) {
                datas = JSON.parse(json);
                $('#inspection_item_id').html(datas.data);
            },
        });
    });

    $('#kt_docs_repeater_advanced').repeater({
        initEmpty: false,

        defaultValues: {
            'text-input': 'foo'
        },

        show: function () {
           $(this).slideDown();

            // Re-init select2
            $(this).find('[data-kt-repeater="select2"]').select2();
        },

        hide: function (deleteElement) {
            $(this).slideUp(deleteElement);
        },

        ready: function () {
            // Init select2
           $('[data-kt-repeater="select2"]').select2();

        }
    });

    $(document).on('change','.parent_input_option',function(){
        if($(this).val() == 1)
        {
        $(this).parent().parent().parent().find('.radio-option').removeAttr('style');
        }else{
            $(this).parent().parent().parent().find('.radio-option').attr('style','display:none');
        }
    });
});
