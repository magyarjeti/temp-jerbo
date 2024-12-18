// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@packages/ui/tailwind/config';
import material3 from '@packages/ui/tailwind/plugins/material3';
import materialOptions from './src/lib/materialOptions';

const config: Pick<Config, 'content' | 'presets' | 'plugins' | 'safelist' | 'darkMode'> = {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	plugins: [material3(materialOptions)],
	presets: [sharedConfig],
	safelist: Array.from(
		Object.keys(materialOptions.colors?.themes || {}).reduce((safelist: Set<string>, blogTheme) => {
			safelist.add(`m3-theme-${blogTheme}`);
			safelist.add(`m3-theme-${blogTheme}-light`);
			safelist.add(`m3-theme-${blogTheme}-dark`);
			return safelist;
		}, new Set<string>()),
	),
};

export default config;
