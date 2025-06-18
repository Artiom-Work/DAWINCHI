'use strict';

const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');
const pageHeader = document.querySelector('.header');
const preloader = document.querySelector('.preloader');


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

function opacityPageOn(pageHeader, pageContent, pageFooter) {
	pageHeader.classList.add('opacity-on');
	pageContent.classList.add('opacity-on');
	pageFooter.classList.add('opacity-on');

	pageHeader.classList.remove('opacity-off');
	pageContent.classList.remove('opacity-off');
	pageFooter.classList.remove('opacity-off');
}

function opacityPageOff(pageHeader, pageContent, pageFooter) {
	pageHeader.classList.remove('opacity-on');
	pageContent.classList.remove('opacity-on');
	pageFooter.classList.remove('opacity-on');

	pageHeader.classList.add('opacity-off');
	pageContent.classList.add('opacity-off');
	pageFooter.classList.add('opacity-off');
}

