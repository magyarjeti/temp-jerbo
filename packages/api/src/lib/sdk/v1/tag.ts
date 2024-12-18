import { error } from '@sveltejs/kit';
import { FETCH_TAG } from '../../gql/queries/fetch-tag';
import { FetchTagQuerySchema } from './schema';
import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import type { Client } from '@urql/svelte';

type Params = {
	slug?: string;
	buckets?: string[];
};

export const getTag =
	(client: Client) =>
	async ({ slug, buckets }: Params) => {
		try {
			const res = await client.query(FETCH_TAG, {
				slug,
				buckets,
			});
			if (res.error) {
				// TODO: graphql error
				throw error(500, res.error.message);
			}
			return Parse(Type.Optional(FetchTagQuerySchema), res.data);
		} catch (err) {
			// TODO: error handling
			console.error(err);
		}
	};
