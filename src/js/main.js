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

(function() {
 var sliderWrapper = document.getElementById('slider-gallery');
 var slides = document.querySelectorAll('#slider-gallery .slide-c');
 var prevBtn = document.querySelector('.btn-previous');
 var nextBtn = document.querySelector('.btn-next');
 var scrolled;
 var currentSlide = 0;
 var widthSlide = slides[0].offsetWidth + 2 * parseInt(getComputedStyle(slides[0]).marginLeft);
 var amountSlides = slides.length;
 var autoplay;
 var startAutoplay;
 var isClicking = 0;
 var DELAY_AUTOPLAY = 5000;
 var INTERVAL_AUTOPLAY = 3000;

 function preparingSlider() {
   sliderWrapper.style.width = widthSlide * (amountSlides + 6) + 'px';
   for (var i = 0; i < amountSlides; i++)
     sliderWrapper.insertAdjacentElement('beforeEnd', sliderWrapper.children[i].cloneNode(true));
   sliderWrapper.style.transition = '0.5s';
 }

 preparingSlider();
 var autoplaySlides = function () {
   if (scrolled < sliderWrapper.offsetTop - sliderWrapper.clientHeight - 700) return;
     if (currentSlide === amountSlides - 1) {
       setTimeout(function() {
         sliderWrapper.style.transition = '0.5s';
         currentSlide = 0;
       }, 1000);
     }
     currentSlide++;
     sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * currentSlide ) + 'px)';
 };
 prevBtn.addEventListener('click', function() {
		if (isClicking) return;
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (!currentSlide) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( -  widthSlide * (amountSlides)) + 'px)';
        currentSlide = amountSlides - 1;
      }, 600);
    }
    currentSlide--;
		isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplaySlides();
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
		setTimeout(function() {
			isClicking = false;
		}, 600);
  });


  nextBtn.addEventListener('click', function() {
		if (isClicking) return;
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (currentSlide === amountSlides - 1) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
        currentSlide = 0;
      }, 600);
    }
    currentSlide++;
		isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplaySlides();
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
		setTimeout(function() {
      isClicking = false;
    }, 600);
  });

 autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);

 document.addEventListener('scroll', function() {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
 });
})();

(function () {
 var sliderWrapper = document.querySelector('.slider-wrapper-t');
 var sliderNav = document.getElementById('slider-nav-t');
 var slides = document.querySelectorAll('.slide-t');
 var amountSlides = slides.length;
 var widthSlide = parseInt(slides[0].offsetWidth);
 var dots = [];
 var autoplay;
 var prevDot = 0;
 var isClicking = 0;
 var stopAutoplay = 0;
 var DELAY_AUTOPLAY = 3000;
 var INTERVAL_AUTOPLAY = 4000;
 sliderWrapper.style.width = amountSlides * parseInt(slides[0].offsetWidth) + 'px';

	for (var i = 0; i < amountSlides; i++) {
	  var btn = document.createElement('div');
    btn.className = 'dots';
		(function(i) {
				btn.addEventListener('click', function () {
           clearInterval(autoplay);
             dots[prevDot].classList.remove('active-dot');
             this.classList.add('active-dot');
			       sliderWrapper.style.transform = 'translateX(-' +  (widthSlide * i)  + 'px)';
             prevDot = i;
             isClicking = true;
             stopAutoplay = true;
             setTimeout(function () {
                autoplay = 1;
             		autoplaySlides(i + 1);
         		}, DELAY_AUTOPLAY);
         		setTimeout(function() {
         			isClicking = false;
         		}, DELAY_AUTOPLAY);
				});
			})(i);
			sliderNav.appendChild(btn);
      dots.push(btn);
	 }
   var autoplaySlides = function (j) {
       autoplay = setInterval(function () {
         if (j == amountSlides) j = 0;
           dots[prevDot].classList.remove('active-dot');
           dots[j].classList.add('active-dot');
           sliderWrapper.style.transform = 'translateX(-' +  (widthSlide * j)  + 'px)';
           prevDot = j;
           j++;
       }, INTERVAL_AUTOPLAY);
   };
   if (stopAutoplay == false) {
     autoplaySlides(0);
   }


   dots[0].classList.add('active-dot');

})();


(function() {
 var sliderWrapper = document.getElementById('slider-clients');
 var slides = document.querySelectorAll('#slider-clients .slide-c');
 var prevBtn = document.querySelector('.btn-p-previous');
 var nextBtn = document.querySelector('.btn-p-next');
 var scrolled;
 var currentSlide = 0;
 var widthSlide = slides[0].offsetWidth + 2 * parseInt(getComputedStyle(slides[0]).marginLeft);
 var amountSlides = slides.length;
 var autoplay;
 var startAutoplay;
 var isClicking = 0;
 var DELAY_AUTOPLAY = 3000;
 var INTERVAL_AUTOPLAY = 6000;

 function preparingSlider() {
   sliderWrapper.style.width = widthSlide * (amountSlides + 7) + 'px';
   for (var i = 0; i < amountSlides; i++)
     sliderWrapper.insertAdjacentElement('beforeEnd', sliderWrapper.children[i].cloneNode(true));
   sliderWrapper.style.transition = '0.5s';
 }

 preparingSlider();
 var autoplaySlides = function () {
   if (scrolled < sliderWrapper.offsetTop - sliderWrapper.clientHeight - 700) return;
     if (currentSlide === amountSlides - 1) {
       setTimeout(function() {
         sliderWrapper.style.transition = '0.5s';
         currentSlide = 0;
       }, 1000);
     }
     currentSlide++;
     sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * currentSlide ) + 'px)';
 };

 prevBtn.addEventListener('click', function() {
		if (isClicking) return;
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (!currentSlide) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( -  widthSlide * (amountSlides)) + 'px)';
        currentSlide = amountSlides - 1;
      }, 600);
    }
    currentSlide--;
		isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplaySlides();
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
		setTimeout(function() {
			isClicking = false;
		}, 600);
  });


  nextBtn.addEventListener('click', function() {
		if (isClicking) return;
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (currentSlide === amountSlides - 1) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
        currentSlide = 0;
      }, 600);
    }
    currentSlide++;
		isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplaySlides();
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
		setTimeout(function() {
      isClicking = false;
    }, 600);
  });

 autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);

 document.addEventListener('scroll', function() {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
 });
})();

module.exports = template;
