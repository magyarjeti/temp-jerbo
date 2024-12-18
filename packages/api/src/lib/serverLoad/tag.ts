import { error, type ServerLoadEvent } from '@sveltejs/kit';
import { type SDK } from '../sdk/v1';

export const loadTag = async (
	event: ServerLoadEvent<{ slug: string }>,
	sdk: SDK,
	buckets: string[],
) => {
	const tag = await sdk.tag.getTag({
		buckets,
		slug: event.params.slug,
	});
	if (!tag) {
		error(404, `tag '${event.params.slug}' not found`);
	}
	let cursor = event.url.searchParams.get('cursor');
	const contents = await sdk.content.getContents({
		buckets,
		tags: [event.params.slug],
		after: cursor,
	});
	event.setHeaders({
		'cache-control': 'private, max-age=60',
	});
	return { taxonomy: tag, contents };
};
