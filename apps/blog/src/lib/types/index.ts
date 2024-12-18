type Widget = {
	title?: string;
	type:
		| 'text' // about, 1%, contact (drogriporter with image)
		| 'embed' // facebook, x (twitter), soundcloud
		| 'cta' // (newsletter, donation - text with button) helsinki
		| 'rss'; // tasz only
};

type TextWidget = {
	type: 'text';
	body: string;
} & Widget;

type EmbedWidget = {
	type: 'embed';
	url: string;
} & Widget;

type CtaWidget = {
	type: 'cta';
	body: string;
	url: string;
} & Widget;

type RssWidget = {
	type: 'rss';
} & Widget;

type BlogWidget = TextWidget | EmbedWidget | CtaWidget | RssWidget;

type NavigationItem = {
	text: string;
	href: string;
};

type SocialLinks = {
	facebook?: string;
	twitter?: string;
	instagram?: string;
	youtube?: string;
};

export type SiteConfig = {
	displayName: string;
	buckets: string[];
	widgets?: BlogWidget[];
	logo?: string;
	featuredImage?: string;
	navigation?: NavigationItem[];
	footerText?: string;
	footerNavigation?: NavigationItem[];
	socialLinks?: SocialLinks;
	featuredNavigation?: NavigationItem[];
};
