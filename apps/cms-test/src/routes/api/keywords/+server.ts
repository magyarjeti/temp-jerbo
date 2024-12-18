import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { text } = await request.json();
	try {
		const res = await fetch('https://optima-ai-stack.jeti.dev/api/get-keywords', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				text,
				responseType: 'json',
			}),
		});
		if (!res.ok) {
			return error(res.status, res.statusText);
		}

		const resJson = await res.json();
		return json(resJson);
	} catch (err) {
		console.error(err);
		return error(404);
	}
};
