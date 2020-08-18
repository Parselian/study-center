'use-strict';

window.addEventListener('DOMContentLoaded', () => {

  const activatePromoSlider = () => {
    $('#promo-slider').slick({
      prevArrow: '<svg class="slider__arrow-prev slick-prev slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>',
      nextArrow: '<svg class="slider__arrow-next slick-next slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>',

      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }]
    });
  };
  activatePromoSlider();
});