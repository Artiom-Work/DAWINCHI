'use strict';

const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');

// ================================= //
window.addEventListener('load', () => {
	moveStrip();
	createMapIframe();
});

// ================================= //
createVideoIFrame();
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

function createVideoIFrame() {
	document.querySelector('.corporate__preview-video-preloader').addEventListener('click', function (event) {
		const target = event.currentTarget;
		let src = target.getAttribute('data-src');
		if (src.indexOf('?') === -1) {
			src += '?autoplay=1';
		} else {
			src += '&autoplay=1';
		}

		const iframe = document.createElement('iframe');
		iframe.classList.add('corporate__preview-video');
		iframe.setAttribute('src', src);
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
		target.replaceWith(iframe);
	});
};






