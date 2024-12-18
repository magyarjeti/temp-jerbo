import type { Body } from '../sdk/v1/schema';
import { Parse } from '@packages/typebox-utils';
import { ImageBlockSchema } from '../sdk/v1/schema/content/blocks/image';
import type { SDK } from '../sdk/v1';

export type ProcessedBlocks = Awaited<ReturnType<typeof processBlocks>>;
export default async function processBlocks(sdk: SDK, blocks?: Body | null) {
	const processedBlocks: Body = [];
	if (!blocks) {
		return processedBlocks;
	}
	for (const block of blocks) {
		switch (block.type) {
			case 'image': {
				const parsedBlock = Parse(ImageBlockSchema, block);
				if (!parsedBlock.params?.id) {
					processedBlocks.push(block);
					break;
				}
				const mediaItem = await sdk.mediaItem.getMediaItem({ id: parsedBlock.params.id });
				parsedBlock.mediaItem = mediaItem;
				processedBlocks.push(parsedBlock);
				break;
			}
			default:
				processedBlocks.push(block);
				break;
		}
	}
	return processedBlocks;
}
