import { error, type ServerLoadEvent } from '@sveltejs/kit';
import { type SDK } from '../sdk/v1';

export const loadAuthor = async (
	event: ServerLoadEvent<{ slug: string }>,
	sdk: SDK,
	buckets: string[],
) => {
	const author = await sdk.author.getAuthor({
		buckets,
		slug: event.params.slug,
	});
	if (!author) {
		error(404, `author '${event.params.slug}' not found`);
	}
	const contents = await sdk.content.getContents({
		buckets,
		authors: [event.params.slug],
	});
	event.setHeaders({
		'cache-control': 'private, max-age=60',
	});
	return { taxonomy: author, contents };
};
