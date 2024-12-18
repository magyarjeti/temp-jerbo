import { NullishUnion } from '@packages/typebox-utils';
import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TCoreHeadingBlockSchema = typeof CoreHeadingBlockSchema;
export type CoreHeadingBlock = StaticDecode<TCoreHeadingBlockSchema>;
export const CoreHeadingBlockSchema = Type.Object({
	type: Type.Literal('core/heading'),
	params: NullishUnion(
		Type.Object({
			class: NullishUnion(Type.String()),
		}),
	),
	content: NullishUnion(Type.String()),
});
