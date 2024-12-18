import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

// TODO: schema for each block type?
export type TBlockSchema = typeof BlockSchema;
export type Block = StaticDecode<TBlockSchema>;
export const BlockSchema = Type.Object({
	type: Type.String(),
	content: NullishUnion(Type.String()),
	params: NullishUnion(Type.Record(Type.String(), Type.Unknown())),
});

export type TBodySchema = typeof BodySchema;
export type Body = StaticDecode<TBodySchema>;
export const BodySchema = Type.Transform(Type.Array(Type.Array(BlockSchema)))
	.Decode((val) => {
		const res = val.flat().filter((block) => {
			return (
				block.type !== 'html' ||
				(block.type === 'html' && block.content && block.content?.trim() !== '')
			);
		});
		return res;
	})
	.Encode((val) => {
		return [[...val]];
	});
