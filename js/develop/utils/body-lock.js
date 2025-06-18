'use strict';

export function bodyLock(pageContent, pageFooter) {
	document.body.classList.add('lock-body');
	pageContent.classList.add('hide-layer');
	pageFooter.classList.add('hide-layer');
	pageContent.classList.add('blur-layer');
}

export function bodyUnlock(pageContent, pageFooter) {
	document.body.classList.remove('lock-body');
	pageContent.classList.remove('hide-layer');
	pageFooter.classList.remove('hide-layer');
	pageContent.classList.remove('blur-layer');
}