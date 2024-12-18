import { NullishUnion } from '@packages/typebox-utils';
import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TCoreBlockquoteBlockSchema = typeof CoreBlockquoteBlockSchema;
export type CoreBlockquoteBlock = StaticDecode<TCoreBlockquoteBlockSchema>;
export const CoreBlockquoteBlockSchema = Type.Object({
	type: Type.Literal('core/blockquote'),
	params: NullishUnion(
		Type.Object({
			class: NullishUnion(Type.String()),
		}),
	),
	content: NullishUnion(Type.String()),
});
