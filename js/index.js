'use strict';

const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');

const svcImage = document.querySelector('.svc__image');
const svcImageWrapper = document.querySelector('.svc__image-wrapper');

import { opemMobileMenu } from './conmponents/mobile-menu.js';
import { bodyLock, bodyUnlock } from './utils/body-lock.js';
import { moveStrip } from './conmponents/animate-strip.js';
import { stylingWeatherWidget } from './conmponents/weather-widget.js';
import { initServicesSlider } from './conmponents/services-slider.js';
import { gallerySlider } from './conmponents/gallery-slider.js';
import { priceDriveSlider } from './conmponents/price-drive-slider.js';
import { profitSlider } from './conmponents/profit-slider.js';
import { svcImageSwitcher } from './conmponents/svc-image-animation.js';

bodyLock(pageContent, pageFooter);
bodyUnlock(pageContent, pageFooter);

opemMobileMenu(menuSwitcher, mobileMenu,
	() => bodyLock(pageContent, pageFooter),
	() => bodyUnlock(pageContent, pageFooter)
);


stylingWeatherWidget();

initServicesSlider();
svcImageSwitcher(svcImageWrapper, svcImage, 6500);
window.addEventListener('load', () => {
	moveStrip();
});