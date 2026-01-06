/**
 * Xu ly cac phan auto sliding cho banner, blog, ...
 */

// ============ AUTO SHOWING BANNER ============
const swiper = new Swiper(".swiper-banner", {
    // slidesPerView: 1,
    loop: true,
    speed: 1200,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    grabCursor: false,
    allowTouchMove: false,
});

swiper.on("slideChangeTransitionStart", () => {
    document
        .querySelectorAll(".swiper-slide .content > *")
        .forEach(el => {
            el.style.animation = "none";
            el.offsetHeight; // force reflow
            el.style.animation = "";
        });
});

// ============ AUTO SHOWING SLIDER BELOW BANNER ============
const slideCol3 = new Swiper(".slider-col-3", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    allowTouchMove: true,
    // grabCursor: true,

    pagination: {
        el: ".custom-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {},
        576: {},
        768: {},
        992: {},
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
    },
});

const paginationSlider = new Swiper('.slider-pagination', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    allowTouchMove: true,
    // grabCursor: true,

    pagination: {
        el: '.custom-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {

        },
        576: {

        },
        768: {

        },
        992: {

        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 4,
        },
    },
})

// ============ AUTO SHOWING PARALLAX TOP REVIEWS ============
const parallaxSwiper = new Swiper('.parallax-grid', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    allowTouchMove: true,
    // grabCursor: true,

    pagination: {
        el: '.parallax-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {

        },
        576: {

        },
        768: {

        },
        992: {

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
    },
})

// ============ AUTO SHOWING PERSON CARD ============
const personSwiper = new Swiper('.person-section', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    allowTouchMove: true,
    // grabCursor: true,

    breakpoints: {
        0: {

        },
        576: {

        },
        768: {

        },
        992: {

        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 4,
        },
    },
})


// ============ AUTO SHOWING ONE CARD ============
const oneCart = new Swiper('.one-card', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // speed: 600,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    allowTouchMove: true,
    // grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
})

// ============ AUTO SHOWING PACK UP AND GO ============
const temSection = new Swiper('.tem-section', {
    slidesPerView: 3,
    centeredSlides: true,   // phan tu dau tien (active) se hien thi o giua
    spaceBetween: 0,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    allowTouchMove: true,
    // grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
})