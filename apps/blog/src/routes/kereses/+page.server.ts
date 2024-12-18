import { loadSearch } from '@packages/api/serverLoad/search';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';

export const load: PageServerLoad = async (event) => {
	const { config } = await event.parent();
	return loadSearch(event, initSDK({ event }), config.buckets);
};
