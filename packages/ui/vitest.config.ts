import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => ({
	plugins: [svelte()],
	resolve: {
		conditions: mode === 'test' ? ['browser'] : [],
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.ts'],
		coverage: {
			provider: 'istanbul', // or 'v8'
			reporter: ['text', 'json', 'html'],
			exclude: ['src/mock/msw/browser.ts', '**/__generated__', 'src/gql/queries'],
		},
	},
}));
