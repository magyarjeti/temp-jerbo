import { initSDK } from '@packages/api/sdk/v1';
import type { PageServerLoad } from './$types';
import { loadArticle } from '@packages/api/serverLoad/article';

export const load: PageServerLoad = async (event) => {
	const { config } = await event.parent();
	const loaded = await loadArticle(event, initSDK({ event }), config.buckets);
	if (loaded.jumbotron) {
		return {
			...loaded,
			disableHeaderImg: true,
		};
	}
	return loaded;
};