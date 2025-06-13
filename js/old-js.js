// 'use strict';

// const menuSwitcher = document.getElementById('menu-switch');
// const mobileMenu = document.querySelector('.mobile-menu__wrapper');
// const pageContent = document.querySelector('.content');
// const pageFooter = document.querySelector('.footer');
//==========================================================================//
//==========================================================================//
// ------------============Functions for block strip============------------//
// (() => {
// 	let o = 0;
// 	const a = () => {
// 		o = (o + 0.1) % 100;
// 		document.querySelectorAll('.location-strip__text-path').forEach(p =>
// 			p.setAttribute('startOffset', `${(parseFloat(p.getAttribute('startOffset')) + 0.02) % 100}%`));
// 		requestAnimationFrame(a);
// 	};
// 	a();
// })();

// Full version
// document.addEventListener('DOMContentLoaded', () => {
// 	const textPaths = document.querySelectorAll('.location-strip__text-path');
// 	let offset = 0;

// 	const animate = () => {
// 		offset += 0.01;
// 		if (offset > 100) offset = 0;

// 		textPaths.forEach(path => {
// 			const currentOffset = parseFloat(path.getAttribute('startOffset'));
// 			const newOffset = (currentOffset + 0.02) % 100;
// 			path.setAttribute('startOffset', `${newOffset}%`);
// 		});

// 		requestAnimationFrame(animate);
// 	};

// 	animate();
// });

//==========================================================================//
//==========================================================================//
// ------------============Functions for weater widget (hide link)============------------//
// Sourse of widget https://dash.elfsight.com/apps/weather?installationWidgetPid=62b8e7b0-750a-48cf-8d21-dceaadcbf04b

// document.addEventListener('DOMContentLoaded', () => {
// 	const weatherWidget = document.querySelector('.elfsight-app-62b8e7b0-750a-48cf-8d21-dceaadcbf04b');
// 	if (!weatherWidget) return;

// 	const observer = new MutationObserver((mutationsList, observerInstance) => {
// 		const hideWidgetLink = weatherWidget.querySelector('a[rel="noreferrer"]');

// 		if (hideWidgetLink) {
// 			hideWidgetLink.style.display = 'none';
// 			observerInstance.disconnect();
// 		}
// 	});

// 	observer.observe(weatherWidget, { childList: true, subtree: true });
// });
//==========================================================================//
//==========================================================================//

// menuSwitcher.addEventListener('change', (e) => {
// 	if (e.target.checked) {
// 		bodyLock();
// 		menuSwitcher.labels[0].title = 'close';
// 	} else if (!e.target.checked) {
// 		bodyUnlock();
// 		menuSwitcher.labels[0].title = 'mobile menu';
// 	}
// });

// mobileMenu.addEventListener('click', (e) => {
// 	menuSwitcher.checked = false;
// 	bodyUnlock();
// });



// // ===================
// function bodyLock() {
// 	document.body.classList.add('lock-body');
// 	pageContent.classList.add('hide-layer');
// 	pageFooter.classList.add('hide-layer');
// 	pageContent.classList.add('blur-layer');
// }
// function bodyUnlock() {
// 	document.body.classList.remove('lock-body');
// 	pageContent.classList.remove('hide-layer');
// 	pageFooter.classList.remove('hide-layer');
// 	pageContent.classList.remove('blur-layer');
// }

///// ============ Slider services ===============
// let servicesPaginationSlider;
// let servicesSlider;

// const initServicesSlider = function () {
// 	servicesPaginationSlider = new Swiper(".services-pagination", {
// 		spaceBetween: 60,
// 		slidesPerView: 'auto',
// 		watchSlidesProgress: true,
// 		loop: true,
// 		navigation: {
// 			nextEl: ".services__slider-pagonation-button",
// 		},

// 		breakpoints: {
// 			768: {
// 				spaceBetween: 90,
// 				direction: "vertical",
// 				allowTouchMove: false,
// 				slidesPerGroup: 5,
// 				slidesPerView: 5,
// 			}
// 		}
// 	});

// 	servicesSlider = new Swiper(".services__slider", {
// 		slidesPerView: 1,
// 		spaceBetween: 34,
// 		loop: true,
// 		grabCursor: true,

// 		thumbs: {
// 			swiper: servicesPaginationSlider,
// 		},

// 		navigation: {
// 			nextEl: ".services__slider-button",
// 		},
// 		breakpoints: {
// 			768: {
// 				spaceBetween: 10,
// 				grabCursor: false,
// 				allowTouchMove: false,
// 				slidesPerView: 5,
// 				direction: "vertical",
// 				slidesPerGroup: 5,

// 			}
// 		}
// 	});

// 	servicesSlider.on('slideChange', stylingViewedSlides);
// 	servicesPaginationSlider.on('slideChange', stylingViewedSlides);
// };
// initServicesSlider();
// // Code for painting viewed slide ( slider pagination accent fill )
// function stylingViewedSlides() {
// 	const paginationSlides = document.querySelectorAll('.services-pagination .swiper-slide');
// 	let activeSlideFound = false;

// 	paginationSlides.forEach(slide => {
// 		if (slide.classList.contains('swiper-slide-thumb-active')) {
// 			activeSlideFound = true;
// 		}
// 		if (!activeSlideFound) {
// 			slide.classList.add('services-pagination__slide--viewed');
// 		} else {
// 			slide.classList.remove('services-pagination__slide--viewed');
// 		}
// 	});
// };

// // For block services ( details text )
// document.querySelectorAll('.service__toggle-button').forEach(button => {
// 	button.addEventListener('click', () => {
// 		const textBlock = button.closest('.service__toggle');
// 		const isExpanded = textBlock.classList.toggle('service__toggle--expanded');
// 		button.setAttribute('aria-expanded', isExpanded);
// 	});
// });

///// ============ END Slider services ===============


///// ============ Galery slider ===============
// const gallery = new Swiper(".gallery-slider", {
// 	loop: true,
// 	lazy: true,
// 	pagination: {
// 		el: ".gallery-slider__pagination",
// 		clickable: true,
// 	},
// 	autoplay: {
// 		delay: 3500,
// 		disableOnInteraction: false,
// 	},
// });
///// ============ END slider ===============


///// ============ Price drive slider ===============

// const priceDriveSlider = new Swiper(".price-drive-slider", {
// 	slidesPerView: 'auto',
// 	centeredSlides: true,
// 	spaceBetween: 15,
// 	loop: true,
// 	lazy: true,
// 	navigation: {
// 		nextEl: ".price-drive__button",
// 	},
// 	effect: "coverflow",
// 	coverflowEffect: {
// 		rotate: 15,
// 		stretch: -40,
// 		depth: 200,
// 		modifier: 1.3,
// 		slideShadows: false,
// 	},
// 	breakpoints: {
// 		768: {
// 			spaceBetween: 50,
// 		}
// 	}
// });
///// ============ END price drive slider ===============


///// ============ Profit slider===============
// const profitSlider = new Swiper(".profit-slider", {
// 	centeredSlides: true,
// 	slidesPerView: 1,
// 	lazy: true,

// 	breakpoints: {
// 		480: {
// 			centeredSlides: false,
// 			slidesPerView: 1.2,
// 			freeMode: true,
// 			spaceBetween: 0,
// 		},
// 		768: {
// 			slidesPerView: 'auto',
// 			spaceBetween: 93,
// 			loop: true,
// 		}
// 	}
// });
///// ============ END profit slider ===============