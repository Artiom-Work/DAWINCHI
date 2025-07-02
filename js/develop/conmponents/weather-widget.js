'use strict';
// Functions for weater widget (hide links)
// Sourse of widget https://dash.elfsight.com/apps/weather?installationWidgetPid=6e15d0d0-956c-4c31-a60e-e0858c9c1b6e

export function stylingWeatherWidget() {
	window.addEventListener('load', () => {
		const weatherScript = document.createElement('script');
		weatherScript.src = 'https://static.elfsight.com/platform/platform.js';
		weatherScript.async = true;
		document.body.appendChild(weatherScript);

		const containerObserver = new MutationObserver((mutations, obs) => {
			const weatherWidget = document.querySelector('.elfsight-app-6e15d0d0-956c-4c31-a60e-e0858c9c1b6e');
			if (weatherWidget) {
				obs.disconnect();

				const innerObserver = new MutationObserver((mutations, innerObs) => {
					const hideWidgetLink = weatherWidget.querySelector('a[rel="noreferrer"]');
					const locationName = weatherWidget.querySelector('.hsazHl');

					if (locationName || hideWidgetLink) {
						hideWidgetLink.style.display = 'none';
						innerObs.disconnect();
					}
				});

				innerObserver.observe(weatherWidget, { childList: true, subtree: true });
			}
		});

		containerObserver.observe(document.body, { childList: true, subtree: true });
	});
}