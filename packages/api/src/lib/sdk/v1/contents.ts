import { error } from '@sveltejs/kit';
import { FETCH_CONTENTS } from '../../gql/queries/fetch-contents';
import { FetchContentsQuerySchema } from './schema';
import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import type { Client } from '@urql/svelte';
import { getFetchContentsVariables, type Params } from './utils/getFetchContentsVariables';

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

export const getContents =
	(client: Client) =>
	async (params: Params = {}) => {
		try {
			const res = await client.query(FETCH_CONTENTS, getFetchContentsVariables(params));
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
			return Parse(Type.Optional(FetchContentsQuerySchema), res.data);
		} catch (err) {
			// TODO: network error
			console.error(err);
		}
	};
