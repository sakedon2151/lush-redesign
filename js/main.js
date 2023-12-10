$(function(){

    // 1 메인비주얼 슬라이드
    const msswiper = new Swiper('.msSwiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        loopAdditionalSlides : 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // 2 키워드 슬라이드
    const tsswiper = new Swiper('.tsSwiper', {
        slidesPerView: "6",
        spaceBetween: 80,
        loop: true,
        loopAdditionalSlides : 1,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });

    // 3 베스트셀러 슬라이드
    const bsswiper = new Swiper('.bsSwiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        loopAdditionalSlides : 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // 4 신제품 슬라이드
    const nsswiper = new Swiper('.nsSwiper', {
        direction: 'horizontal',
        loop: true,
        loopAdditionalSlides : 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // 6 태그 슬라이드 1
    const tscswiper1 = new Swiper('.tscCol1', {
        slidesPerView: "2",
        loop: true,
        loopAdditionalSlides : 1,
        freeMode : true,
        slidesOffsetBefore : 100,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });
    // 6 태그 슬라이드 2
    const tscswiper2 = new Swiper('.tscCol2', {
        slidesPerView: "2",
        loop: true,
        loopAdditionalSlides : 1,
        freeMode : true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    });
    // 6 태그 슬라이드 3
    const tscswiper3 = new Swiper('.tscCol3', {
        slidesPerView: "2",
        loop: true,
        loopAdditionalSlides : 1,
        freeMode : true,
        slidesOffsetBefore : 300,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // 7 이벤트 슬라이드
    const esswiper = new Swiper('.esSwiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
        loopAdditionalSlides : 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // 9 리뷰 슬라이드
    const rsswiper = new Swiper(".rsSwiper", {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        loopAdditionalSlides : 1,
        spaceBetween: 50,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

}); //doc