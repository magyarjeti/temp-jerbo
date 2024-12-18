import type { PageServerLoad } from './$types';
import { loadPage } from '@packages/api/serverLoad/page';
import { initSDK } from '@packages/api/sdk/v1';

export const load: PageServerLoad = async (event) => {
	const { config } = await event.parent();
	return loadPage(event, initSDK({ event }), config.buckets);
};
