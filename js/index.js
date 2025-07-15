'use strict';

const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');

const aboutUsImage = document.querySelector('.about-us__image');
const aboutUsImageWrapper = document.querySelector('.about-us__image-wrapper');
const aboutUsButtons = document.querySelectorAll('.about-us__list-button');
const aboutUsContentBlock = document.querySelector('.about-us__general-content');

let servicesPaginationSlider;
let servicesSlider;

let currentIndex = 0;
const imagesPathes = [
	'./images/about-us/about-us-1.webp',
	'./images/about-us/about-us-2.webp',
	'./images/about-us/about-us-3.webp',
	'./images/about-us/about-us-4.webp',
	'./images/about-us/about-us-5.webp',
	'./images/about-us/about-us-6.webp',
	'./images/about-us/about-us-7.webp',
	'./images/about-us/about-us-8.webp',
	'./images/about-us/about-us-9.webp',
	'./images/about-us/about-us-10.webp',
];
// ================================= //
window.addEventListener('load', () => {
	moveStrip();
	aboutUsImageSwitcher(aboutUsImageWrapper, aboutUsImage, 6500);
	createMapIframe();
	createReviewIframe();
	stylingWeatherWidget();
	initAboutUsTextView(aboutUsButtons, aboutUsContentBlock);
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

function aboutUsImageSwitcher(imageWrapper, image, interval = 6500) {
	setInterval(() => {
		changeImage(imageWrapper, image);
	}, interval);
}

function initAboutUsTextView(buttons, contentBlock) {
	buttons.forEach(button => {
		button.addEventListener('click', (e) => {
			const aboutUsButton = e.target;
			transferAboutUsTitle(aboutUsButton, contentBlock);
			changeActiveAboutUsItem(aboutUsButton, buttons);
			changeAboutUsText(aboutUsButton, contentBlock);
			chargeAboutUsItems();
		});
	});
}

function transferAboutUsTitle(button, contentBlock) {
	if (!contentBlock) {
		console.log('MY ERROR IN transferAboutUsTitle FUNCTION');
		return;
	}
	const aboutUsContentBLockTitle = contentBlock.querySelector('.about-us__general-title');

	if (button && aboutUsContentBLockTitle) {
		const text = button.textContent.trim();
		aboutUsContentBLockTitle.textContent = text;
	} else {
		console.log('MY ERROR IN transferAboutUsTitle FUNCTION');
		return;
	}
}

function changeActiveAboutUsItem(button, buttons) {
	const list = document.querySelector('.about-us__list');
	if (!list && !buttons) {
		console.log('MY ERROR IN chargeAboutUsItems FUNCTION');
		return;
	}
	buttons.forEach(button => {
		button.removeAttribute('aria-hidden');
	});
	const activeItem = list.querySelector('.active-item');
	const activeButton = activeItem.querySelector('button');

	activeItem.classList.remove('active-item');
	activeButton.setAttribute('aria-hidden', 'true');

	if (!button) {
		console.log('MY ERROR IN changeActiveAboutUsItem FUNCTION');
		return;
	}

	const parentItem = button.closest('.about-us__list-item');
	parentItem.classList.add('active-item');
}

function chargeAboutUsItems() {
	const list = document.querySelector('.about-us__list');
	if (!list) {
		console.log('MY ERROR IN chargeAboutUsItems FUNCTION');
		return;
	}

	const activeItem = list.querySelector('.active-item');
	if (!activeItem) {
		console.log('MY ERROR IN chargeAboutUsItems FUNCTION');
		return;
	}
	let items = Array.from(list.children);

	if (items[2] === activeItem) return;

	list.removeChild(activeItem);
	items = Array.from(list.children);

	if (items.length >= 2) {
		list.insertBefore(activeItem, items[2]);
	} else {
		list.appendChild(activeItem);
	}
}

function changeAboutUsText(button, contentBlock) {
	if (!contentBlock && !button) {
		console.log('MY ERROR IN changeAboutUsText FUNCTION');
		return;
	}
	const id = button.getAttribute('data-about-id');
	const activeText = contentBlock.querySelector(`.about-us__general-text[data-about-id="${id}"]`);

	contentBlock.querySelectorAll('.about-us__general-text').forEach(text => {
		text.classList.add('visually-hidden');
		const p = text.querySelector('p');
		p.setAttribute('aria-hidden', 'true');
	});

	if (activeText) {
		activeText.classList.remove('visually-hidden');
		const activeP = activeText.querySelector('p');
		activeP.setAttribute('aria-hidden', 'false');
		animationTypeText(activeP);
	} else {
		console.log('MY ERROR IN changeAboutUsText FUNCTION');
		return;
	}
}

function animationTypeText(paragraph) {
	if (!paragraph) {
		console.log('MY ERROR IN animationTypeText FUNCTION');
		return;
	}

	const fullText = paragraph.textContent;
	let i = 0;
	paragraph.textContent = '';

	function type() {
		if (i < fullText.length) {
			paragraph.textContent += fullText[i];
			i++;
			setTimeout(type, 15);
		}
	}

	type();
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
		const weatherWidget = document.querySelector('.elfsight-app-6e15d0d0-956c-4c31-a60e-e0858c9c1b6e');
		if (weatherWidget) {
			obs.disconnect();

			const innerObserver = new MutationObserver((mutations, innerObs) => {
				const hideWidgetLink = weatherWidget.querySelector('a[rel="noreferrer"]');
				const locationName = weatherWidget.querySelector('.hsazHl');

				if (locationName || hideWidgetLink) {
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
		preloadImages: false,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1,
			loadOnTransitionStart: true,
			checkInView: true,
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
			const textContent = textBlock.querySelector('.service__toggle-text');

			const isExpanded = textBlock.classList.toggle('service__toggle--expanded');
			button.setAttribute('aria-expanded', isExpanded);

			if (!isExpanded && textContent) {
				textContent.scrollTop = 0;
			}
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