(function () {
var header = document.getElementsByTagName('header')[0];
var logo = document.getElementById('logo');
var lines = document.querySelector('.lines');
var iconMenu = document.getElementById('icon-menu');
var menuList = document.getElementById('menu-list');
var menuLink = document.querySelectorAll('.menu-link');


menuList.style.top = header.offsetHeight + 'px';
iconMenu.addEventListener('click', function () {
  menuList.classList.toggle('show-menu');
});

var scrolled;
document.addEventListener('scroll', function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    header.classList.add('black');
    logo.classList.add('logo-up');
    lines.classList.add('hide');
  } else {
    header.classList.remove('black');
    logo.classList.remove('logo-up');
    lines.classList.remove('hide');
  }
});

})();
