(function() {
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
