import { Client, fetchExchange } from '@urql/svelte';

type Options = {
	url: string;
	fetch?: typeof fetch;
};

export const initClient = (options: Options) => {
	return new Client({
		url: options.url,
		exchanges: [fetchExchange],
		fetchOptions: {
			credentials: 'include',
		},
		fetch: options.fetch || fetch,
		// We rely on redis for response caching
		requestPolicy: 'network-only',
	});
};
