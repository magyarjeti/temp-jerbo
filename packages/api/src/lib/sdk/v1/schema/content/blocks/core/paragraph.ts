import { NullishUnion } from '@packages/typebox-utils';
import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TCoreParagraphBlockSchema = typeof CoreParagraphBlockSchema;
export type CoreParagraphBlock = StaticDecode<TCoreParagraphBlockSchema>;
export const CoreParagraphBlockSchema = Type.Object({
	type: Type.Literal('core/paragraph'),
	params: NullishUnion(
		Type.Object({
			class: NullishUnion(Type.String()),
		}),
	),
	content: NullishUnion(Type.String()),
});
