import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getClient } from '$lib/urql.server';
import { GET_PRODUCTS } from '$lib/gql/queries/getProducts';
import { CREATE_CONTENT } from '$lib/gql/queries/createContent';
import { UPDATE_CONTENT } from '$lib/gql/queries/updateContent';

export const POST: RequestHandler = async ({ request }) => {
	const { body, title, id } = await request.json();
	const client = getClient();
	const products = await client.query(GET_PRODUCTS, { domain: '444.hu' });
	if (!products.data?.products.data[0]) {
		console.error('444 product data not found.');
		return error(500);
	}
	try {
		if (id === 'new') {
			// TODO: error handling
			const res = await client.mutation(CREATE_CONTENT, {
				input: {
					title: [{ key: 'main', value: title.toString() }],
					body,
					language: 'hu',
					layout: 'default',
					product: {
						connect: products.data.products.data[0].id,
					},
				},
			});
			return json(res.data?.createContent);
		}
		// TODO: error handling
		const res = await client.mutation(UPDATE_CONTENT, {
			input: {
				id,
				title: [{ key: 'main', value: title.toString() }],
				body,
			},
		});
		return json(res.data?.updateContent);
	} catch (err) {
		console.error(err);
		return error(500);
	}
};
