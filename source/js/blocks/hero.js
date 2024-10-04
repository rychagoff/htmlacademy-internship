import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiperHero = new Swiper('.hero__slider', {
  init: false,
  modules: [ Pagination ],
  pagination: {
    // el: '.hero__pagination',
    // el: '.hero__slide-bullets',
    // bulletActiveClass: '.hero__slide-bullet--active',
    clickable: true,
    // type: 'custom'
  },
  loop: true,
});

swiperHero.on('init', () => {
  console.log('Активирован слайдер');
  console.log(`Количество слайдов - ${swiperHero.slides.length}`);

  const slides = swiperHero.el.querySelectorAll('.hero__slide');
  const bulletsFragment = document.createDocumentFragment();

  slides.forEach((slide) => {
    const bullets = document.createElement('div');
    bullets.className = 'hero__slide-bullets';

    for(let i = 0; i < swiperHero.slides.length; i++) {
      const bullet = document.createElement('span');
      bullet.className = 'hero__slide-bullet';
      bullet.setAttribute('data-index', i);
      bullets.append(bullet);
    }

    bulletsFragment.appendChild(bullets);
    slide.append(bulletsFragment);
  });

  const slideBullets = document.querySelector('.hero__pagination');
  // const slideCustomBullets = slideBullets.cloneNode(true);
  // console.log(slideBullets.classList.value);

  // swiperHero.pagination['el'] = `.${slideBullets.classList.value}`;
  // swiperHero.pagination['el'] = slideBullets;
  swiperHero.pagination.init(slideBullets);
  swiperHero.pagination.render(slideBullets);
  swiperHero.pagination.update(slideBullets);

  console.log(swiperHero.pagination);

  // swiperHero.pagination.bullets = document.querySelector('.hero__slide-bullets');
});

  console.log(swiperHero.pagination);


//   console.log(slides);
//   // swiperHero.pagination.el = '.hero__slide-bullets';
//   // swiperHero.pagination.el = '.hero__pagination';
//   // console.log(swiperHero.pagination);

// init Swiper
swiperHero.init();

swiperHero.on('slideChange', () => {
  console.log('slide changed');
});

