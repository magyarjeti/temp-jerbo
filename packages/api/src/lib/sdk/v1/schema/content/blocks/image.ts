import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';
import { MediaItemSchema } from '../../media/mediaItem';

const showAuthorSchema = Type.Transform(Type.String())
	.Decode((val) => {
		if (val === 'true') {
			return true;
		}
		return false;
	})
	.Encode((val) => {
		if (val === true) {
			return 'true';
		}
		return 'false';
	});

export type TImageBlockSchema = typeof ImageBlockSchema;
export type ImageBlock = StaticDecode<TImageBlockSchema>;
export const ImageBlockSchema = Type.Object({
	type: Type.Literal('image'),
	params: NullishUnion(
		Type.Object({
			alt: NullishUnion(Type.String()),
			id: NullishUnion(Type.String()),
			showauthor: NullishUnion(showAuthorSchema),
			src: NullishUnion(Type.String()),
		}),
	),
	content: NullishUnion(Type.String()),
	mediaItem: NullishUnion(MediaItemSchema),
});
