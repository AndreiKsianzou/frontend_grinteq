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
                items:6,
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
let btn_popup = document.querySelectorAll('.button__popup');
btn_popup = Array.prototype.slice.call(btn_popup);
let box_popup = document.querySelector('.popup__wrapper');
let body_popup = document.querySelector('body');
let box_contact = document.querySelector('.popup__box_contact');
let box_thanks = document.querySelector('.popup__box_thanks');



btn_popup.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (el) {
            box_popup.classList.add('popup__wrapper_active');
            body_popup.classList.add('fixed');
            box_contact.classList.add('popup__box_active');
        }
    });
});


$(document).mouseup(function (e){ 
	var div = $(".popup__box"); 
	if (!div.is(e.target) 
	    && div.has(e.target).length === 0) { 
            box_popup.classList.remove('popup__wrapper_active');
            body_popup.classList.remove('fixed');
            box_contact.classList.remove('popup__box_active');
            box_thanks.classList.remove('popup__box_active');
	}
});

let close_popup = document.querySelectorAll('.popup__close');
close_popup = Array.prototype.slice.call(close_popup);
close_popup.forEach((item) => {
    item.addEventListener('click', (e) => {
        box_popup.classList.remove('popup__wrapper_active');
        body_popup.classList.remove('fixed');
        box_contact.classList.remove('popup__box_active');
        box_thanks.classList.remove('popup__box_active');
    });
});

function openThanks() {
    box_contact.classList.remove('popup__box_active');
    box_popup.classList.add('popup__wrapper_active');
    body_popup.classList.add('fixed');
    box_thanks.classList.add('popup__box_active');
    let timeout = setTimeout(() => {
        box_popup.classList.remove('popup__wrapper_active');
        body_popup.classList.remove('fixed');
        box_thanks.classList.remove('popup__box_active');
    }, 2000);
}


    


