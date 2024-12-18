import { loadTag } from '@packages/api/serverLoad/tag';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';

export const load: PageServerLoad = async (event) => {
	const { config } = await event.parent();
	return loadTag(event, initSDK({ event }), config.buckets);
};
