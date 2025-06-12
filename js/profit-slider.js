'use strict';

const profitSlider = new Swiper(".profit-slider", {
	centeredSlides: true,
	slidesPerView: 1,
	lazy: true,

	breakpoints: {
		480: {
			centeredSlides: false,
			slidesPerView: 1.2,
			freeMode: true,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 'auto',
			spaceBetween: 93,
			loop: true,
		}
	}
});