import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import Paywall from '../../widgets/Paywall.svelte';
import PaywallUnlocked from '../../widgets/PaywallUnlocked.svelte';
import Subhead from '../../widgets/Subhead.svelte';

const components = {
	Paywall,
	PaywallUnlocked,
	Subhead,
};

const widgetsStore = writable({ ...components });

const widgetsContextKey = Symbol('widgets');

export const setWidgetsContext = (overrides: Partial<typeof components>) => {
	const overridden = { ...components, ...overrides };
	widgetsStore.set(overridden);
	return setContext(widgetsContextKey, widgetsStore);
};

export const getWidgetsContext = () => {
	return getContext<typeof widgetsStore>(widgetsContextKey) || widgetsStore;
};
