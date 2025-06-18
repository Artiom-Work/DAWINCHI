'use strict';

export function opemMobileMenu(menuSwitcher, mobileMenu, bodyLock, bodyUnlock) {
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