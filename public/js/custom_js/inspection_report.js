$(document).ready(function() {
    var base_url = config.data.base_url;
    var CURRENCY_SYMBOL = config.data.CURRENCY_SYMBOL;

    jQuery(document).on('change', 'input.no_prior_event_observed_checkbox', function() {
         console.log("main-radio");
         var is_inspection_val_disp = jQuery(this).parentsUntil('.edit-question-form').find(".flex-stack").find('.is_inspection_val_disp');
        
         console.log("is_inspection_val_disp",is_inspection_val_disp);

         var inspection_val_disp_empty = jQuery(this).parentsUntil('.edit-question-form').find(".flex-stack").find('.inspection_val_disp_empty');
       
         if(!jQuery(this).is(':checked')) {
            is_inspection_val_disp.show();
            inspection_val_disp_empty.hide();

            jQuery(this).parentsUntil('.edit-question-form').find(".per_opt_radio:checked").each(function() {
                $(this).prop("checked", false);
            });

            var allCheckbox = $(this).parentsUntil('.option-item-wrap').parent().find(".sub-question-radio").find('input.checkbox-question');
            console.log("allCheckbox",allCheckbox);   
            allCheckbox.each(function() {
                    $(this).prop("checked", false);
             });

         }else{
            is_inspection_val_disp.hide();
            inspection_val_disp_empty.show();

            var retail_val_total_original = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.retail_val_total_original');
            var wholesale_val_total_original = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.wholesale_val_total_original');
            retail_val_total_original.val(0);
            wholesale_val_total_original.val(0);
         }

         topAdjustmentValueChange();
    });

    jQuery(document).on('change', 'input.checkbox-question', function() {
        var form = jQuery(this).parentsUntil('.edit-question-form').parent();
        console.log("form1",form);
        if (jQuery(this).is(':checked')) {
            jQuery(this).parent().parent().parent().next('.checkbox-radio-wrapper').fadeIn(100);
            jQuery(this).parent().parent().find('.inspection_val_disp').fadeIn(100);
        } else {
            jQuery(this).parent().parent().parent().next('.checkbox-radio-wrapper').fadeOut(100);
            jQuery(this).parent().parent().find('.inspection_val_disp').fadeOut(100);

            $(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find(".per_opt_radio").each(function() {
                console.log("$(this)",$(this));
                $(this).prop("checked", false);
            });           
        }

        var new_wholesale_val_total_str = 0; 
        var new_retail_val_total_str = 0;
        var vehicle_wholesale_value = parseFloat(jQuery(document).find('input[name="vehicle_wholesale_value"]').val());
        var vehicle_retail_value = parseFloat(jQuery(document).find('input[name="vehicle_retail_value"]').val());
        var sum_wholesale = 0;
        var sum_retail = 0;

        var retail_val_total_str = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.retail_val_total_str b');
        var wholesale_val_total_str = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.wholesale_val_total_str b');
        
        var retail_val_total_original = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.retail_val_total_original');
        var wholesale_val_total_original = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.wholesale_val_total_original');
       
        form.find(".per_opt_radio:checked").each(function() {

            var isCheckboxQuestion = $(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find(".sub-question-radio").find('input.checkbox-question');
            console.log("isCheckboxQuestion",isCheckboxQuestion.is(':checked'));
            if(isCheckboxQuestion.is(':checked')){
                var wholesale_value_per = $(this).data('wholesale_value');
                var wholesale_value_per_pos = wholesale_value_per;                
                var wholesale_val = (vehicle_wholesale_value * wholesale_value_per_pos) / 100;
                sum_wholesale +=wholesale_val;

                var retail_value_per = $(this).data('retail_value');
                var retail_value_per_pos = retail_value_per;                
                var retail_val = (vehicle_retail_value * retail_value_per_pos) / 100;
                sum_retail +=retail_val;
            }
         });

         if (sum_wholesale <= 0) {
            new_wholesale_val_total_str = CURRENCY_SYMBOL + '' + Math.abs(sum_wholesale) + '';
            wholesale_val_total_str.removeClass('red-val').addClass('green-val');
        }else{
            new_wholesale_val_total_str = CURRENCY_SYMBOL + '(' + Math.abs(sum_wholesale) + ')';
            wholesale_val_total_str.addClass('red-val').removeClass('green-val');
        }        
        wholesale_val_total_str.text(new_wholesale_val_total_str);
        wholesale_val_total_original.val(sum_wholesale);

        if (sum_retail <= 0) {
            new_retail_val_total_str = CURRENCY_SYMBOL + '' + Math.abs(sum_retail) + '';
            retail_val_total_str.removeClass('red-val').addClass('green-val');
        }else{
            new_retail_val_total_str = CURRENCY_SYMBOL + '(' + Math.abs(sum_retail) + ')';
            retail_val_total_str.addClass('red-val').removeClass('green-val');
        }       
        retail_val_total_str.text(new_retail_val_total_str);
        retail_val_total_original.val(sum_retail);

        topAdjustmentValueChange();
    });


    jQuery(document).on('change', 'input[name="no_prior_event_observed"]', function() {

        if (jQuery(this).is(':checked')) {
            jQuery(this).parentsUntil('.option-item-wrap').parent().find('.sub-question-wraapper').fadeOut(100);
        } else {
            jQuery(this).parentsUntil('.option-item-wrap').parent().find('.sub-question-wraapper').fadeIn(100);
        }
    });
    jQuery(document).on('click', 'a.edit-btn', function() {
        jQuery(this).parent().parent().next().find('.edit-wrapper').removeClass('d-none');
        jQuery(this).parent().parent().next().find('input').each(function() {
            jQuery(this).prop("disabled", false);
        });
    });
    jQuery(document).on('click', '.edit-cancel', function() {
        jQuery(this).parent().addClass('d-none');
        jQuery(this).parent().parent().find('input').each(function() {
            jQuery(this).prop("disabled", true);
        });
    });
    jQuery.validator.addClassRules("radio-btn-check", {
        required: function(element) {
            if (jQuery(element).parentsUntil('.radio-checkbox-main-wrapper').parent().find('.checkbox-question').is(':checked')) {
                return true;
            } else {
                return false;
            }
        },
    });

    jQuery('form.edit-question-form').each(function() {

        console.log("test");

        jQuery(this).validate({
            errorElement: 'span',
            ignore: [],
            errorClass: 'invalid-feedback',
            rules: {},
            messages: {
                language_attachments: { extension: "The language attachments must be a file of type: application/json." },
            },
            highlight: function(element, errorClass, validClass) {
                if ($(element).attr("type") == "radio") {
                    jQuery('input[name="' + $(element).attr("name") + '"]').each(function() {
                        $(this).addClass('is-invalid');
                    });
                } else if ($(element).attr("type") == "hidden") {
                    $(element).prev().addClass('is-invalid');
                    $(element).addClass('is-invalid');
                } else {
                    $(element).addClass('is-invalid');
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if ($(element).attr("type") == "radio") {
                    jQuery('input[name="' + $(element).attr("name") + '"]').each(function() {
                        $(this).removeClass('is-invalid');
                    });
                } else if ($(element).attr("type") == "hidden") {
                    $(element).prev().removeClass('is-invalid');
                    $(element).removeClass('is-invalid');

                } else {
                    $(element).removeClass('is-invalid');
                }
            },
            errorPlacement: function(error, element) {
                if (element.attr("type") == "radio") {
                    // error.addClass('ms-10');
                    error.insertAfter($(element).parent().parent().parent().parent().parent().append());
                } else if (element.attr("type") == "hidden") {
                    error.insertAfter($(element).parent().parent().append());
                } else if (element.attr("type") == "file") {
                    error.insertAfter($(element).parent().parent().append());
                } else {
                    error.insertAfter($(element));
                }
            },
            submitHandler: function(form, e) {
                e.preventDefault();
                var textboxes = jQuery(form).find('input.frm-textbox');
                var emptytextboxes = textboxes.filter(function() {
                    return this.value == "";
                });
                if (jQuery(form).find('input.frm-checkbox:checked').length < 1 && textboxes.length == emptytextboxes.length) {
                    e.preventDefault();
                    jQuery(form).find('span#all-error').remove();
                    jQuery(form).find('.question-list-wrapper').after('<span id="all-error" class="invalid-feedback ms-10" style="display: block;">Any one option should be selected.</span>')
                    return false;
                } else {
                    jQuery(form).find('span#all-error').remove();
                    var formData = new FormData(form);
                    formData.append('_token', config.data.csrf);
                    formData.append('submit_type', 'ajax');
                    var action = base_url + '/inspection-report/update-answers';
                    jQuery.ajax({
                        url: action,
                        method: 'POST',
                        data: formData,
                        dataType: 'json',
                        cache: false,
                        headers: {
                            'X-CSRF-TOKEN': config.data.csrf
                        },
                        processData: false,
                        contentType: false,
                        beforeSend: function(data) {},
                        success: function(data) {
                            if (data.status == 1) {

                                jQuery(document).find('.final_wholesale_price').text(data.final_price.final_wholesale_price);
                                jQuery(document).find('.final_retail_price').text(data.final_price.final_retail_price);
                                jQuery(document).find('.car_whole_val').text(data.final_price.car_whole_val);
                                jQuery(document).find('.car_retail_val').text(data.final_price.car_retail_val);
                                Swal.fire({
                                    text: data.message,
                                    icon: "success",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn fw-bold btn-primary"
                                    }
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
                        },
                        complete: function(data) {},
                        error: function(data, textStatus, xhr) {
                            if (textStatus == 'error') {
                                Swal.fire({
                                    text: data.responseJSON.message,
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
            }
        });
    });

    jQuery(document).on('change', 'input.radio-btn-check', function() {
   
        var new_wholesale_val_total_str = 0; 
        var new_retail_val_total_str = 0;

        var vehicle_wholesale_value = parseFloat(jQuery(document).find('input[name="vehicle_wholesale_value"]').val());
        var vehicle_retail_value = parseFloat(jQuery(document).find('input[name="vehicle_retail_value"]').val());
        
        var wholesale_value_per = parseFloat(jQuery(this).data('wholesale_value'));
        var retail_value_per = parseFloat(jQuery(this).data('retail_value'));
        console.log(wholesale_value_per);
        console.log(retail_value_per);
        var wholesale_value_per_pos = Math.abs(wholesale_value_per);
        var retail_value_per_pos = Math.abs(retail_value_per);
        var wholesale_val = (vehicle_wholesale_value * wholesale_value_per_pos) / 100;
        var retail_val = (vehicle_retail_value * retail_value_per_pos) / 100;
              
       var wholesale_val_total_str = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.wholesale_val_total_str b');
       var wholesale_val_total_original = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.wholesale_val_total_original');
        if (wholesale_value_per < 0) {
            //negative value
            var wholesale_val_str = CURRENCY_SYMBOL + '' + wholesale_val + '';
            jQuery(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find('.inspection_val_disp .wholesale_val b').removeClass('red-val').addClass('green-val');
      
        } else {
            //positive value
            var wholesale_val_str = CURRENCY_SYMBOL + '(' + wholesale_val + ')';
            jQuery(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find('.inspection_val_disp .wholesale_val b').addClass('red-val').removeClass('green-val');
        }

        var retail_val_total_str = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.retail_val_total_str b');
        var retail_val_total_original = jQuery(this).parentsUntil('.collapse').parent().parent().find(".flex-stack").find('.retail_val_total_original');
     
        if (retail_value_per < 0) {
            //negative value
            var retail_val_str = CURRENCY_SYMBOL + '' + retail_val + '';
            jQuery(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find('.inspection_val_disp .retail_val b').removeClass('red-val').addClass('green-val');
        
        } else {
            var retail_val_str = CURRENCY_SYMBOL + '(' + retail_val + ')';
            jQuery(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find('.inspection_val_disp .retail_val b').addClass('red-val').removeClass('green-val');
        }

        var sum_wholesale = 0;
        var sum_retail = 0;

        var form = jQuery(this).parentsUntil('.edit-question-form').parent();
        console.log("form",form);

        form.find(".per_opt_radio:checked").each(function() {
                var wholesale_value_per = $(this).data('wholesale_value');
                var wholesale_value_per_pos = wholesale_value_per;                
                var wholesale_val = (vehicle_wholesale_value * wholesale_value_per_pos) / 100;
                sum_wholesale +=wholesale_val;

                var retail_value_per = $(this).data('retail_value');
                var retail_value_per_pos = retail_value_per;                
                var retail_val = (vehicle_retail_value * retail_value_per_pos) / 100;
                sum_retail +=retail_val;
        });

        if (sum_wholesale < 0) {
            new_wholesale_val_total_str = CURRENCY_SYMBOL + '' + Math.abs(sum_wholesale) + '';
            wholesale_val_total_str.removeClass('red-val').addClass('green-val');
        }else{
            new_wholesale_val_total_str = CURRENCY_SYMBOL + '(' + Math.abs(sum_wholesale) + ')';
            wholesale_val_total_str.addClass('red-val').removeClass('green-val');
        }   

        wholesale_val_total_str.text(new_wholesale_val_total_str);
        wholesale_val_total_original.val(sum_wholesale);
        if (sum_retail < 0) {
            new_retail_val_total_str = CURRENCY_SYMBOL + '' + Math.abs(sum_retail) + '';
            retail_val_total_str.removeClass('red-val').addClass('green-val');
        }else{
            new_retail_val_total_str = CURRENCY_SYMBOL + '(' + Math.abs(sum_retail) + ')';
            retail_val_total_str.addClass('red-val').removeClass('green-val');
        }       
        retail_val_total_str.text(new_retail_val_total_str);
        retail_val_total_original.val(sum_retail);
        
        jQuery(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find('.inspection_val_disp .wholesale_val b').text(wholesale_val_str);
        jQuery(this).parentsUntil('.radio-checkbox-main-wrapper').parent().find('.inspection_val_disp .retail_val b').text(retail_val_str);

        topAdjustmentValueChange();

    });


    function topAdjustmentValueChange(){
            
        var sum_wholesale_all = 0;
        var sum_retail_all = 0;

        var cal_wholesale_original = jQuery(".cal_wholesale_original").val();
        var cal_retail_original = jQuery(".cal_retail_original").val();

        jQuery('form.edit-question-form').each(function(key,form) {
            var wholesale_val_total_original = jQuery(this).find(".flex-stack").find('.wholesale_val_total_original').val();
            console.log("wholesale_val_total_original",parseInt(wholesale_val_total_original));
            sum_wholesale_all = parseInt(sum_wholesale_all) + parseInt(wholesale_val_total_original);

            var retail_val_total_original = jQuery(this).find(".flex-stack").find('.retail_val_total_original').val();
            console.log("retail_val_total_original",parseInt(retail_val_total_original));
            sum_retail_all = parseInt(sum_retail_all) + parseInt(retail_val_total_original);

        });

        console.log("sum_wholesale_all",sum_wholesale_all);
       

        //wholesale calculation
        var final_car_wholesale_price = sum_wholesale_all - parseInt(cal_wholesale_original);
        var car_whole_val_dom = jQuery(".car_whole_val");
        var final_car_wholesale_price_str = car_whole_val_dom.text();

        var final_wholesale_price_dom = jQuery(".final_wholesale_price");
        var final_wholesale_price_dom_str = final_wholesale_price_dom.text();
        if (sum_wholesale_all < 0) {
            final_wholesale_price_dom_str = CURRENCY_SYMBOL + '' + number_format(Math.abs(sum_wholesale_all),2,'.',',') + '';
            final_wholesale_price_dom.removeClass('red-val').addClass('green-val');
        }else{
            final_wholesale_price_dom_str = CURRENCY_SYMBOL + '(' + number_format(Math.abs(sum_wholesale_all),2,'.',',') + ')';
            final_wholesale_price_dom.addClass('red-val').removeClass('green-val');
        } 
        final_wholesale_price_dom.text(final_wholesale_price_dom_str);

        if(final_car_wholesale_price < 0){
            final_car_wholesale_price_str = CURRENCY_SYMBOL + '' + number_format(Math.abs(final_car_wholesale_price),2,'.',',') + '';
        }else{
            final_car_wholesale_price_str =  CURRENCY_SYMBOL + '(' + number_format(Math.abs(final_car_wholesale_price),2,'.',',') + ')';
        }
        car_whole_val_dom.text(final_car_wholesale_price_str);

       //wholesale calculation end



        //retail calculation
        var final_car_retail_price = sum_retail_all - parseInt(cal_retail_original);
      
        var car_retail_val_dom = jQuery(".car_retail_val");
        var final_car_retail_price_str = car_retail_val_dom.text();

        var final_retail_price_dom = jQuery(".final_retail_price");
        var final_retail_price_dom_str = final_retail_price_dom.text();
        if (sum_retail_all < 0) {
            final_retail_price_dom_str = CURRENCY_SYMBOL + '' + number_format(Math.abs(sum_retail_all),2,'.',',') + '';
            final_retail_price_dom.removeClass('red-val').addClass('green-val');
        }else{
            final_retail_price_dom_str = CURRENCY_SYMBOL + '(' + number_format(Math.abs(sum_retail_all),2,'.',',') + ')';
            final_retail_price_dom.addClass('red-val').removeClass('green-val');
        } 
        final_retail_price_dom.text(final_retail_price_dom_str);

        if(final_car_retail_price < 0){
            final_car_retail_price_str = CURRENCY_SYMBOL + '' + number_format(Math.abs(final_car_retail_price),2,'.',',') + '';
        }else{
            final_car_retail_price_str =  CURRENCY_SYMBOL + '(' + number_format(Math.abs(final_car_retail_price),2,'.',',') + ')';
        }
        car_retail_val_dom.text(final_car_retail_price_str);

        //retail calculation end
    }


        function number_format(number,decimals,dec_point,thousands_sep) {
            number  = number*1;//makes sure `number` is numeric value
            var str = number.toFixed(decimals?decimals:0).toString().split('.');
            var parts = [];
            for ( var i=str[0].length; i>0; i-=3 ) {
                parts.unshift(str[0].substring(Math.max(0,i-3),i));
            }
            str[0] = parts.join(thousands_sep?thousands_sep:',');
            return str.join(dec_point?dec_point:'.');
        }

});