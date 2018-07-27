import 'owl.carousel';
$(document).ready(function(){
    $('.clients__list').owlCarousel({
        responsiveClass:true,
        navContainer: '.carousel__navigations',
        navText: [],
        autoWidth: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            450:{
                items:3,
                nav:false
            },
            768:{
                items:4,
                nav:false
            },
            1100:{
                items:5,
                nav:true,
            }
        }
    });
    $('.slider__cases').owlCarousel({

        responsiveClass:true,
        dots: true,
        navContainer: '.slider__control',
        navText: ["<",">"],
        items: 1,
        responsive:{
            0:{
                nav:false
            },
            450:{
                nav:false
            },
            768:{
                nav:false
            },
            1100:{
                nav:true,
                loop:false
            }
        }
    });
});
const burgerBtn = document.querySelector('.header__burger');
const menuList = document.querySelector('.header__menu');
burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('header__burger_active');
    menuList.classList.toggle('header__menu_open');
});

const headerBox = document.querySelector('.header__box');
let scrollFix = true;
document.addEventListener('scroll', ()=>{
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100 && scrollFix) {
        headerBox.classList.add('header__box_scroll');
        scrollFix = false;
    } else if (scrollTop <= 100 && !scrollFix) {
        headerBox.classList.remove('header__box_scroll');
        scrollFix = true;
    }
});