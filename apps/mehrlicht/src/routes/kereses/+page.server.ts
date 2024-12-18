import { loadSearch } from '@packages/api/serverLoad/search';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';
import { BUCKETS } from '$lib/constants';

export const load: PageServerLoad = async (event) => {
	return loadSearch(event, initSDK({ event }), BUCKETS);
};
