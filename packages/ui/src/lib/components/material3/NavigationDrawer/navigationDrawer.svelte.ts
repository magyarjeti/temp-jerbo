import { getContext, setContext } from 'svelte';

const key = Symbol('navigationDrawer');

export function setNavigationDrawerContext() {
	const state = $state({ showNavigationDrawer: false });
	return setContext(key, state);
}

export function getNavigationDrawerContext() {
	const ctx = getContext<{ showNavigationDrawer: boolean }>(key);
	if (!ctx) {
		throw new Error('Navigation drawer context not set.');
	}
	return ctx;
}
