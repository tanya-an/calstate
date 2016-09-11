jQuery(document).ready(function () {

    jQuery('#form').validate({
        rules:{
            phone:{
                required: true,
                digits: true
            },
            email:{
                required: true,
                email: true
            },
            size_of_move:{
                required: true                
            },
            code_from:{
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            },
            code_to:{
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            },
            promo:{
                required: true,
                digits: true 
            }
        }
    });


    jQuery('#form').submit(function (evt) {
        evt.preventDefault();
        window.history.back();
            
            jQuery.ajax({
                type: "POST",
                url: "contact-form.php",
                data: jQuery(this).serialize()
            }).done(function() {
               
                alert("Thank you for your application! Soon we will contact you.");
                jQuery("#form").trigger("reset");
                });
            return false;
    });
});


           