(() => {
  // Отримуємо три об'єкти - кнопку, меню і список посилань
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('.site-nav__link');

  //Подія кліку по кнопці
  menuBtnRef.addEventListener('click', () => {
    // Отримуємо атрибут aria-expanded
    const expended = menuBtnRef.getAttribute('aria-expended') === 'true' || false;
    // Переключаємо наявність класу is-open на кнопці
    menuBtnRef.classList.toggle('is-open');
    //міняємо значення aria-expanded
    menuBtnRef.setAttribute('aria-expended', !expended);
    //переключаємо атрибут overflow для body
    document.body.classList.toggle('overflow-hidden');

    // Переключаємо наявність класу is-open на меню
    mobileMenuRef.classList.toggle('is-open');
  });

  // Створюємо подію кліку для кожного лінка
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
      // Якщо мобільне меню відкрите закриваємо його і повертаємо бургер кнопку
      if (mobileMenuRef.classList.contains('is-open')) {
        mobileMenuRef.classList.remove('is-open');
        menuBtnRef.classList.remove('is-open');
        //переключаємо атрибут overflow для body
        document.body.classList.remove('overflow-hidden');
      }
    });
  });
})();
