'use-strict';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('header .burger-button'),
        studyCardsWrap = document.querySelector('#study-cards-slider'),
        studyCardAmounts = document.querySelectorAll('.study__card-amount'),
        studyCards = studyCardsWrap.querySelectorAll('.study__card');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-button_open');
  });

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

  const activateStudyCardsSlider = () => {
    $('#study-cards-slider').slick({
      prevArrow: '<svg class="study-cards__controls-prev slick-prev slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>',
      nextArrow: '<svg class="study-cards__controls-next slick-next slick-arrow"><use xlink:href="./assets/images/svg/symbol/sprite.svg#arrow"></use></svg>',
      slidesToShow: 1,
    });
  };

  const correctElemPosition = () => {
    studyCardAmounts.forEach(item => {
      if (!item.textContent.includes('п', 3)) {
        item.style.right = '-6%';
      }
    });
  };
  correctElemPosition();

  const reassemblyStudyCardsSlides = () => {
    let slideWrap = document.createElement('div'),
        counter = 0;

    slideWrap.classList.add('study-cards__slide');

    function removeSlides() {
      studyCardsWrap.childNodes.forEach(item => {
        if (item.classList && item.classList.contains('study-cards__slide')) {
          item.remove();
        }
      });
      assemblySlides();
    }

    function assemblySlides() {
      let clonedSlideWrap = slideWrap.cloneNode(true);

      studyCards.forEach((item, i) => {
        clonedSlideWrap.insertAdjacentElement('beforeend', item);
        counter++;

        if (window.innerWidth > 768) {
          if (counter === 6 || (counter < 7 && studyCards.length - 1 === i)) {
            studyCardsWrap.insertAdjacentElement('beforeend', clonedSlideWrap);
            clonedSlideWrap = slideWrap.cloneNode(true);
            counter = 0;
          }
        } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
          if (counter === 4 || (counter < 5 && studyCards.length - 1 === i)) {
            studyCardsWrap.insertAdjacentElement('beforeend', clonedSlideWrap);
            clonedSlideWrap = slideWrap.cloneNode(true);
            counter = 0;
          }
        } else if (window.innerWidth <= 576) {
          if (counter === 2 || (counter < 3 && studyCards.length - 1 === i)) {
            studyCardsWrap.insertAdjacentElement('beforeend', clonedSlideWrap);
            clonedSlideWrap = slideWrap.cloneNode(true);
            counter = 0;
          }
        }
      });

      activateStudyCardsSlider();
    }

    removeSlides();
  };
  reassemblyStudyCardsSlides();
});