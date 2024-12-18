import { error, type ServerLoadEvent } from '@sveltejs/kit';
import processBlocks from '../utils/processBlocks';
import { type SDK } from '../sdk/v1';

export const loadPage = async (
	event: ServerLoadEvent<{ path: string }>,
	sdk: SDK,
	buckets: string[],
) => {
	const unslashedPath = event.params.path.replace(/\/$/, '');
	const segments = unslashedPath.split('/').filter((val) => !!val);
	const slug = segments.pop();
	if (!slug) {
		error(404);
	}
	const content = await sdk.content.getContent({
		buckets,
		slug: slug,
		year: '1970',
		month: '1',
		day: '1',
	});
	if (!content) {
		error(404);
	}
	const blocks = await processBlocks(sdk, content.body);
	event.setHeaders({
		'cache-control': 'private, max-age=60',
	});
	return {
		content,
		blocks,
	};
};
