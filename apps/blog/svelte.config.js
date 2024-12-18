import adapterNode from '@sveltejs/adapter-node';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		style: {
			css: {
				postcss: path.join(__dirname, 'postcss.config.cjs'),
			},
		},
	}),
	kit: {
		adapter: process.env.VERCEL === '1' ? adapterVercel() : adapterNode(),
	},
};

export default config;
