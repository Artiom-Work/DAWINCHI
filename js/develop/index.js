'use strict';

const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');

const aboutUsImage = document.querySelector('.about-us__image');
const aboutUsImageWrapper = document.querySelector('.about-us__image-wrapper');
const aboutUsButtons = document.querySelectorAll('.about-us__list-button');
const aboutUsContentBlock = document.querySelector('.about-us__general-content');

import { opemMobileMenu } from './conmponents/mobile-menu.js';
import { bodyLock, bodyUnlock } from './utils/body-lock.js';
import { moveStrip } from './conmponents/animate-strip.js';
import { createMapIframe } from './conmponents/create-map-iframe.js';
import { createReviewIframe } from './conmponents/create-yandex-review.js';
import { stylingWeatherWidget } from './conmponents/weather-widget.js';
import { initServicesSlider } from './conmponents/services-slider.js';
import { gallerySlider } from './conmponents/gallery-slider.js';
import { priceDriveSlider } from './conmponents/price-drive-slider.js';
import { profitSlider } from './conmponents/profit-slider.js';
import { aboutUsImageSwitcher } from './conmponents/about-us-image-animation.js';
import { initAboutUsTextView } from './conmponents/about-us-text-switch.js';

bodyLock(pageContent, pageFooter);
bodyUnlock(pageContent, pageFooter);

opemMobileMenu(menuSwitcher, mobileMenu,
	() => bodyLock(pageContent, pageFooter),
	() => bodyUnlock(pageContent, pageFooter)
);

createMapIframe();
createReviewIframe();
stylingWeatherWidget();

initServicesSlider();

window.addEventListener('load', () => {
	moveStrip();
	aboutUsImageSwitcher(aboutUsImageWrapper, aboutUsImage, 6500);
	initAboutUsTextView(aboutUsButtons, aboutUsContentBlock);
});

