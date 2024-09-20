import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

const swiperPrograms = new Swiper('.swiper', {
  modules: [ Navigation ],
  navigation: {
    nextEl: '.programs__navigation .swiper-button-next',
    prevEl: '.programs__navigation .swiper-button-prev',
    disabledClass: 'section__slider-button--disabled'
  },
  scrollbar: {
    el: '.programs__scrollbar .swiper-scrollbar',
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 15
    // },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});

swiperPrograms.init();
