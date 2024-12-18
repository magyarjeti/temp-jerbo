export default function isLocalUrl(href?: string | null, origin?: string) {
	if (!href) {
		return false;
	}
	if (href.startsWith('/')) {
		return true;
	}
	if (!origin) {
		return false;
	}
	if (href.startsWith(origin)) {
		return true;
	}
	return false;
}
