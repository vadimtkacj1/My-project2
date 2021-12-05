const newsSwiper = new Swiper('.news-swiper', {
    loop: true,
    speed: 800,

    navigation: {
        nextEl: '.news-swiper-button-next',
        prevEl: '.news-swiper-button-prev',
    },

    pagination: {
        el: '.news-swiper-pagination',
        clickable: true,
    }
});

setInterval(() => {
    newsSwiper.slideNext();
}, 4000);

const newItemsSwiper = new Swiper('.newItems-swiper', {
    loop: true,

    navigation: {
        nextEl: '.newItems-swiper-button-next',
        prevEl: '.newItems-swiper-button-prev',
    },

    breakpoints: {
        1060: {
            slidesPerView: 4,
        },

        800: {
            slidesPerView: 3,
        },

        550: {
            slidesPerView: 2,
        }
    }
});

const recommendSwiper = new Swiper('.recommend-swiper', {
    loop: true,

    navigation: {
        nextEl: '.recommend-swiper-button-next',
        prevEl: '.recommend-swiper-button-prev',
    },

    breakpoints: {
        1060: {
            slidesPerView: 4,
        },

        800: {
            slidesPerView: 3,
        },

        550: {
            slidesPerView: 2,
        }
    }
});

const saleSwiper = new Swiper('.sale-swiper', {
    loop: true,

    navigation: {
        nextEl: '.sale-swiper-button-next',
        prevEl: '.sale-swiper-button-prev',
    },

    breakpoints: {
        1060: {
            slidesPerView: 4,
        },

        800: {
            slidesPerView: 3,
        },

        550: {
            slidesPerView: 2,
        }
    }
});

const stockSwiper = new Swiper('.stock-swiper', {
    loop: true,

    navigation: {
        nextEl: '.stock-swiper-button-next',
        prevEl: '.stock-swiper-button-prev',
    },

    breakpoints: {
        1060: {
            slidesPerView: 4,
        },

        800: {
            slidesPerView: 3,
        },

        550: {
            slidesPerView: 2,
        }
    }
});