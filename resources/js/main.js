// ! PRELOADER
$(window).on("load", function() {
    $(".block")
        .delay(450)
        .fadeOut(1000);
    $(".preloader")
        .delay(500)
        .fadeOut(500);
});

// ! SCROLL TO ACTIVE NAVBAR

$(window).scroll(function() {
    var winScroll = $(this).scrollTop();
    if (winScroll >= 110) {
        $(".main-menu").addClass("header-active");
    } else {
        $(".main-menu").removeClass("header-active");
    }
});

$(document).ready(function() {
    //Testimonial Slider

    $(".testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        // nav: true,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            1280: {
                items: 1
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });
});
