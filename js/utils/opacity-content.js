'use strict';

export function opacityPageOn(pageHeader, pageContent, pageFooter) {
	pageHeader.classList.add('opacity-on');
	pageContent.classList.add('opacity-on');
	pageFooter.classList.add('opacity-on');

	pageHeader.classList.remove('opacity-off');
	pageContent.classList.remove('opacity-off');
	pageFooter.classList.remove('opacity-off');
}

export function opacityPageOff(pageHeader, pageContent, pageFooter) {
	pageHeader.classList.remove('opacity-on');
	pageContent.classList.remove('opacity-on');
	pageFooter.classList.remove('opacity-on');

	pageHeader.classList.add('opacity-off');
	pageContent.classList.add('opacity-off');
	pageFooter.classList.add('opacity-off');
}




