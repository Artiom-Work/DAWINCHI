'use strict';

const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');
//----//

// -------------============Functions for mobile menu============------------- //
menuSwitcher.addEventListener('change', (e) => {
	if (e.target.checked) {
		bodyLock();
		menuSwitcher.labels[0].title = 'close';
	} else if (!e.target.checked) {
		bodyUnlock();
		menuSwitcher.labels[0].title = 'mobile menu';
	}
});

mobileMenu.addEventListener('click', (e) => {
	menuSwitcher.checked = false;
	bodyUnlock();
});

function bodyLock() {
	// const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + "px";
	// document.body.style.paddingRight = lockPaddingValue;
	document.body.classList.add('lock-body');
	pageContent.classList.add('hide-layer');
	pageFooter.classList.add('hide-layer');
	pageContent.classList.add('blur-layer');
}
function bodyUnlock() {
	// document.body.style.paddingRight = '0px';
	document.body.classList.remove('lock-body');
	pageContent.classList.remove('hide-layer');
	pageFooter.classList.remove('hide-layer');
	pageContent.classList.remove('blur-layer');
}

//==========================================================================//
//==========================================================================//
// ------------============Functions for block strip============------------//
(() => {
	let o = 0;
	const a = () => {
		o = (o + 0.1) % 100;
		document.querySelectorAll('.location-strip__text-path').forEach(p =>
			p.setAttribute('startOffset', `${(parseFloat(p.getAttribute('startOffset')) + 0.02) % 100}%`));
		requestAnimationFrame(a);
	};
	a();
})();

// Full version
// document.addEventListener('DOMContentLoaded', () => {
// 	const textPaths = document.querySelectorAll('.location-strip__text-path');
// 	let offset = 0;

// 	const animate = () => {
// 		offset += 0.01;
// 		if (offset > 100) offset = 0;

// 		textPaths.forEach(path => {
// 			const currentOffset = parseFloat(path.getAttribute('startOffset'));
// 			const newOffset = (currentOffset + 0.02) % 100;
// 			path.setAttribute('startOffset', `${newOffset}%`);
// 		});

// 		requestAnimationFrame(animate);
// 	};

// 	animate();
// });

//==========================================================================//
//==========================================================================//