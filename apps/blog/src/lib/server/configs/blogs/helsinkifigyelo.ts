import type { SiteConfig } from '$lib/types';

const siteConfig: SiteConfig = {
	displayName: 'Helsinki Figyelő',
	buckets: ['helsinkifigyelo'],
	featuredImage: 'https://assets.4cdn.hu/kraken/7hm4pOj9BNvXIi3es-lg.png',
	footerNavigation: [
		{ href: 'https://helsinkifigyelo.444.hu/rolunk', text: 'Rólunk' },
		{ href: 'https://helsinki.hu/podcast/', text: 'Podcast' },
		{ href: 'https://helsinki.hu/rolunk/hirlevel/', text: 'Hírlevél' },
		{ href: 'https://helsinki.hu/tamogass/ado-1-szazalek/', text: 'Támogatás' },
	],
	socialLinks: {
		facebook: 'https://www.facebook.com/helsinkibizottsag',
	},
};

export default siteConfig;
