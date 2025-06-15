'use strict';

export function createVideoFrame() {
	document.querySelector('.corporate__preview-video-preloader').addEventListener('click', function (event) {
		const target = event.currentTarget;
		const src = target.getAttribute('data-src');
		const iframe = document.createElement('iframe');
		iframe.classList.add('corporate__preview-video');
		iframe.setAttribute('src', src);
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
		target.replaceWith(iframe);
	});
};