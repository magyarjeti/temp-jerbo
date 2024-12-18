import { initSDK } from '@packages/api/sdk/v1';
import type { PageServerLoad } from './$types';
import { loadArticle } from '@packages/api/serverLoad/article';
import { BUCKETS } from '$lib/constants';

export const load: PageServerLoad = async (event) => {
	const loaded = await loadArticle(event, initSDK({ event }), BUCKETS);
	if (loaded.jumbotron) {
		return {
			...loaded,
			disableHeaderImg: true,
		};
	}
	return loaded;
};
