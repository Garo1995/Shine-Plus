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








$(document).ready(function () {
    setTimeout(function () {
        $(".scratches-main").addClass("start-anime");
        $("header").addClass("header-anime");
    }, 800);
});

const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);






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









(function () {
    const modal = document.getElementById("saleModal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".sale-modal__close");
    if (!closeBtn) return;

    setTimeout(() => {
        modal.classList.add("is-open");
        document.documentElement.classList.add("is-modal-open");
    }, 30000);

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("is-open");
        document.documentElement.classList.remove("is-modal-open");
    });
})();






$('.yak-scroll').click(function() {
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





