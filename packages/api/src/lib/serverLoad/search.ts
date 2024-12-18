import type { ServerLoadEvent } from '@sveltejs/kit';
import { type SDK } from '../sdk/v1';
import type { SearchQuery } from '../sdk/v1/schema';

export const loadSearch = async (event: ServerLoadEvent, sdk: SDK, buckets: string[]) => {
	let contents: SearchQuery | undefined;
	let searchQuery = '';
	if (event.url.searchParams.has('search')) {
		searchQuery = event.url.searchParams.get('search')!;
		contents = await sdk.search.search({
			buckets: buckets,
			query: searchQuery,
		});
	}
	return { contents, search: searchQuery };
};
