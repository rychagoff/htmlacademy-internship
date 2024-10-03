const buttonHeader = document.querySelector('.page-header__button');
const nav = document.querySelector('.page-header__navigation');
const menuDropdown = document.querySelectorAll('.navigation__list--submenu');

buttonHeader.addEventListener('click', (evt) => {
  evt.preventDefault();
  const button = evt.currentTarget;
  toggleMenu(button, nav);
});

menuDropdown.forEach((dropdown) => {
  const button = dropdown.parentElement.querySelector('.navigation__button');
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleDropdown(button, dropdown);
  });
});

function toggleMenu(button, navigation) {
  if (button.getAttribute('aria-expanded') === 'true' && button.getAttribute('aria-controls') === navigation.getAttribute('id')) {
    button.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('page-header__navigation--opened');
  } else {
    button.setAttribute('aria-expanded', 'true');
    navigation.classList.add('page-header__navigation--opened');
  }
}

function toggleDropdown(button, dropdown) {
  if (button.getAttribute('aria-expanded') === 'true' && button.getAttribute('aria-controls') === dropdown.getAttribute('id')) {
    button.setAttribute('aria-expanded', 'false');
    button.removeAttribute('style');
    dropdown.setAttribute('hidden', '');
  } else {
    button.setAttribute('aria-expanded', 'true');
    button.style.transform = 'rotate(180deg)';
    dropdown.removeAttribute('hidden');
  }
}
