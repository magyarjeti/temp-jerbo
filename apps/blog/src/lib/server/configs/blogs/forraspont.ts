import type { SiteConfig } from '$lib/types';

const siteConfig: SiteConfig = {
	displayName: 'Forrás.',
	buckets: ['osaarchivum'],
	navigation: [{ text: 'Rólunk', href: '/rolunk' }],
	featuredImage: 'https://assets.4cdn.hu/kraken/86ZSjsNwFZcQNE6Ss-lg.png',
	footerNavigation: [{ text: 'Tudj meg többet rólunk', href: '/rolunk' }],
	socialLinks: {
		facebook: 'https://www.facebook.com/OSAarchivum/',
		youtube: 'https://www.youtube.com/user/OSAArchivum/playlists',
	},
};

export default siteConfig;
