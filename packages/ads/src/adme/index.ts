import { loadScript } from '@packages/toolbox/loadScript';

export type AdData = {
	url: string;
	uid: string;
	pageType: string;
	category: string;
	keywords: Array<string>;
	adult: '1' | '0';
	gSens: '1' | '0';
	noads: '1' | '0';
	locked: '1' | '0';
	loggedin: '1' | '0';
	subscribed: '1' | '0';
	pr: '1' | '0';
	extradata: Array<Record<string, any>>;
	'user-id'?: string;
};

const adData: AdData = {
	url: '', // this.headData.canonicalUrl ?? ,
	uid: '', //this.headData.id ?? '',
	pageType: 'other', // this.headData.adType ?? 'other',
	category: '', //this.headData.categories?.split(',')[0] ?? [],
	keywords: [], // this.headData.keywords?.split(',') ?? [],
	adult: '0', //this.headData.nsfg ?? '0',
	gSens: '0',
	locked: '0', // this.headData.locked ?? '0',
	loggedin: '0', //this.session.user.data?.me.user?.id ? '1' : '0',
	subscribed: '0', // this.session.user.data?.me.subscribed ? '1' : '0',
	pr: '0', // this.headData.pr ?? '0',
	extradata: [],
	noads: '0', // this.headData.noads ?? '0',
	'user-id': '', // this.session.user.data?.me.user?.id ? `${this.session.user.data?.me.user?.id}` : '',
};

export type Config = {
	data?: Partial<AdData>;
	scriptUrl: string;
};

export function initAdme(data: Config) {
	let _scriptUrl = data.scriptUrl;
	if (new URLSearchParams(window.location.search).has('admeDebug')) {
		_scriptUrl = _scriptUrl.replace(/\.min\.js$/, `.js?v=${Date.now()}`);
	}
	loadScript(_scriptUrl).then(() => {
		const _data = { ...adData, ...data.data };
		delete _data['user-id'];

		window.adData = _data;
	});
}
