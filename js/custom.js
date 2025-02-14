$(function () {

    var swiper = new Swiper(".main_visual_slide", {
        loop: true,
        speed: 1000,
        effect: "fade",

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",

        },

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
    var swiper = new Swiper(".custom_best_slide", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            541: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
})
// 반응형
$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();
        }
    });
    $(window).on('resize', function () {
        let w = $(window).width();
        if (w > 768) {
            $('.header .gnb').removeClass('on')
            $('.header .gnb>ul>li ul').removeAttr('style')
        }
    })
})