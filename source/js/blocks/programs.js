import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const swiperPrograms = new Swiper('.swiper', {
  modules: [ Navigation, Scrollbar ],
  navigation: {
    nextEl: '.programs__navigation .swiper-button-next',
    prevEl: '.programs__navigation .swiper-button-prev',
    disabledClass: 'section__slider-button--disabled'
  },
  scrollbar: {
    el: '.programs__scrollbar .swiper-scrollbar',
    // el: '.swiper-scrollbar',
    // dragClass: '.swiper-scrollbar-drag',
    // horizontalClass: '.swiper-scrollbar-horizontal'
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
