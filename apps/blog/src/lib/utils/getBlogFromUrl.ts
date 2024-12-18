export default function (url: URL | string) {
	const _url = typeof url === 'string' ? new URL(url) : url;
	const hostname = _url.hostname;
	const parts = hostname.split('.');

	if (parts.length > 2) {
		return parts[parts.length - 3];
	} else {
		throw new Error('no subdomain found, not a blog');
	}
}
