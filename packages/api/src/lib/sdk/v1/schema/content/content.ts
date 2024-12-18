import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion, Parse, HungarianDateTimeSchemaBuilder } from '@packages/typebox-utils';
import { AuthorSchema } from '../taxonomy/author';
import { CategorySchema } from '../taxonomy/category';
import { TagSchema } from '../taxonomy/tag';
import { BucketSchema } from '../taxonomy/bucket';
import { CounterSchema } from './counter';
import { BodySchema } from './body';
import { MediaItemSchema } from '../media/mediaItem';

// TODO: generic schema for option variations in content?
export const optionSchema = Type.Object({
	key: Type.String(),
	value: Type.Unknown(),
});
export const optionsSchema = Type.Transform(Type.Array(optionSchema))
	.Decode((val) => {
		const mapped = val.reduce((acc: Record<string, unknown>, currentOption) => {
			acc[currentOption.key] = currentOption.value;
			return acc;
		}, {});
		return mapped;
	})
	.Encode((val) => {
		return Object.entries(val).map(([key, value]) => {
			return { key, value };
		});
	});

// TODO: schema forPage, Article, LiveArticle
export type TContentSchema = typeof ContentSchema;
export type Content = StaticDecode<TContentSchema>;
export const ContentSchema = Type.Transform(
	Type.Object({
		id: Type.String(),
		title: Type.String(),
		slug: Type.String(),
		featuredImage: NullishUnion(MediaItemSchema),
		excerpt: NullishUnion(Type.String()),
		publishedAt: NullishUnion(HungarianDateTimeSchemaBuilder(true)),
		createdAt: NullishUnion(HungarianDateTimeSchemaBuilder(true)),
		authors: Type.Array(AuthorSchema),
		categories: Type.Array(CategorySchema),
		tags: Type.Array(TagSchema),
		//     collections: [],
		bucket: BucketSchema,
		counters: Type.Array(CounterSchema),
		options: optionsSchema,
		url: Type.String({ format: 'url' }),
		body: NullishUnion(BodySchema),
		// TODO:
		relatedArticles: NullishUnion(Type.Array(Type.Any())),
		userHasAccess: NullishUnion(Type.Boolean()),
	}),
)
	.Decode((val) => {
		const url = new URL(val.url);
		return { ...val, url: url.pathname };
	})
	.Encode((val) => val);
