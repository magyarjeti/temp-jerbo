import type { SiteConfig } from '$lib/types';

const siteConfig: SiteConfig = {
	displayName: 'Amnesty International',
	buckets: ['amnesty'],
	featuredImage: 'https://assets.4cdn.hu/kraken/7gNAaMbzJ89LIi5Us-lg.gif',
	footerNavigation: [
		{ href: '/rolunk', text: 'Rólunk' },
		{ href: 'https://www.amnesty.hu/podcast/', text: 'Hallgass minket' },
		{ href: 'https://www.amnesty.hu/hirlevel/', text: 'Hírlevél' },
		{ href: 'https://www.amnesty.hu/tamogasd-a-munkankat/', text: 'Támogatás' },
		{ href: 'https://www.amnesty.hu/tamogasd-a-munkankat/1szazalek/', text: 'Adó 1%' },
	],
	socialLinks: {
		facebook: 'https://www.facebook.com/amnestymagyarorszag/',
		instagram: 'https://www.instagram.com/amnesty_hungary/',
	},
};

export default siteConfig;
