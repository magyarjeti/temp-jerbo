import { error } from '@sveltejs/kit';
import { FETCH_MEDIA_ITEM } from '../../gql/queries/fetch-media-item';
import type { Client } from '@urql/svelte';
import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import { FetchMediaItemSchema } from './schema';

type Params = {
	id: string;
};

export const getMediaItem =
	(client: Client) =>
	async ({ id }: Params) => {
		try {
			const res = await client.query(FETCH_MEDIA_ITEM, {
				id,
			});
			if (res.error) {
				// TODO: gql errors
				console.error('An error occured while executing GraphQL query:');
				error(500, res.error.message);
			}

			return Parse(Type.Optional(FetchMediaItemSchema), res.data);
		} catch (err) {
			// TODO: network error
			console.error(err);
		}
	};
