const menuImgs = document.querySelectorAll('.menu__image');
const menuImgArr = Array.from(menuImgs);

menuImgArr.forEach(el => {
  el.addEventListener('click', e => {
    el.classList.toggle('menu__image--active');
  });
});

const removeMenuItemActive = () => {
  menuItemsArr.forEach(el => {
    el.classList.remove('menu__item--active');
  });
};

const changeImgTacos = () => {
  menuImgArr.forEach((el, index) => {
    if (index === 0) el.src = '/assets/img/taco-bean.jpg';
    else if (index === 1) el.src = '/assets/img/taco-chicken.jpg';
    else if (index === 2) el.src = '/assets/img/taco-carnitas.jpg';
  });
};

const changeImgBurritos = () => {
  menuImgArr.forEach((el, index) => {
    if (index === 0) el.src = '/assets/img/burrito-bean.jpg';
    else if (index === 1) el.src = '/assets/img/burrito-chicken.jpg';
    else if (index === 2) el.src = '/assets/img/burrito-vegan.jpg';
  });
};

const changeImgHamburgers = () => {
  menuImgArr.forEach((el, index) => {
    if (index === 0) el.src = '/assets/img/hamburger-classic.jpg';
    else if (index === 1) el.src = '/assets/img/hamburger-meatlover.jpg';
    else if (index === 2) el.src = '/assets/img/hamburger-steak.jpg';
  });
};

const menuItems = document.querySelectorAll('.menu__item');
const menuItemsArr = Array.from(menuItems);
menuItemsArr.forEach((el, index) => {
  el.addEventListener('click', e => {
    // 1. Remove all items' active class
    removeMenuItemActive();

    // 2. toggle the active class on the target element
    el.classList.toggle('menu__item--active');

    // 3. Change images
    if (index === 0) {
      // Change all the images to tacos
      changeImgTacos();
    } else if (index === 1) {
      // Change all the images to burritos
      changeImgBurritos();
    } else if (index === 2) {
      // Change all the images to hamburgers
      changeImgHamburgers();
    }
  });
});
