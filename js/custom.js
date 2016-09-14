jQuery(document).ready(function() {
  
  //WOW js code
    new WOW().init();

      //this code is for smooth scroll and nav selector
            $(document).ready(function () {
              $(document).on("scroll", onScroll);
              
              //smoothscroll
              $('a[href^="#"]').on('click', function (e) {
                  e.preventDefault();
                  $(document).off("scroll");
                  
                  $('a').each(function () {
                      $(this).removeClass('active');
                  })
                  $(this).addClass('active');
                
                  var target = this.hash,
                      menu = target;
                  $target = $(target);
                  $('html, body').stop().animate({
                      'scrollTop': $target.offset().top+2
                  }, 500, 'swing', function () {
                      window.location.hash = target;
                      $(document).on("scroll", onScroll);
                  });
              });
          });

          function onScroll(event){
              var scrollPos = $(document).scrollTop();
              $('.navbar-default .navbar-nav>li>a').each(function () {
                  var currLink = $(this);
                  var refElement = $(currLink.attr("href"));
                  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                      $('.navbar-default .navbar-nav>li>a').removeClass("active");
                      currLink.addClass("active");
                  }
                  else{
                      currLink.removeClass("active");
                  }
              });
          }
     
     
     //this code is for animation nav
     jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if(windowScrollPosTop >= 100) {
          jQuery(".top-header").css({"background": "#222222"});
          jQuery(".top-header img.logo").css({"position":"absolute",  "left":"509px", "width": "152px", "height": "71.44px", "margin-top":"-13px" ,"margin-bottom": "0"});
          jQuery(".nav-bar").css({"margin-top": "25px",});
        }
        else{
          jQuery(".top-header").css({"background": "transparent"});
           jQuery(".top-header img.logo").css({"position":"absolute", "left":"485px", "height": "94px", "width": "200px",  "margin-top": "-25px", "margin-bottom": "25px"});
           jQuery(".nav-bar").css({"margin-top": "71px"});
          
        }
     });


     jQuery(".tzBlog-slider").each(function () {
        jQuery(this).owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed: 500,
            paginationSpeed: 800,
            rewindSpeed: 1000,
            autoPlay: false,
            stopOnHover: false,
            singleItem: false,
            rewindNav: false,
            pagination: true,
            paginationNumbers: false,
            itemsScaleUp: false
        });
        var $_parent = jQuery(this);
        $_parent.parent().find('.tzprevslider').on('click',function () {
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tznextslider').on('click',function () {
            $_parent.trigger('owl.next');
        });
        $_parent.parent().find('.tzprevslider_type2').on('click',function () {
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tznextslider_type2').on('click',function () {
            $_parent.trigger('owl.next');
        });
    });
	

});