import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// ФИНАЛЬНЫЙ ВАРИАНТ -- РАБОТАЕТ

const swiperHero = new Swiper('.hero__slider', {
  loop: true,
  modules: [ Pagination ],
  pagination: {
    el: '.page-header__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}" data-pagination-index="${index}"></span>`;
    },
  },
  on: {
    // Инициализируем слайдер
    // При этом выполняем действия внутри function
    init: function () {
      this.slides.forEach((slide) => {
        // Перебираем все слайды
        // Для каждого слайда создаем элемент, в который поместим клонированные буллеты
        const paginationClone = document.createElement('div');
        paginationClone.classList.add('hero__pagination');

        // Ищем исходные буллеты
        // Перебираем, клонируем их и помещаем в созданный элемент
        // Добавляем обработчик клика
        const bullets = document.querySelectorAll('.page-header__pagination span');
        bullets.forEach((bullet, bulletIndex) => {
          const clonedBullet = bullet.cloneNode(true);
          clonedBullet.addEventListener('click', () => {
            // Используем стандартный Swiper-метод slideToLoop для переключения слайда
            this.slideToLoop(bulletIndex);
          });
          paginationClone.appendChild(clonedBullet);
        });

        // Помещаем буллеты в каждый слайд с элементом "hero__pagination"
        slide.querySelector('.hero__slide').appendChild(paginationClone);
      });
    },
    // Вызываем обработчик каждый раз при смене слайда
    // При этом выполняем действия внутри function
    slideChange: function () {
      const activeIndex = this.realIndex;

      document.querySelectorAll('.hero__pagination').forEach((pagination) => {
        pagination.querySelectorAll('span').forEach((bullet, bulletIndex) => {
          bullet.classList.toggle('swiper-pagination-bullet-active', bulletIndex === activeIndex);
        });
      });
    },
  },
});

swiperHero.init();
