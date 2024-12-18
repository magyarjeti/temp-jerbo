import { Type, type StaticDecode } from '@sinclair/typebox';
import { NullishUnion } from '@packages/typebox-utils';
import { BucketSchema } from '../taxonomy/bucket';

export type MediaItemSize = StaticDecode<typeof sizeSchema>;
export const sizeSchema = Type.Union([
	Type.Literal('xxs'),
	Type.Literal('xs'),
	Type.Literal('sm'),
	Type.Literal('md'),
	Type.Literal('lg'),
	Type.Literal('xl'),
	Type.Literal('xxl'),
]);

export type MediaItemVariation = StaticDecode<typeof mediaItemVariationSchema>;
export const mediaItemVariationSchema = Type.Object({
	url: Type.String({ format: 'url' }),
	size: sizeSchema,
	width: Type.Number(),
	height: Type.Number(),
});

export type TMediaItemSchema = typeof MediaItemSchema;
export type MediaItem = StaticDecode<TMediaItemSchema>;
export const MediaItemSchema = Type.Object({
	id: Type.String(),
	url: Type.String({ format: 'url' }),
	caption: NullishUnion(Type.String()),
	author: NullishUnion(Type.String()),
	creditType: NullishUnion(Type.String()),
	sourceLink: NullishUnion(Type.String()),
	bucket: BucketSchema,
	width: Type.Number(),
	height: Type.Number(),
	variations: Type.Array(mediaItemVariationSchema),
});
