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

AOS.init({
    once: true,
    offset: 120,
    duration: 800,
    easing: 'ease-out-cubic'
});






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







(function () {
    const modal = document.getElementById("saleModal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".sale-modal__close");
    if (!closeBtn) return;
    const closeModal = modal.querySelector(".close-modal");
    if (!closeModal) return;

    setTimeout(() => {
        modal.classList.add("is-open");
        document.documentElement.classList.add("is-modal-open");
    }, 30000);

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("is-open");
        document.documentElement.classList.remove("is-modal-open");
    });
    closeModal.addEventListener("click", () => {
        modal.classList.remove("is-open");
        document.documentElement.classList.remove("is-modal-open");
    });
})();




















$(document).ready(function () {

    addActiveClass('catalog-menu', 'catalog-active');
    changeCaseBlock(this, 'catalog-menu', 'catalog-content', 'catalog-active', 'catalog-click');
    $('.catalog-click').on('click', function () {
        changeActiveClassWithClick(this, 'catalog-menu', 'catalog-active')
        changeCaseBlock(this, 'catalog-menu', 'catalog-content', 'catalog-active', 'catalog-click');
    })




    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })
        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        }
    }
});