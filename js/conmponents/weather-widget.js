'use strict';
// Functions for weater widget (hide links)
// Sourse of widget https://dash.elfsight.com/apps/weather?installationWidgetPid=62b8e7b0-750a-48cf-8d21-dceaadcbf04b

export function stylingWeatherWidget() {
	document.addEventListener('DOMContentLoaded', () => {
		const weatherWidget = document.querySelector('.elfsight-app-62b8e7b0-750a-48cf-8d21-dceaadcbf04b');
		if (!weatherWidget) return;

		const observer = new MutationObserver((mutationsList, observerInstance) => {
			const hideWidgetLink = weatherWidget.querySelector('a[rel="noreferrer"]');

			if (hideWidgetLink) {
				hideWidgetLink.style.display = 'none';
				observerInstance.disconnect();
			}
		});

		observer.observe(weatherWidget, { childList: true, subtree: true });
	});

	window.addEventListener('load', () => {
		const locationName = document.querySelector('.hsazHl');
		locationName.textContent = 'Большие горки';
	});
}