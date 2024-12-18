import Cookies from 'js-cookie';
export type Theme = 'light' | 'dark' | 'system';

declare global {
	interface Window {
		jerbo: {
			themeName?: string;
			themeCookieName?: string;
			init: (themeName: string) => void;
			setTheme: (theme: Theme) => void;
			getTheme: () => Theme;
		};
	}
}

window.jerbo = {
	init: (themeName) => {
		window.jerbo.themeName = themeName;
		window.jerbo.themeCookieName = `jerbo-${themeName}-theme`;
		document.addEventListener('DOMContentLoaded', () => {
			window.jerbo.setTheme(window.jerbo.getTheme());
		});
	},
	setTheme: (theme) => {
		if (!window.jerbo.themeName || !window.jerbo.themeCookieName) {
			throw new Error('You forgot to initialize the jerbo theme switcher.');
		}
		const themeClasses = {
			system: `m3-theme-${window.jerbo.themeName}`,
			light: `m3-theme-${window.jerbo.themeName}-light`,
			dark: `m3-theme-${window.jerbo.themeName}-dark`,
		};
		document.body.classList.remove(...Object.values(themeClasses));
		document.body.classList.add(themeClasses[theme]);
		Cookies.set(window.jerbo.themeCookieName, theme, {
			path: '/',
			secure: true,
			sameSite: 'lax',
		});
	},
	getTheme: () => {
		if (!window.jerbo.themeCookieName) {
			throw new Error('You forgot to initialize the jerbo theme switcher.');
		}
		return (Cookies.get(window.jerbo.themeCookieName) as Theme | undefined) || 'system';
	},
};
