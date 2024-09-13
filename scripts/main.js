const new_s = new Swiper(".new_s", {
    slidesPerView: 1, //한 화면 기준 보이는 슬라이드 개수
    spaceBetween: 20, //슬라이드 사이 간격
    autoplay : {delay:5000},
    loop : true,
    navigation:{
        prevEl : '.new .container .swiper-button-prev',
        nextEl : '.new .container .swiper-button-next',
    },
    pagination: {
        el: '.new .container .swiper-pagination',
    },
    breakpoints: {
        600: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 35
        },
    }
})
const insta_s = new Swiper(".insta_s", {
    slidesPerView: 3,
    spaceBetween: 15,
    autoplay : {delay:2000},
    loop : true,
    pagination: {
        el: '.instagram .container .swiper-pagination',
    },
    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 25
        },
    }
})
/* var insta_s1024 = window.matchMedia("screen and (max-width : 1024px");
insta_s1024.addEventListener(function(e){
    if(e.matches){
        const insta_s = new Swiper(".insta_s", {
            slidesPerView: 3, //한 화면 기준 보이는 슬라이드 개수
            spaceBetween: 25, //슬라이드 사이 간격
            autoplay : {delay:2000},
            loop : true,
            pagination: {
                el: '.instagram .container .swiper-pagination',
            },
        })
    } 
}) */