let template = require('./template');
require("../css/main.scss");
(function () {
var header = document.getElementsByTagName('header')[0];
var iconMenu = document.getElementById('icon-menu');
var menuList = document.getElementById('menu-list');
var menuLink = document.querySelectorAll('.menu-link');
var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

if (isSafari) {
    for (var i = 0; i < menuLink.length; i++) {
      if (menuLink[i].dataset.scrollTo == '#portfolio') menuLink[i].parentElement.style.display = 'none';
    }
}

menuList.style.top = header.offsetHeight + 'px';
iconMenu.addEventListener('click', function () {
  menuList.classList.toggle('show-menu');
});

var scrolled;
document.addEventListener('scroll', function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  (scrolled > 100) ? header.classList.add('grey') : header.classList.remove('grey');
});

})();

var program = document.getElementsByClassName("program");
var tab = document.getElementsByClassName("tab");

[].forEach.call(program, function(item) {
    item.addEventListener('click', function () {
        for (var i = 0; i < tab.length; i++) {
            if (this == program[i]) {
                tab[i].classList.add("show");
                this.classList.add("active-tab");
            } else {
              program[i].classList.remove("active-tab");
              tab[i].classList.remove("show");
            }
        }
    });
});

var width = window.innerWidth;



module.exports = template;
