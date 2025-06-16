'use strict';

export function createReviewIframe() {
	window.addEventListener('load', () => {
		const reviewContainer = document.querySelector('.reviews__review');
		if (!reviewContainer) return;

		const iframe = document.createElement('iframe');
		iframe.className = 'reviews__iframe';
		iframe.src = 'https://yandex.ru/maps-reviews-widget/210696600750?comments';
		iframe.frameBorder = '0';
		iframe.allowFullscreen = true;

		reviewContainer.appendChild(iframe);
	});
};