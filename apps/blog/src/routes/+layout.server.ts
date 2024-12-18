import type { LayoutServerLoad } from './$types';
import getBlogFromUrl from '$lib/utils/getBlogFromUrl';
import { getConfig } from '$lib/server/configs';
import { PUBLIC_JERBO_SITE_URL } from '$env/static/public';
import type { Theme } from '@packages/ui/themeSwitcher';

function getBlogSiteUrl(host: string, blog: string) {
	const url = new URL(host);
	if (url.hostname.startsWith(blog)) {
		return url.toString();
	}
	url.hostname = `${blog}.${url.hostname}`;
	return url.origin;
}

export const load: LayoutServerLoad = async ({ url, cookies }) => {
	const blog = getBlogFromUrl(url);
	const config = await getConfig(blog);
	const THEME_COOKIE_NAME = `jerbo-${blog}-theme`;

	return {
		blog,
		config,
		BLOG_SITE_URL: getBlogSiteUrl(PUBLIC_JERBO_SITE_URL, blog),
		theme: (cookies.get(THEME_COOKIE_NAME) || 'system') as Theme,
	};
};
