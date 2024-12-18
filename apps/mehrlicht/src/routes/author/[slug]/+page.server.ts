import { loadAuthor } from '@packages/api/serverLoad/author';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';
import { BUCKETS } from '$lib/constants';

export const load: PageServerLoad = async (event) => {
	return loadAuthor(event, initSDK({ event }), BUCKETS);
};
