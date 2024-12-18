import type { PluginAPI } from 'tailwindcss/types/config';
import type { M3Module } from './types';

const m3Module: M3Module = () => {
	return {
		setCss(api) {
			api.matchUtilities(
				{
					elevation: (value) => ({
						boxShadow: value,
					}),
				},
				{
					values: api.theme('elevation'),
				},
			);
		},
		config() {
			return {
				theme: {
					elevation: (api: PluginAPI) => ({
						1: `0px 1px 3px 1px ${api.theme('colors.shadow / 15%')}, 0px 1px 2px 0px ${api.theme(
							'colors.shadow / 30%',
						)}`,
						2: `0px 2px 6px 2px ${api.theme('colors.shadow / 15%')}, 0px 1px 2px 0px ${api.theme(
							'colors.shadow / 30%',
						)}`,
						3: `0px 1px 3px 0px ${api.theme('colors.shadow / 30%')}, 0px 4px 8px 3px ${api.theme(
							'colors.shadow / 15%',
						)}`,
					}),
				},
			};
		},
	};
};

export default m3Module;
