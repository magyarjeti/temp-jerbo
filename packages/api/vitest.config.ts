// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			provider: 'istanbul', // or 'v8'
			reporter: ['text', 'json', 'html'],
			exclude: ['src/mock/msw/browser.ts', '**/__generated__', 'src/gql/queries'],
		},
	},
});
