'use strict';

const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');
const pageHeader = document.querySelector('.header');
const preloader = document.querySelector('.preloader');

import { opacityPageOn, opacityPageOff } from '../utils/opacity-content.js';

function preloaderOn() {
	if (preloader) {
		opacityPageOn(pageHeader, pageContent, pageFooter);
		preloader.classList.remove('visually-hidden');
	}
}

function preloaderOff() {
	if (preloader) {
		opacityPageOff(pageHeader, pageContent, pageFooter);
		preloader.classList.add('visually-hidden');
	}
}
preloaderOn();

window.addEventListener('load', () => {
	setTimeout(() => {
		preloaderOff();
	}, 1200);
});