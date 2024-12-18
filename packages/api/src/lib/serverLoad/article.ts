import { error, type ServerLoadEvent } from '@sveltejs/kit';
import processBlocks from '../utils/processBlocks';
import { type SDK } from '../sdk/v1';
import type { MediaItem } from '../sdk/v1/schema';

type Jumbotron = { image?: MediaItem; youtube?: string; html?: string };

export const loadArticle = async (
	event: ServerLoadEvent<{ slug: string; year: string; month: string; day: string }>,
	sdk: SDK,
	buckets: string[],
) => {
	const content = await sdk.content.getContent({
		buckets,
		slug: event.params.slug,
		year: event.params.year,
		month: event.params.month,
		day: event.params.day,
	});
	if (!content) {
		error(404);
	}
	let jumbotron: Jumbotron | undefined;
	if (content.options.jumbotron && typeof content.options.jumbotron === 'string') {
		jumbotron = {};
		if (
			content.options.jumbotron.match(
				/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
			)
		) {
			jumbotron.image = await sdk.mediaItem.getMediaItem({ id: content.options.jumbotron });
		} else if (content.options.jumbotron.match(/https?:\/\/(www.)?youtube.com\/embed\//im)) {
			const url =
				'https://youtube.com/watch?v=' +
				/"https?:\/\/(www.)?youtube.com\/embed\/(?<id>[^"]+)"/.exec(content.options.jumbotron)
					?.groups?.['id'];
			jumbotron.youtube = url;
		} else {
			jumbotron.html = content.options.jumbotron;
		}
	}
	const blocks = await processBlocks(sdk, content.body);
	event.setHeaders({
		'cache-control': 'private, max-age=60',
	});
	return {
		content,
		blocks,
		jumbotron,
	};
};
