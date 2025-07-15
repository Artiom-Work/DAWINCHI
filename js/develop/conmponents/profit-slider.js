'use strict';

export const profitSlider = new Swiper(".profit-slider", {
	centeredSlides: true,
	slidesPerView: 1,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 1,
		loadOnTransitionStart: true,
		checkInView: true,
	},
	navigation: {
		nextEl: ".profit-slider__button--next",
		prevEl: ".profit-slider__button--prev",
	},
	breakpoints: {
		480: {
			centeredSlides: false,
			slidesPerView: 1.2,
			freeMode: true,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 'auto',
			spaceBetween: 93,
		}
	}
});