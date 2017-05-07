var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  document.addEventListener('scroll', function () {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var program = document.getElementsByClassName("program");
    var tab = document.getElementsByClassName("tab");

    [].forEach.call(program, function (item) {
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
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

    'use strict';

    if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {

        var smoothScroll = function smoothScroll(anchor, duration) {

            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop - 90;
            var distance = endLocation - startLocation;
            var increments = distance / (duration / 16);
            var stopAnimation;

            var animateScroll = function animateScroll() {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            if (increments >= 0) {

                stopAnimation = function stopAnimation() {
                    var travelled = window.pageYOffset;
                    if (travelled >= endLocation - increments || window.innerHeight + travelled >= document.body.offsetHeight) {
                        clearInterval(runAnimation);
                    }
                };
            } else {

                stopAnimation = function stopAnimation() {
                    var travelled = window.pageYOffset;
                    if (travelled <= (endLocation || 0)) {
                        clearInterval(runAnimation);
                    }
                };
            }

            var runAnimation = setInterval(animateScroll, 16);
        };

        var scrollToggle = document.querySelectorAll('.scroll');

        [].forEach.call(scrollToggle, function (toggle) {

            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                if (dataTarget) {
                    smoothScroll(dataTarget, dataSpeed || 500);
                }
            }, false);
        });
    }
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function sliderGallery() {
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
    for (var i = 0; i < amountSlides; i++) {
      sliderWrapper.insertAdjacentElement('beforeEnd', sliderWrapper.children[i].cloneNode(true));
    }sliderWrapper.style.transition = '0.5s';
  }

  preparingSlider();
  var autoplaySlides = function autoplaySlides() {
    if (scrolled < sliderWrapper.offsetTop - sliderWrapper.clientHeight - 700) return;
    if (currentSlide === amountSlides - 1) {
      setTimeout(function () {
        sliderWrapper.style.transition = '0.5s';
        currentSlide = 0;
      }, 1000);
    }
    currentSlide++;
    sliderWrapper.style.transform = 'translateX(' + -widthSlide * currentSlide + 'px)';
  };
  prevBtn.addEventListener('click', function () {
    if (isClicking) return;
    clearInterval(autoplay);
    clearTimeout(startAutoplay);
    if (!currentSlide) {
      setTimeout(function () {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + -widthSlide * amountSlides + 'px)';
        currentSlide = amountSlides - 1;
      }, 600);
    }
    currentSlide--;
    isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + -widthSlide * (currentSlide + 1) + 'px)';
    startAutoplay = setTimeout(function () {
      autoplaySlides();
      autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
    }, DELAY_AUTOPLAY);
    setTimeout(function () {
      isClicking = false;
    }, 600);
  });

  nextBtn.addEventListener('click', function () {
    if (isClicking) return;
    clearInterval(autoplay);
    clearTimeout(startAutoplay);
    if (currentSlide === amountSlides - 1) {
      setTimeout(function () {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + -widthSlide + 'px)';
        currentSlide = 0;
      }, 600);
    }
    currentSlide++;
    isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + -widthSlide * (currentSlide + 1) + 'px)';
    startAutoplay = setTimeout(function () {
      autoplaySlides();
      autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
    }, DELAY_AUTOPLAY);
    setTimeout(function () {
      isClicking = false;
    }, 600);
  });

  autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);

  document.addEventListener('scroll', function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
  });
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var sliderWrapper = document.getElementById('slider-partners');
  var slides = document.querySelectorAll('#slider-partners .slide-c');
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
    for (var i = 0; i < amountSlides; i++) {
      sliderWrapper.insertAdjacentElement('beforeEnd', sliderWrapper.children[i].cloneNode(true));
    }sliderWrapper.style.transition = '0.5s';
  }

  preparingSlider();
  var autoplaySlides = function autoplaySlides() {
    if (scrolled < sliderWrapper.offsetTop - sliderWrapper.clientHeight - 700) return;
    if (currentSlide === amountSlides - 1) {
      setTimeout(function () {
        sliderWrapper.style.transition = '0.5s';
        currentSlide = 0;
      }, 1000);
    }
    currentSlide++;
    sliderWrapper.style.transform = 'translateX(' + -widthSlide * currentSlide + 'px)';
  };

  prevBtn.addEventListener('click', function () {
    if (isClicking) return;
    clearInterval(autoplay);
    clearTimeout(startAutoplay);
    if (!currentSlide) {
      setTimeout(function () {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + -widthSlide * amountSlides + 'px)';
        currentSlide = amountSlides - 1;
      }, 600);
    }
    currentSlide--;
    isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + -widthSlide * (currentSlide + 1) + 'px)';
    startAutoplay = setTimeout(function () {
      autoplaySlides();
      autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
    }, DELAY_AUTOPLAY);
    setTimeout(function () {
      isClicking = false;
    }, 600);
  });

  nextBtn.addEventListener('click', function () {
    if (isClicking) return;
    clearInterval(autoplay);
    clearTimeout(startAutoplay);
    if (currentSlide === amountSlides - 1) {
      setTimeout(function () {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + -widthSlide + 'px)';
        currentSlide = 0;
      }, 600);
    }
    currentSlide++;
    isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + -widthSlide * (currentSlide + 1) + 'px)';
    startAutoplay = setTimeout(function () {
      autoplaySlides();
      autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
    }, DELAY_AUTOPLAY);
    setTimeout(function () {
      isClicking = false;
    }, 600);
  });

  autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);

  document.addEventListener('scroll', function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
  });
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  var setAutoplay;
  var DELAY_AUTOPLAY = 3000;
  var INTERVAL_AUTOPLAY = 4000;
  sliderWrapper.style.width = amountSlides * parseInt(slides[0].offsetWidth) + 'px';

  for (var i = 0; i < amountSlides; i++) {
    var btn = document.createElement('div');
    btn.className = 'dots';
    (function (i) {
      btn.addEventListener('click', function () {
        clearInterval(autoplay);
        clearInterval(setAutoplay);
        dots[prevDot].classList.remove('active-dot');
        this.classList.add('active-dot');
        sliderWrapper.style.transform = 'translateX(-' + widthSlide * i + 'px)';
        prevDot = i;
        isClicking = true;
        stopAutoplay = true;
        setAutoplay = setTimeout(function () {
          autoplay = 1;
          autoplaySlides(i + 1);
        }, DELAY_AUTOPLAY);
        setTimeout(function () {
          isClicking = false;
        }, DELAY_AUTOPLAY);
      });
    })(i);
    sliderNav.appendChild(btn);
    dots.push(btn);
  }
  var autoplaySlides = function autoplaySlides(j) {
    autoplay = setInterval(function () {
      if (j == amountSlides) j = 0;
      dots[prevDot].classList.remove('active-dot');
      dots[j].classList.add('active-dot');
      sliderWrapper.style.transform = 'translateX(-' + widthSlide * j + 'px)';
      prevDot = j;
      j++;
    }, INTERVAL_AUTOPLAY);
  };
  if (stopAutoplay == false) {
    autoplaySlides(0);
  }

  dots[0].classList.add('active-dot');
})();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(4);
__webpack_require__(6);

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map