'use strict';

let currentIndex = 0;

const imagesPathes = {
	webp: [
		'./images/svc/svc-1.webp',
		'./images/svc/svc-2.webp',
		'./images/svc/svc-3.webp',
	],
	jpeg: [
		'./images/svc/svc-1.jpeg',
		'./images/svc/svc-2.jpeg',
		'./images/svc/svc-3.jpeg',
	]
};

function changeImage(imageWrapper, image) {
	imageWrapper.classList.remove('opacity-off');
	imageWrapper.classList.add('opacity-on');

	setTimeout(() => {
		currentIndex = (currentIndex + 1) % imagesPathes.jpeg.length;

		const sources = imageWrapper.querySelectorAll('source');
		sources.forEach(source => {
			const type = source.getAttribute('type');
			if (type === 'image/webp') {
				source.srcset = imagesPathes.webp[currentIndex];
			} else if (type === 'image/jpeg') {
				source.srcset = imagesPathes.jpeg[currentIndex];
			}
		});

		const currentSrc = image.src;
		image.src = '';
		image.src = imagesPathes.jpeg[currentIndex];

	}, 800);

	setTimeout(() => {
		imageWrapper.classList.add('opacity-off');
		imageWrapper.classList.remove('opacity-on');
	}, 1000);
}

function svcImageSwitcher(imageWrapper, image, interval = 6500) {
	setInterval(() => {
		changeImage(imageWrapper, image);
	}, interval);
}

export { svcImageSwitcher };