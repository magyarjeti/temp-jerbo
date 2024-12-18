import { error } from '@sveltejs/kit';
import { FETCH_CATEGORY } from '../../gql/queries/fetch-category';
import { FetchCategoryQuerySchema } from './schema';
import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import type { Client } from '@urql/svelte';

type Params = {
	slug?: string;
	buckets?: string[];
};

export const getCategory =
	(client: Client) =>
	async ({ slug, buckets }: Params) => {
		try {
			const res = await client.query(FETCH_CATEGORY, {
				slug,
				buckets,
			});
			if (res.error) {
				// TODO: graphql error
				throw error(500, res.error.message);
			}
			return Parse(Type.Optional(FetchCategoryQuerySchema), res.data);
		} catch (err) {
			// TODO: error handling
			console.error(err);
		}
	};
