// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@packages/ui/tailwind/config';
import material3 from '@packages/ui/tailwind/plugins/material3';
import materialOptions from './src/lib/materialOptions';

const config: Pick<Config, 'content' | 'presets' | 'plugins' | 'safelist' | 'darkMode'> = {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	plugins: [material3(materialOptions)],
	presets: [sharedConfig],
	safelist: ['m3-theme-mehrlicht', 'm3-theme-mehrlicht-light', 'm3-theme-mehrlicht-dark'],
};

export default config;
