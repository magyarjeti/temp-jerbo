import { getAuthor } from './author';
import { getCategory } from './category';
import { getContent } from './content';
import { getContents } from './contents';
import { getMediaItem } from './mediaItem';
import { search } from './search';
import { initClient } from '../../gql';
import type { LoadEvent, ServerLoadEvent } from '@sveltejs/kit';
import { getTag } from './tag';

type Options = {
	gqlUrl?: string;
	event?: LoadEvent | ServerLoadEvent;
};

export type SDK = ReturnType<typeof initSDK>;
export const initSDK = (options?: Options) => {
	const client = initClient({ fetch: options?.event?.fetch, url: options?.gqlUrl || '/graphql' });
	const sdk = {
		author: {
			getAuthor: getAuthor(client),
		},
		category: {
			getCategory: getCategory(client),
		},
		tag: {
			getTag: getTag(client),
		},
		content: {
			getContent: getContent(client),
			getContents: getContents(client),
		},
		mediaItem: {
			getMediaItem: getMediaItem(client),
		},
		search: {
			search: search(client),
		},
	};
	return sdk;
};
