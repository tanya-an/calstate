jQuery(document).ready(function () {

    // jQuery('#form, #form2, #form3, #form4').validate({
        // function validateForm() {
        //     alert("not good")
        // rules:{
        //     phone:{
        //         required: true,
        //         digits: true
        //     },
        //     email:{
        //         required: true,
        //         email: true
        //     },
        //     size_of_move:{
        //         required: true                
        //     },
        //     code_from:{
        //         required: true,
        //         digits: true,
        //         minlength: 5,
        //         maxlength: 5
        //     },
        //     code_to:{
        //         required: true,
        //         digits: true,
        //         minlength: 5,
        //         maxlength: 5
        //     },
        //     promo:{
        //         required: true,
        //         digits: true 
        //     }
        // }
    // };
    // });
    jQuery('#form_banner').submit(function (evt) {
        evt.preventDefault();
        window.history.back();
            
        document.location.href = "./estimate.html";
        
    });

    jQuery('#form, #form2, #form3, #form4').submit(function (evt) {
        evt.preventDefault();
        window.history.back();
            
            jQuery.ajax({
                type: "POST",
                url: "contact-form.php",
                data: jQuery(this).serialize()
            }).done(function() {
               
                
                document.location.href = "./thanks.html";
                jQuery("#form, #form2, #form3, #form4").trigger("reset");
                });
            return false;
    });
    jQuery('#form_mob').submit(function (evt) {
        evt.preventDefault();
        window.history.back();
            
            jQuery.ajax({
                type: "POST",
                url: "contact-form.php",
                data: jQuery(this).serialize()
            }).done(function() {
               
                alert("Thank you for your application! Soon we will contact you.");
                jQuery("#form_mob").trigger("reset");
                });
            return false;
    });
});


           