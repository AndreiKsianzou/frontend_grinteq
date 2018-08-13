function openThanks() {
  var box_contact = document.querySelector('.popup__box_contact');
  var box_popup = document.querySelector('.popup__wrapper');
  var body_popup = document.querySelector('body');
  var box_thanks = document.querySelector('.popup__box_thanks');
  box_contact.classList.remove('popup__box_active');
  box_popup.classList.add('popup__wrapper_active');
  body_popup.classList.add('fixed');
  box_thanks.classList.add('popup__box_active');
  var timeout = setTimeout(() => {
      box_popup.classList.remove('popup__wrapper_active');
      body_popup.classList.remove('fixed');
      box_thanks.classList.remove('popup__box_active');
  }, 2000);
}