import type { SiteConfig } from '$lib/types';

const siteConfig: SiteConfig = {
	displayName: 'Keresztény Kultúra',
	buckets: ['kerkult'],
	featuredImage: 'https://assets.4cdn.hu/kraken/7tENTZxwsSycIi4ts-lg.png',
	footerNavigation: [{ text: 'Rólunk', href: 'https://kerkult.444.hu/rolunk' }],
	socialLinks: {
		facebook: 'https://www.facebook.com/kerkultblog/',
	},
};

export default siteConfig;
