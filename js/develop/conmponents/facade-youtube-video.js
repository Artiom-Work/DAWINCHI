'use strict';

export function createVideoIFrame() {
	const previewVideoPreloader = document.querySelector('.corporate__preview-video-preloader');

	if (previewVideoPreloader) {
		previewVideoPreloader.addEventListener('click', function (event) {
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
	}
};