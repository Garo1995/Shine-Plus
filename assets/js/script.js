$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});


$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".mask-phone").mask("+7 (h99) 999-99-99");



let worksSwiper = new Swiper(".our-works-slider", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: ".works-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".works-button-next",
        prevEl: ".works-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        '1020': {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});




let talkSwiper = new Swiper(".talk-about-slider", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: ".talk-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".talk-button-next",
        prevEl: ".talk-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});





$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});





