'use-strict';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('header .burger-button');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-button_open');
  });
});