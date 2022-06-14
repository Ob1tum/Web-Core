let modalFeedbackOpenButton = document.querySelector('.burger-footer__item--chat');
let modalFeedbackCloseButton = document.querySelector('.modal-feedback__close-button');
let modalFeedback = document.querySelector('.modal-feedback');

let modalCallOpenButton = document.querySelector('.burger-footer__item--call');
let modalCallCloseButton = document.querySelector('.modal-call__close-button');
let modalCall = document.querySelector('.modal-call');

let modalBurgerOpenButton = document.querySelector('.header__item--burger');
let modalBurgerCloseButton = document.querySelector('.burger-header__item--burger');
let modalBurger = document.querySelector('.modal-burger__wrapper');

let desktopCallOpenButton = document.querySelector('.desktop-burger--call');
let desktopFeedbackOpenButton = document.querySelector('.desktop-burger--chat');

desktopCallOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalCall.classList.remove('call--hidden');
    modalCall.classList.add('call--showed');
   
});

desktopFeedbackOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalFeedback.classList.remove('feedback--hidden');
    modalFeedback.classList.add('feedback--showed');
   
});

modalBurgerOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalBurger.classList.remove('burger--hidden');
    modalBurger.classList.add('burger--showed');
   
});

modalBurgerCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalBurger.classList.remove('burger--showed');
    modalBurger.classList.add('burger--hidden');
   
});


modalFeedbackOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalFeedback.classList.remove('feedback--hidden');
    modalFeedback.classList.add('feedback--showed');
   
});

modalFeedbackCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalFeedback.classList.remove('feedback--showed');
    modalFeedback.classList.add('feedback--hidden');
    
});

modalCallOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalCall.classList.remove('call--hidden');
    modalCall.classList.add('call--showed');
   
});

modalCallCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalCall.classList.remove('call--showed');
    modalCall.classList.add('call--hidden');
    
});