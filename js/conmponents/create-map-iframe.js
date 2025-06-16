'use strict';

export function createMapIframe() {
	window.addEventListener('load', () => {
		const container = document.getElementById('location-map-container');
		if (!container) return;

		const iframe = document.createElement('iframe');
		iframe.className = 'location__map-iframe';
		iframe.src = 'https://yandex.by/map-widget/v1/?ll=29.862408%2C59.703207&mode=search&oid=210696600750&ol=biz&z=16.26';
		iframe.frameBorder = '1';
		iframe.allowFullscreen = true;
		iframe.style.position = 'relative';

		container.appendChild(iframe);
	});
};