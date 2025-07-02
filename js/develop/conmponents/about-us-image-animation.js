'use strict';

let currentIndex = 0;
const imagesPathes = [
	'./images/about-us/about-us-1.webp',
	'./images/about-us/about-us-2.webp',
	'./images/about-us/about-us-3.webp',
	'./images/about-us/about-us-4.webp',
	'./images/about-us/about-us-5.webp',
	'./images/about-us/about-us-6.webp',
	'./images/about-us/about-us-7.webp',
	'./images/about-us/about-us-8.webp',
	'./images/about-us/about-us-9.webp',
	'./images/about-us/about-us-10.webp',
];

function changeImage(imageWrapper, image) {
	imageWrapper.classList.remove('opacity-off');
	imageWrapper.classList.add('opacity-on');

	setTimeout(() => {
		currentIndex = (currentIndex + 1) % imagesPathes.length;
		image.src = imagesPathes[currentIndex];
	}, 700);

	setTimeout(() => {
		imageWrapper.classList.add('opacity-off');
		imageWrapper.classList.remove('opacity-on');
	}, 1000);
}

function aboutUsImageSwitcher(imageWrapper, image, interval = 6500) {
	setInterval(() => {
		changeImage(imageWrapper, image);
	}, interval);
}

export { aboutUsImageSwitcher };