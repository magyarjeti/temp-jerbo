import { loadAuthor } from '@packages/api/serverLoad/author';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';

export const load: PageServerLoad = async (event) => {
	const { config } = await event.parent();
	return loadAuthor(event, initSDK({ event }), config.buckets);
};
