$(document).ready(function () {

    
    const swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,

        },
        speed: 3000,
        effect: 'cube',
        grabCursor: false,
        cubeEffect: {
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});


//Hamburger menu

function openMenu() {
    document.getElementById('navbar').style.height = "100%";
}

function closeMenu() {
    document.getElementById('navbar').style.height = "0%";
}

//Smooth scroll

$(function(){
    $('.menu a, .scroll-down a').on('click', function(){
       $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset() .top
       }, 1000);
        return false
    });
        
});