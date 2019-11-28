// ! SCROLL TO ACTIVE NAVBAR

$(window).scroll(function () {
    var winScroll = $(this).scrollTop();
    if (winScroll >= 110) {
        $('.main-menu').addClass('header-active');
    }else{
        $('.main-menu').removeClass('header-active');
    }
});