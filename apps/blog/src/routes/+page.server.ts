import { initSDK } from '@packages/api/sdk/v1';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { config } = await event.parent();
	const sdk = initSDK({ event });
	const contents = await sdk.content.getContents({ buckets: config.buckets });
	event.setHeaders({
		'cache-control': 'private, max-age=60',
	});
	return {
		contents,
	};
};
