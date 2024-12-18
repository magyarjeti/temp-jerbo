import elevation from './elevation';
import shape from './shape';
import typo from './typo';
import colors from './colors';
import plugin from 'tailwindcss/plugin';
import type { M3Module, PluginOptions } from './types';
import { deepMerge } from '@packages/toolbox/deepMerge';
import type { Config } from 'tailwindcss/types/config';
import components from './components';

export * from './types';

export default plugin.withOptions(
	(options?: PluginOptions) => {
		return function (api) {
			const modules: M3Module[] = [colors, elevation, shape, typo, components];
			for (const module of modules) {
				module(options).setCss(api);
			}
		};
	},
	(options?: PluginOptions) => {
		const config: Partial<Config> = {};
		const modules = [colors, elevation];
		for (const initModule of modules) {
			const module = initModule(options);
			if (module.config) {
				deepMerge(config, module.config());
			}
		}
		return config;
	},
);
