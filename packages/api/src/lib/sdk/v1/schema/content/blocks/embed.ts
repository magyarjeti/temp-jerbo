import { NullishUnion } from '@packages/typebox-utils';
import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TEmbedBlockSchema = typeof EmbedBlockSchema;
export type EmbedBlock = StaticDecode<TEmbedBlockSchema>;
export const EmbedBlockSchema = Type.Object({
	type: Type.Literal('embed'),
	params: NullishUnion(
		Type.Object({
			src: NullishUnion(Type.String()),
		}),
	),
	content: NullishUnion(Type.String()),
});
