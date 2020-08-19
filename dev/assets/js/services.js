'use-strict';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('header .burger-button'),
        accordeonSlider = document.getElementById('accordeon-slider'),
        accordeonCards = accordeonSlider.querySelectorAll('.accordeon__card');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-button_open');
  });

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

  const activateAccordeonSlider = () => {
    $('#accordeon-slider').slick({
      prevArrow: '<svg class="accordeon-slider__prev slick-prev slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>',
      nextArrow: '<svg class="accordeon-slider__next slick-next slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>'
    });
  };


  const adaptSlides = (sliderWrap, selector, sliderCards, xlAmount, lgAmount, mdAmount, smAmount, xsAmount, startSlider) => {
    let slideWrap = document.createElement('div'),
      counter = 0;

    slideWrap.classList.add(selector);

    function removeSlides() {
      sliderWrap.childNodes.forEach(item => {
        if (item.classList && item.classList.contains(selector)) {
          item.remove();
        }
      });
      assemblySlides();
    }

    function assemblySlides() {
      let clonedSlideWrap = slideWrap.cloneNode(true);

      const resetClonedSlide = (amount, i) => {
        if (counter === amount || (counter <= amount && sliderCards.length - 1 === i)) {
          sliderWrap.insertAdjacentElement('beforeend', clonedSlideWrap);
          clonedSlideWrap = slideWrap.cloneNode(true);
          counter = 0;
        }
      }

      sliderCards.forEach((item, i) => {
        if (!item.matches('.hidden')) {
          clonedSlideWrap.insertAdjacentElement('beforeend', item);
        }
        counter++;

        if (window.innerWidth > 992) {
          resetClonedSlide(xlAmount, i);
        } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
          resetClonedSlide(lgAmount, i);
        } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
          resetClonedSlide(mdAmount, i);
        } else if (window.innerWidth <= 576 && window.innerWidth > 460) {
          resetClonedSlide(smAmount, i);
        } else if (window.innerWidth <= 460) {
          resetClonedSlide(xsAmount, i);
        }
      });

      startSlider();
    }

    removeSlides();
  };
  adaptSlides(accordeonSlider, 'accordeon-slider__slide', accordeonCards, 10, 6, 6, 6, 3, activateAccordeonSlider);
});