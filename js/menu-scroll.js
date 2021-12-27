$(document).scroll(function(e) {
    $(window).scrollTop() > 100 ? $('.header').addClass('header-scroll') : $('.header').removeClass('header-scroll');
});

$(document).scroll(function(e) {
    $(window).scrollTop() > 100 ? $('.header-logo-icon').addClass('header-logo-icon-scroll') : $('.header-logo-icon').removeClass('header-logo-icon-scroll');
});