import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
	entry: ['src/lib/themeSwitcher/index.ts'],
	splitting: false,
	sourcemap: true,
	clean: true,
	outDir: 'dist',
	format: 'esm',
	target: 'es2016',
	shims: true,
	noExternal: ['js-cookie'],
	dts: true,
	minify: options.watch ? false : 'terser',
}));
