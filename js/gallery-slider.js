'use strict';

const swiper = new Swiper(".gallery-slider", {
	loop: true,
	lazy: true,
	pagination: {
		el: ".gallery-slider__pagination",
		clickable: true,
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
});