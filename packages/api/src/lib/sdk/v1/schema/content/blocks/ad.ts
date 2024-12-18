import { NullishUnion } from '@packages/typebox-utils';
import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TAdBlockSchema = typeof AdBlockSchema;
export type AdBlock = StaticDecode<TAdBlockSchema>;
export const AdBlockSchema = Type.Object({
	type: Type.Literal('ad'),
	params: NullishUnion(
		Type.Object({
			id: NullishUnion(Type.String()),
			adIndicator: NullishUnion(Type.Boolean()),
		}),
	),
	content: NullishUnion(Type.String()),
});
