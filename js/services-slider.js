'use strict';

let servicesPaginationSlider;
let servicesSlider;

const initServicesSlider = function () {
	servicesPaginationSlider = new Swiper(".services-pagination", {
		spaceBetween: 60,
		slidesPerView: 'auto',
		watchSlidesProgress: true,
		loop: true,
		navigation: {
			nextEl: ".services__slider-pagonation-button",
		},

		breakpoints: {
			768: {
				spaceBetween: 90,
				direction: "vertical",
				allowTouchMove: false,
				slidesPerGroup: 5,
				slidesPerView: 5,
			}
		}
	});

	servicesSlider = new Swiper(".services__slider", {
		slidesPerView: 1,
		spaceBetween: 34,
		loop: true,
		grabCursor: true,

		thumbs: {
			swiper: servicesPaginationSlider,
		},

		navigation: {
			nextEl: ".services__slider-button",
		},
		breakpoints: {
			768: {
				spaceBetween: 10,
				grabCursor: false,
				allowTouchMove: false,
				slidesPerView: 5,
				direction: "vertical",
				slidesPerGroup: 5,

			}
		}
	});

	servicesSlider.on('slideChange', stylingViewedSlides);
	servicesPaginationSlider.on('slideChange', stylingViewedSlides);
};
initServicesSlider();
// Code for painting viewed slide ( slider pagination accent fill )
function stylingViewedSlides() {
	const paginationSlides = document.querySelectorAll('.services-pagination .swiper-slide');
	let activeSlideFound = false;

	paginationSlides.forEach(slide => {
		if (slide.classList.contains('swiper-slide-thumb-active')) {
			activeSlideFound = true;
		}
		if (!activeSlideFound) {
			slide.classList.add('services-pagination__slide--viewed');
		} else {
			slide.classList.remove('services-pagination__slide--viewed');
		}
	});
};

// For block services ( details text )
document.querySelectorAll('.service__toggle-button').forEach(button => {
	button.addEventListener('click', () => {
		const textBlock = button.closest('.service__toggle');
		const isExpanded = textBlock.classList.toggle('service__toggle--expanded');
		button.setAttribute('aria-expanded', isExpanded);
	});
});