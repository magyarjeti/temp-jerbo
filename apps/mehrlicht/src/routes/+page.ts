import type { PageLoad } from './$types';
import { initSDK } from '@packages/api/sdk/v1';
import { BUCKETS } from '$lib/constants';

export const load: PageLoad = async (event) => {
	const sdk = initSDK({ event });
	return { contents: sdk.content.getContents({ buckets: BUCKETS }) };
};
