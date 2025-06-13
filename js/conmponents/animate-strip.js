'use strict';

export function moveStrip() {
	let o = 0;
	const animate = () => {
		o = (o + 0.1) % 100;
		document.querySelectorAll('.location-strip__text-path').forEach(p => {
			const currentOffset = parseFloat(p.getAttribute('startOffset')) || 0;
			p.setAttribute('startOffset', `${(currentOffset + 0.02) % 100}%`);
		});
		requestAnimationFrame(animate);
	};
	animate();
}