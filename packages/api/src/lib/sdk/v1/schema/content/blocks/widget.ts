import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

export type TWidgetBlockSchema = typeof WidgetBlockSchema;
export type WidgetBlock = StaticDecode<TWidgetBlockSchema>;
export const WidgetBlockSchema = Type.Object({
	type: Type.Literal('widget'),
	// TODO:
	params: NullishUnion(Type.Any()),
	content: NullishUnion(Type.String()),
});
