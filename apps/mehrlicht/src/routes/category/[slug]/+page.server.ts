import { loadCategory } from '@packages/api/serverLoad/category';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';
import { BUCKETS } from '$lib/constants';

export const load: PageServerLoad = async (event) => {
	return loadCategory(event, initSDK({ event }), BUCKETS);
};
