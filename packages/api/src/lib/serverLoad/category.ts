import { error, type ServerLoadEvent } from '@sveltejs/kit';
import { type SDK } from '../sdk/v1';

export const loadCategory = async (
	event: ServerLoadEvent<{ slug: string }>,
	sdk: SDK,
	buckets: string[],
) => {
	const category = await sdk.category.getCategory({
		buckets,
		slug: event.params.slug,
	});
	if (!category) {
		error(404, `category '${event.params.slug}' not found`);
	}
	let cursor = event.url.searchParams.get('cursor');
	const contents = await sdk.content.getContents({
		buckets,
		categories: [event.params.slug],
		after: cursor,
	});
	event.setHeaders({
		'cache-control': 'private, max-age=60',
	});
	return { taxonomy: category, contents };
};
