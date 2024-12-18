export default function isAbsoluteUrl(url?: string | null): boolean {
	if (!url) {
		return false;
	}
	const httpHttpsAbsoluteUrlPattern = /^(?:[a-z]+:)?\//i;
	return httpHttpsAbsoluteUrlPattern.test(url);
}
