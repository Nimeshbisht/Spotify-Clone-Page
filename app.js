const nav = document.querySelector('.navbar');
const body = document.getElementsByTagName('BODY')[0];
const btn = document.querySelector('.hamburger');
const vertical = document.querySelector('.vertical-line');
const hamburger = document.querySelector('.hamburger');
const navElement = document.querySelectorAll(
  '.navbar li, .horizontal-line, .navbar span img'
);

console.log(body);
btn.addEventListener('click', function () {
  nav.classList.toggle('nav-active');

  navElement.forEach(function (element, index) {
    if (element.style.animation) element.style.animation = '';
    else
      element.style.animation = `navLinkFade ease-in forwards ${
        index / 7 + 1.3
      }s`;
  });

  if (body.style.overflowY == 'hidden') {
    body.style.overflowY = 'visible';
    body.style.background = '';
  } else {
    body.style.overflowY = 'hidden';
    body.style.background = 'rgba(0,0,0,0.2)';
  }
  btn.classList.toggle('close');
});
