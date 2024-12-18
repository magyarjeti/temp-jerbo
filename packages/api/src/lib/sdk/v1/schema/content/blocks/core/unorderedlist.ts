import { NullishUnion } from '@packages/typebox-utils';
import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TCoreUnorderedlistBlockSchema = typeof CoreUnorderedlistBlockSchema;
export type CoreUnorderedlistBlock = StaticDecode<TCoreUnorderedlistBlockSchema>;
export const CoreUnorderedlistBlockSchema = Type.Object({
	type: Type.Literal('core/unorderedlist'),
	params: NullishUnion(
		Type.Object({
			class: NullishUnion(Type.String()),
		}),
	),
	content: NullishUnion(Type.String()),
});
