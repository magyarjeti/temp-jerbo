import { error } from '@sveltejs/kit';
import { FETCH_MAINPAGE } from '../../gql/queries/fetch-mainpage';
import { QueryMainpageFromBlogColumn } from '../../gql/__generated__/graphql';
import type { Client } from '@urql/svelte';

type Params = {
	slug: string;
	blog: string | string[];
};

export async function getMainpage(client: Client, { slug, blog }: Params) {
	try {
		const res = await client.query(FETCH_MAINPAGE, {
			slug,
			blog: {
				column: QueryMainpageFromBlogColumn.Slug,
				value: blog,
			},
		});
		if (res.error) {
			// TODO: gql error
			console.error('An error occured while executing GraphQL query:');
			error(500, res.error.message);
		}
		// TODO: output parsing
		return res.data;
	} catch (err) {
		// TODO: network error
	}
}
