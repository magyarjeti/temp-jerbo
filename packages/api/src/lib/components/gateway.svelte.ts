import { getContext, setContext } from 'svelte';

const gatewayContextKey = Symbol('gateway');

type GatewayContext = { buckets?: string[] };

export const setGatewayContext = (options: GatewayContext) => {
	const gatewayContext = $state(options);
	setContext(gatewayContextKey, gatewayContext);
	return gatewayContext;
};

export const getGatewayContext = () => {
	const gatewayContext = getContext<GatewayContext>(gatewayContextKey);
	if (!gatewayContext) {
		throw new Error('Gateway context not set.');
	}
	return gatewayContext;
};
