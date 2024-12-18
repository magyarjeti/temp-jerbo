import { error } from '@sveltejs/kit';
import { SearchQuerySchema } from './schema';
import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import type { Client } from '@urql/svelte';
import { SEARCH } from '../../gql/queries/search';
import { QuerySearchFromBucketColumn, SqlOperator } from '../../gql/__generated__/graphql';

type Params = {
	query?: string;
	buckets?: string[];
};

// function formatDateQuery(from: string, to?: string) {
// 	const query = to
// 		? {
// 				column: QueryContentsByDateColumn.PublishedAt,
// 				operator: SqlOperator.Between,
// 				value: [new Date(from).toISOString(), new Date(to).toISOString()],
// 			}
// 		: {
// 				column: QueryContentsByDateColumn.PublishedAt,
// 				operator: SqlOperator.Eq,
// 				value: new Date(from).toISOString(),
// 			};

// 	return query;
// }

export const search =
	(client: Client) =>
	async ({ query, buckets }: Params = {}) => {
		try {
			const res = await client.query(SEARCH, {
				query: query ?? '',
				buckets: buckets
					? {
							column: QuerySearchFromBucketColumn.Slug,
							operator: SqlOperator.In,
							value: buckets,
						}
					: null,
			});
			// TODO: gql errors
			if (res.error) {
				// const gqlErrors: string[] = [];
				// if (res.error.graphQLErrors) {
				//   res.error.graphQLErrors.forEach((err) => {
				//     console.error(err.extensions.exception?.debugMessage);
				//   });
				// }
				error(500, res.error.message);
			}
			return Parse(Type.Optional(SearchQuerySchema), res.data);
		} catch (err) {
			// TODO: network error
			console.error(err);
		}
	};
