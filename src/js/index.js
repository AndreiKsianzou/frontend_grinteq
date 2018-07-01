import 'owl.carousel';
$(document).ready(function(){
    $('.clients__list').owlCarousel({
        margin:15,
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
                items:5,
                nav:false
            },
            1100:{
                items:7,
                nav:true,
                loop:false
            }
        }
    });
    $('.slider__cases').owlCarousel({
        margin: 15,
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