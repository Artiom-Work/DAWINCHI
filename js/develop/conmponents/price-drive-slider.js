'use strict';

export const priceDriveSlider = new Swiper(".price-drive-slider", {
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 15,
	loop: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 1,
		loadOnTransitionStart: true,
		checkInView: true,
	},
	navigation: {
		nextEl: ".price-drive__button",
	},
	effect: "coverflow",
	coverflowEffect: {
		rotate: 15,
		stretch: -40,
		depth: 200,
		modifier: 1.3,
		slideShadows: false,
	},
	breakpoints: {
		768: {
			spaceBetween: 50,
		}
	}
});