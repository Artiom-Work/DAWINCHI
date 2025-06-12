'use strict';

const priceDriveSlider = new Swiper(".price-drive-slider", {
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 15,
	loop: true,
	lazy: true,
	navigation: {
		nextEl: ".price-drive__button",
	},
	effect: "coverflow",
	coverflowEffect: {
		rotate: 15,
		stretch: -25,
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