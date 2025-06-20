'use strict';

const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');

const svcImage = document.querySelector('.svc__image');
const svcImageWrapper = document.querySelector('.svc__image-wrapper');

let servicesPaginationSlider;
let servicesSlider;

let currentIndex = 0;
const imagesPathes = [
	'./images/svc/svc-1.webp',
	'./images/svc/svc-2.webp',
	'./images/svc/svc-3.webp',
];
// ================================= //
window.addEventListener('load', () => {
	moveStrip();
	svcImageSwitcher(svcImageWrapper, svcImage, 6500);
	createMapIframe();
	createReviewIframe();
	stylingWeatherWidget();
});
// ================================= //

bodyLock(pageContent, pageFooter);
bodyUnlock(pageContent, pageFooter);

opemMobileMenu(menuSwitcher, mobileMenu,
	() => bodyLock(pageContent, pageFooter),
	() => bodyUnlock(pageContent, pageFooter)
);
initServicesSlider();
// ----------------============Functions============---------------- /////
function opemMobileMenu(menuSwitcher, mobileMenu, bodyLock, bodyUnlock) {
	menuSwitcher.addEventListener('change', (e) => {
		if (e.target.checked) {
			bodyLock();
			menuSwitcher.labels[0].title = 'close';
		} else {
			bodyUnlock();
			menuSwitcher.labels[0].title = 'mobile menu';
		}
	});

	mobileMenu.addEventListener('click', () => {
		menuSwitcher.checked = false;
		bodyUnlock();
	});
}

function bodyLock(pageContent, pageFooter) {
	document.body.classList.add('lock-body');
	pageContent.classList.add('hide-layer');
	pageFooter.classList.add('hide-layer');
	pageContent.classList.add('blur-layer');
}

function bodyUnlock(pageContent, pageFooter) {
	document.body.classList.remove('lock-body');
	pageContent.classList.remove('hide-layer');
	pageFooter.classList.remove('hide-layer');
	pageContent.classList.remove('blur-layer');
}

function moveStrip() {
	let o = 0;
	const animate = () => {
		o = (o + 0.1) % 100;
		document.querySelectorAll('.location-strip__text-path').forEach(p => {
			const currentOffset = parseFloat(p.getAttribute('startOffset')) || 0;
			p.setAttribute('startOffset', `${(currentOffset + 0.02) % 100}%`);
		});
		requestAnimationFrame(animate);
	};
	animate();
}

function changeImage(imageWrapper, image) {
	imageWrapper.classList.remove('opacity-off');
	imageWrapper.classList.add('opacity-on');

	setTimeout(() => {
		currentIndex = (currentIndex + 1) % imagesPathes.length;
		image.src = imagesPathes[currentIndex];
	}, 700);

	setTimeout(() => {
		imageWrapper.classList.add('opacity-off');
		imageWrapper.classList.remove('opacity-on');
	}, 1000);
}

function svcImageSwitcher(imageWrapper, image, interval = 6500) {
	setInterval(() => {
		changeImage(imageWrapper, image);
	}, interval);
}

function createMapIframe() {
	const container = document.getElementById('location-map-container');
	if (!container) return;

	const iframe = document.createElement('iframe');
	iframe.className = 'location__map-iframe';
	iframe.src = 'https://yandex.by/map-widget/v1/?ll=29.862408%2C59.703207&mode=search&oid=210696600750&ol=biz&z=16.26';
	iframe.frameBorder = '1';
	iframe.allowFullscreen = true;
	iframe.style.position = 'relative';

	container.appendChild(iframe);
};

function createReviewIframe() {
	const reviewContainer = document.querySelector('.reviews__review');
	if (!reviewContainer) return;

	const iframe = document.createElement('iframe');
	iframe.className = 'reviews__iframe';
	iframe.src = 'https://yandex.ru/maps-reviews-widget/210696600750?comments';
	iframe.frameBorder = '0';
	iframe.allowFullscreen = true;

	reviewContainer.appendChild(iframe);
};

function stylingWeatherWidget() {
	const weatherScript = document.createElement('script');
	weatherScript.src = 'https://static.elfsight.com/platform/platform.js';
	weatherScript.async = true;
	document.body.appendChild(weatherScript);

	const containerObserver = new MutationObserver((mutations, obs) => {
		const weatherWidget = document.querySelector('.elfsight-app-62b8e7b0-750a-48cf-8d21-dceaadcbf04b');
		if (weatherWidget) {
			obs.disconnect();

			const innerObserver = new MutationObserver((mutations, innerObs) => {
				const hideWidgetLink = weatherWidget.querySelector('a[rel="noreferrer"]');
				const locationName = weatherWidget.querySelector('.hsazHl');
				if (locationName) {
					locationName.textContent = 'Большие горки';
				}
				if (locationName || hideWidgetLink) {
					locationName.textContent = 'Большие горки';
					hideWidgetLink.style.display = 'none';
					innerObs.disconnect();
				}
			});

			innerObserver.observe(weatherWidget, { childList: true, subtree: true });
		}
	});

	containerObserver.observe(document.body, { childList: true, subtree: true });
}

//====sliders====//
function initServicesSlider() {
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

	stylingViewedSlides();
	initServiceToggleButtons();
}

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
}

function initServiceToggleButtons() {
	document.querySelectorAll('.service__toggle-button').forEach(button => {
		button.addEventListener('click', () => {
			const textBlock = button.closest('.service__toggle');
			const isExpanded = textBlock.classList.toggle('service__toggle--expanded');
			button.setAttribute('aria-expanded', isExpanded);
		});
	});
}

const gallerySlider = new Swiper(".gallery-slider", {
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