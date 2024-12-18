import type { Actions, PageServerLoad } from './$types';
import { getClient } from '$lib/urql.server';
import { GET_CONTENT } from '$lib/gql/queries/getContent';
import { CREATE_CONTENT } from '$lib/gql/queries/createContent';
import { fail, redirect } from '@sveltejs/kit';
import { GET_PRODUCTS } from '$lib/gql/queries/getProducts';
import { UPDATE_CONTENT } from '$lib/gql/queries/updateContent';

export const load: PageServerLoad = async (event) => {
	const client = getClient();
	let content = null;
	if (event.params.id !== 'new') {
		content = await client.query(GET_CONTENT, { id: event.params.id });
	}
	return { content: content?.data?.content };
};

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const title = formData.get('title');
		const body = formData.get('body');
		const id = formData.get('id') as string;
		if (!title) {
			return fail(400);
		}
		const client = getClient();
		const products = await client.query(GET_PRODUCTS, { domain: '444.hu' });
		if (!products.data?.products.data[0]) {
			return fail(400);
		}
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
			return redirect(303, `/cikkek/${res.data?.createContent?.id}`);
		}
		// TODO: error handling
		const res = await client.mutation(UPDATE_CONTENT, {
			input: {
				id,
				title: [{ key: 'main', value: title.toString() }],
				body,
			},
		});
		return { success: true };
	},
} satisfies Actions;
