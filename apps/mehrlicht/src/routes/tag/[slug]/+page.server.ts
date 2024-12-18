import { loadTag } from '@packages/api/serverLoad/tag';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';
import { BUCKETS } from '$lib/constants';

export const load: PageServerLoad = async (event) => {
	return loadTag(event, initSDK({ event }), BUCKETS);
};
