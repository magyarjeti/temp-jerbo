import type { Theme } from '../themeSwitcher';
import { getContext, setContext } from 'svelte';

const createThemeStore = (initTheme: Theme) => {
	let currentTheme = $state(initTheme);

	const setTheme = (theme: Theme) => {
		window.jerbo.setTheme(theme);
		currentTheme = theme;
		return theme;
	};

	const getTheme = () => {
		return currentTheme;
	};

	const getPreferredTheme = () => {
		if (typeof window === 'undefined') {
			return currentTheme;
		}
		if (currentTheme === 'system') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		return currentTheme;
	};

	return {
		getTheme,
		setTheme,
		getPreferredTheme,
	};
};

const themeKey = Symbol('theme');
export const setThemeContext = (initTheme: Theme = 'system') => {
	return setContext(themeKey, createThemeStore(initTheme));
};

export const getThemeContext = () => {
	const context = getContext<ReturnType<typeof createThemeStore>>(themeKey);
	if (!context) {
		// throw new Error('Theme context has not been set.');
	}
	return context;
};
