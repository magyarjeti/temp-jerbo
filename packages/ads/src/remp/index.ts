import { loadScript } from '@packages/toolbox/loadScript';

export interface Config {
	url: string;
	token: string;
	targetSite: string;
	scriptUrl: string;
}
function mock(toolFunctions: [string, any[]], fn: string, ...args: any[]) {
	return function () {
		toolFunctions.push([fn, args]);
	};
}

export let rempLoaded: boolean = false;
export async function initRemp(scriptUrl: string) {
	if (rempLoaded) {
		return new Promise((resolve) => resolve(true));
	}
	window.remplib = window.remplib || {};
	const toolMockFunctions = {
		campaign: 'init',
		tracker: 'init trackEvent trackPageview trackCommerce',
		iota: 'init',
	};

	Object.entries(toolMockFunctions).forEach(function ([toolName, mockFunctions]) {
		const _toolName = toolName as keyof typeof toolMockFunctions;
		if (!window.remplib[_toolName]) {
			const splitMockFunctions = mockFunctions.split(' ');
			window.remplib[_toolName] = { _: [] };

			for (const functionName of splitMockFunctions) {
				window.remplib[_toolName][functionName] = mock(window.remplib[_toolName]._, functionName);
			}
		}
	});

	await loadScript(scriptUrl);
	return (rempLoaded = true);
}

const rempConfigDefaults = {
	campaign: {
		bannerUrlParams: {},
		variables: {},
	},
};

export const initCampaign = async (config: Config) => {
	initRemp(config.scriptUrl).then(() => {
		window.remplib.campaign.init({
			...rempConfigDefaults,
			campaign: {
				...rempConfigDefaults.campaign,
				url: config.url,
				targetSite: config.targetSite,
			},
			token: config.token,
		});
	});
};
