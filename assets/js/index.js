const menuImgs = document.querySelectorAll('.menu__image');
const menuImgArr = Array.from(menuImgs);

menuImgArr.forEach(el => {
  el.addEventListener('click', e => {
    el.classList.toggle('menu__image--active');
    console.log(el.classList);
  });
});
