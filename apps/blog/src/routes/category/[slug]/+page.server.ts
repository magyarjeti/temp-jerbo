import { loadCategory } from '@packages/api/serverLoad/category';
import type { PageServerLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';

export const load: PageServerLoad = async (event) => {
	const { config } = await event.parent();
	return loadCategory(event, initSDK({ event }), config.buckets);
};
