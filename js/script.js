(function ($) {

    "use strict";

    // =================Faq-section===================================================

    const items = document.querySelectorAll('.accordion button');
    
    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach((item) => item.addEventListener('click', toggleAccordion));

// =======================review-section=============================================
    $(".review .owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navigation: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
        },
    });

    // ====================benefits-section========================================
    $(".benefits .owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navigation: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
        },
    });



    // ================word-press-section==============================
    $(".word-press .owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navigation: true,

        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 5,
                nav: true,
                loop: true,
            },
        },
    });


    // ======================================================

    /*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
    $(document).ready(function () {
        //window and animation items
        var animation_elements = $.find(".animation-element");
        var web_window = $(window);

        //check to see if any animation containers are currently in view
        function check_if_in_view() {
            //get current window information
            var window_height = web_window.height();
            var window_top_position = web_window.scrollTop();
            var window_bottom_position = window_top_position + window_height;

            //iterate through elements to see if its in view
            $.each(animation_elements, function () {
                //get the element sinformation
                var element = $(this);
                var element_height = $(element).outerHeight();
                var element_top_position = $(element).offset().top;
                var element_bottom_position = element_top_position + element_height;

                //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
                if (
                    element_bottom_position >= window_top_position &&
                    element_top_position <= window_bottom_position
                ) {
                    element.addClass("in-view");
                } else {
                    element.removeClass("in-view");
                }
            });
        }

        //on or scroll, detect elements in view
        $(window).on("scroll resize", function () {
            check_if_in_view();
        });
        //trigger our scroll event on initial load
        $(window).trigger("scroll");
    });

    // ===================box-Flip======================

    $(document).ready(function () {
        // set up hover panels
        // although this can be done without JavaScript, we've attached these events
        // because it causes the hover to be triggered when the element is tapped on a touch device
        $('.hover').hover(function () {
            $(this).addClass('flip');
        }, function () {
            $(this).removeClass('flip');
        });
    });
    // =============================REVIEW=======================================
    $('.myslider').slick({

        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true

    });
    // =====================vertical courasel=====================
    $(".carousel").carousel({
        interval: 3000
    });

    //scroll slides on swipe for touch enabled devices
    $(".carousel").on("touchstart", function (event) {
        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function (event) {
            var yMove = event.originalEvent.touches[0].pageY;
            if (Math.floor(yClick - yMove) > 1) {
                $(".carousel").carousel("next");
            } else if (Math.floor(yClick - yMove) < -1) {
                $(".carousel").carousel("prev");
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });


  
   

})(jQuery);
