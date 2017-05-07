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
		(function(i) {
				btn.addEventListener('click', function () {
           clearInterval(autoplay);
           clearInterval(setAutoplay);
             dots[prevDot].classList.remove('active-dot');
             this.classList.add('active-dot');
			       sliderWrapper.style.transform = 'translateX(-' +  (widthSlide * i)  + 'px)';
             prevDot = i;
             isClicking = true;
             stopAutoplay = true;
             setAutoplay = setTimeout(function () {
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
