'use-strict';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('header .burger-button');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-button_open');
  });

  $('#promo-slider').slick({
    prevArrow: '<svg class="slick-prev slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>',
    nextArrow: '<svg class="slick-next slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>',

    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
});