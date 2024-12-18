import type { Theme } from '@packages/ui/themeSwitcher';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (event) => {
	const THEME_COOKIE_NAME = `jerbo-cms-test-theme`;
	return {
		user: event.locals.user,
		theme: (event.cookies.get(THEME_COOKIE_NAME) || 'system') as Theme,
	};
};
