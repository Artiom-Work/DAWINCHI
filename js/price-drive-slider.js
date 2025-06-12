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
	breakpoints: {
		768: {
			spaceBetween: 50,
		}
	}
});