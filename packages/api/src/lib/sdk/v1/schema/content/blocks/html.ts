import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

export type THtmlBlockSchema = typeof HtmlBlockSchema;
export type HtmlBlock = StaticDecode<THtmlBlockSchema>;
export const HtmlBlockSchema = Type.Object({
	type: Type.Literal('html'),
	params: NullishUnion(Type.Any()),
	content: NullishUnion(Type.String()),
});
