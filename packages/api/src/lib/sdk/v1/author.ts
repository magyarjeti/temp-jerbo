import { error } from '@sveltejs/kit';
import { FetchAuthorQuerySchema } from './schema';
import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import type { Client } from '@urql/svelte';
import { FETCH_AUTHOR } from '../../gql/queries/fetch-author';

type Params = {
	slug?: string;
	buckets?: string[];
};

export const getAuthor =
	(client: Client) =>
	async ({ slug, buckets }: Params) => {
		try {
			const res = await client.query(FETCH_AUTHOR, {
				slug,
				buckets,
			});
			if (res.error) {
				// TODO: graphql error
				throw error(500, res.error.message);
			}
			return Parse(Type.Optional(FetchAuthorQuerySchema), res.data);
		} catch (err) {
			// TODO: error handling
			console.error(err);
		}
	};
