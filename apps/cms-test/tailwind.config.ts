// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@packages/ui/tailwind/config';
import material3 from '@packages/ui/tailwind/plugins/material3';
import materialOptions from './src/lib/materialOptions';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	plugins: [material3(materialOptions)],
	presets: [sharedConfig],
	safelist: ['m3-theme-cms-test', 'm3-theme-cms-test-light', 'm3-theme-cms-test-dark'],
	theme: {
		extend: {
			animation: {
				blink: 'blink 1060ms steps(2, start) infinite',
			},
			keyframes: {
				blink: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
		},
	},
};

export default config;
