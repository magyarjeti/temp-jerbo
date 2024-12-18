import { Client, fetchExchange, cacheExchange } from '@urql/svelte';
import 'dotenv/config';

let client: Client;

export const getClient = () => {
	if (client) {
		return client;
	}
	client = new Client({
		url: process.env.PUBLIC_JERBO_ADMIN_GATEWAY_URL || '',
		exchanges: [cacheExchange, fetchExchange],
		fetchOptions: {
			credentials: 'include',
		},
		// fetchOptions: () => {
		// 	return {};
		// },
		// TODO: figure out right caching
		requestPolicy: 'cache-and-network',
	});

	return client;
};
