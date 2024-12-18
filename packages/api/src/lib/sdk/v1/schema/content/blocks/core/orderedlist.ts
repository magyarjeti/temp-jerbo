import { NullishUnion } from '@packages/typebox-utils';
import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TCoreOrderedlistBlockSchema = typeof CoreOrderedlistBlockSchema;
export type CoreOrderedlistBlock = StaticDecode<TCoreOrderedlistBlockSchema>;
export const CoreOrderedlistBlockSchema = Type.Object({
	type: Type.Literal('core/orderedlist'),
	params: NullishUnion(
		Type.Object({
			class: NullishUnion(Type.String()),
		}),
	),
	content: NullishUnion(Type.String()),
});
