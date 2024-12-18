import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { ContentSchema } from './content/content';
import { CategorySchema } from './taxonomy/category';
import { MediaItemSchema } from './media/mediaItem';
import { AuthorSchema } from './taxonomy/author';
import { NullishUnion } from '@packages/typebox-utils';
import { TagSchema } from './taxonomy/tag';

const paginationSchema = Type.Object({
	count: Type.Number(),
	endCursor: NullishUnion(Type.String()),
	startCursor: NullishUnion(Type.String()),
	hasNextPage: Type.Boolean(),
	hasPreviousPage: Type.Boolean(),
	total: NullishUnion(Type.Number()),
});

export type FetchContentQuery = StaticDecode<typeof FetchContentQuerySchema>;
export const FetchContentQuerySchema = Type.Transform(
	Type.Object({
		content: ContentSchema,
	}),
)
	.Decode((val) => val.content)
	.Encode((val) => ({ content: val }));

export type FetchContentsQuery = StaticDecode<typeof FetchContentsQuerySchema>;
export const FetchContentsQuerySchema = Type.Transform(
	Type.Object({
		contents: Type.Object({
			pageInfo: paginationSchema,
			edges: Type.Array(
				Type.Transform(
					Type.Object({
						node: ContentSchema,
					}),
				)
					.Decode((val) => {
						return val.node;
					})
					.Encode((val) => ({ node: val })),
			),
		}),
	}),
)
	.Decode((val) => {
		return val.contents;
	})
	.Encode((val) => ({ contents: val }));

export type FetchCategoryQuery = StaticDecode<typeof FetchCategoryQuerySchema>;
export const FetchCategoryQuerySchema = Type.Transform(
	Type.Object({
		category: CategorySchema,
	}),
)
	.Decode((val) => val.category)
	.Encode((val) => ({ category: val }));

export type FetchTagQuery = StaticDecode<typeof FetchTagQuerySchema>;
export const FetchTagQuerySchema = Type.Transform(
	Type.Object({
		tag: TagSchema,
	}),
)
	.Decode((val) => val.tag)
	.Encode((val) => ({ tag: val }));

export type FetchAuthorQuery = StaticDecode<typeof FetchAuthorQuerySchema>;
export const FetchAuthorQuerySchema = Type.Transform(
	Type.Object({
		author: AuthorSchema,
	}),
)
	.Decode((val) => val.author)
	.Encode((val) => ({ author: val }));

export type FetchMediaItem = StaticDecode<typeof FetchMediaItemSchema>;
export const FetchMediaItemSchema = Type.Transform(
	Type.Object({
		mediaItem: MediaItemSchema,
	}),
)
	.Decode((val) => val.mediaItem)
	.Encode((val) => ({ mediaItem: val }));

export type SearchQuery = StaticDecode<typeof SearchQuerySchema>;
export const SearchQuerySchema = Type.Transform(
	Type.Object({
		search: Type.Object({
			pageInfo: paginationSchema,
			edges: Type.Array(
				Type.Transform(
					Type.Object({
						node: ContentSchema,
					}),
				)
					.Decode((val) => {
						return val.node;
					})
					.Encode((val) => ({ node: val })),
			),
		}),
	}),
)
	.Decode((val) => {
		return val.search;
	})
	.Encode((val) => ({ search: val }));
