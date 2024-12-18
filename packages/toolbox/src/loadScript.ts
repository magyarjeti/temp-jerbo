export const loadScript = (url: string): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		const exists = document.head.querySelector(`script[src="${url}]"`);
		if (exists) {
			return resolve(true);
		}
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = url;
		script.onload = () => resolve(true);
		script.onerror = () => reject(false);
		document.getElementsByTagName('head')[0]?.appendChild(script);
	});
};
