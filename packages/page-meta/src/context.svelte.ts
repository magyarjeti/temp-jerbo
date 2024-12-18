import { getContext, setContext } from 'svelte';

export type PageMetaProps = {
	title: string;
	description: string;
	siteName: string;
	siteUrl: string;
	canonicalUrl: string;
	image: string;
	nsfw: boolean;
	pr: boolean;
	categories: string[];
	keywords: string[];
	authors: string[];
	publishedAt: string;
	pageType: 'mainpage' | 'article' | 'other';
};

export const pageMetaDefaults: PageMetaProps = {
	title: '',
	description: '',
	siteName: '',
	siteUrl: '',
	canonicalUrl: '',
	image: '',
	nsfw: false,
	pr: false,
	categories: [],
	keywords: [],
	authors: [],
	publishedAt: '',
	pageType: 'other',
};

const key = Symbol('pageMeta');

export function setPageMetaContext(pageMeta?: Partial<PageMetaProps>) {
	let pageMetaContext = $state({ ...pageMetaDefaults, ...pageMeta });
	setContext(key, pageMetaContext);
	return pageMetaContext;
}

export function getPageMetaContext() {
	const context = getContext<PageMetaProps>(key);
	if (!context) {
		throw new Error('PageMeta context must be set. Please check readme file.');
	}
	return context;
}
