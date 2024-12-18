import type { PlaywrightTestConfig } from '@playwright/test';

// TODO: different webserver config for CI
const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173,
		stderr: 'pipe',
	},
	use: {
		baseURL: 'http://localhost:4173',
	},
	reporter: 'html',
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
};

export default config;
