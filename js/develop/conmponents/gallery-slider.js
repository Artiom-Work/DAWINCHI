'use strict';

export const gallerySlider = new Swiper(".gallery-slider", {
	loop: true,
	lazy: true,
	grabCursor: true,
	pagination: {
		el: ".gallery-slider__pagination",
		clickable: true,
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 1,
		loadOnTransitionStart: true,
		checkInView: true,
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
});