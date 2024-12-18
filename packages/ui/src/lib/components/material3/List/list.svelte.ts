import { getContext, setContext } from 'svelte';

const key = Symbol('list');

type List = { counter: number; open: number | null };

export function setListContext() {
	const state = $state<List>({ counter: 0, open: null });
	return setContext(key, state);
}

export function getListContext() {
	return getContext<List>(key);
}
