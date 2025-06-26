'use strict';

export function initAboutUsTextView(buttons, contentBlock) {
	buttons.forEach(button => {
		button.addEventListener('click', (e) => {
			const aboutUsButton = e.target;
			transferAboutUsTitle(aboutUsButton, contentBlock);
			changeActiveAboutUsItem(aboutUsButton, buttons);
			changeAboutUsText(aboutUsButton, contentBlock);
			chargeAboutUsItems();
		});
	});
}

function transferAboutUsTitle(button, contentBlock) {
	if (!contentBlock) {
		console.log('MY ERROR IN transferAboutUsTitle FUNCTION');
		return;
	}
	const aboutUsContentBLockTitle = contentBlock.querySelector('.about-us__general-title');

	if (button && aboutUsContentBLockTitle) {
		const text = button.textContent.trim();
		aboutUsContentBLockTitle.textContent = text;
	} else {
		console.log('MY ERROR IN transferAboutUsTitle FUNCTION');
		return;
	}
}

function changeActiveAboutUsItem(button, buttons) {
	const list = document.querySelector('.about-us__list');
	if (!list && !buttons) {
		console.log('MY ERROR IN chargeAboutUsItems FUNCTION');
		return;
	}
	buttons.forEach(button => {
		button.removeAttribute('aria-hidden');
	});
	const activeItem = list.querySelector('.active-item');
	const activeButton = activeItem.querySelector('button');

	activeItem.classList.remove('active-item');
	activeButton.setAttribute('aria-hidden', 'true');

	if (!button) {
		console.log('MY ERROR IN changeActiveAboutUsItem FUNCTION');
		return;
	}

	const parentItem = button.closest('.about-us__list-item');
	parentItem.classList.add('active-item');
}

function chargeAboutUsItems() {
	const list = document.querySelector('.about-us__list');
	if (!list) {
		console.log('MY ERROR IN chargeAboutUsItems FUNCTION');
		return;
	}

	const activeItem = list.querySelector('.active-item');
	if (!activeItem) {
		console.log('MY ERROR IN chargeAboutUsItems FUNCTION');
		return;
	}
	let items = Array.from(list.children);

	if (items[2] === activeItem) return;

	list.removeChild(activeItem);
	items = Array.from(list.children);

	if (items.length >= 2) {
		list.insertBefore(activeItem, items[2]);
	} else {
		list.appendChild(activeItem);
	}
}

function changeAboutUsText(button, contentBlock) {
	if (!contentBlock && !button) {
		console.log('MY ERROR IN changeAboutUsText FUNCTION');
		return;
	}
	const id = button.getAttribute('data-about-id');
	const activeText = contentBlock.querySelector(`.about-us__general-text[data-about-id="${id}"]`);

	contentBlock.querySelectorAll('.about-us__general-text').forEach(text => {
		text.classList.add('visually-hidden');
		const p = text.querySelector('p');
		p.setAttribute('aria-hidden', 'true');
	});

	if (activeText) {
		activeText.classList.remove('visually-hidden');
		const activeP = activeText.querySelector('p');
		activeP.setAttribute('aria-hidden', 'false');
		animationTypeText(activeP);
	} else {
		console.log('MY ERROR IN changeAboutUsText FUNCTION');
		return;
	}
}

function animationTypeText(paragraph) {
	if (!paragraph) {
		console.log('MY ERROR IN animationTypeText FUNCTION');
		return;
	}

	const fullText = paragraph.textContent;
	let i = 0;
	paragraph.textContent = '';

	function type() {
		if (i < fullText.length) {
			paragraph.textContent += fullText[i];
			i++;
			setTimeout(type, 15);
		}
	}

	type();
}