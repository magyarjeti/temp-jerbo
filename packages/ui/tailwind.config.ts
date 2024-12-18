// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from './src/lib/tailwind/config';
import material3 from './src/lib/tailwind/plugins/material3';

const config: Pick<Config, 'content' | 'presets' | 'plugins'> = {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	plugins: [material3],
	presets: [sharedConfig],
};

export default config;
