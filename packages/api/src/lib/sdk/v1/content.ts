import { error } from '@sveltejs/kit';
import { FETCH_CONTENT } from '../../gql/queries/fetch-content';
import { FetchContentQuerySchema } from './schema';
import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import type { Client } from '@urql/svelte';

type Params = {
	slug: string;
	year: string | number;
	month: string | number;
	day: string | number;
	buckets: string | string[];
};

function formatDate(year: string | number, month: string | number, day: string | number) {
	return `${year}-${month}-${day}`;
}

export const getContent =
	(client: Client) =>
	async ({ buckets, slug, year, month, day }: Params) => {
		try {
			const res = await client.query(FETCH_CONTENT, {
				slug,
				date: formatDate(year, month, day),
				buckets,
			});
			if (res.error) {
				// TODO: gql errors
				console.error('An error occured while executing GraphQL query:');
				error(500, res.error.message);
			}
			return Parse(Type.Optional(FetchContentQuerySchema), res.data);
		} catch (err) {
			// TODO: network errors
			console.error(err);
		}
	};
