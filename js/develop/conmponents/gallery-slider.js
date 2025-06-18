'use strict';

export const gallerySlider = new Swiper(".gallery-slider", {
	loop: true,
	lazy: true,
	grabCursor: true,
	pagination: {
		el: ".gallery-slider__pagination",
		clickable: true,
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
});