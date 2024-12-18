import {
	ContentType,
	QueryContentsByAuthorColumn,
	QueryContentsFromBucketColumn,
	QueryContentsHasCategoryColumn,
	QueryContentsHasPartnerColumn,
	QueryContentsHasTagColumn,
	SqlOperator,
	type FetchContentsQueryVariables,
} from '../../../gql/__generated__/graphql';

export type Params = {
	buckets?: string[];
	categories?: string[];
	tags?: string[];
	partners?: string[];
	authors?: string[];
	types?: ContentType[];
	after?: string | null;
	before?: string | null;
	limit?: number | null;
};

export const getFetchContentsVariables = ({
	buckets,
	categories,
	tags,
	partners,
	authors,
	types,
	after,
	before,
	limit,
}: Params): FetchContentsQueryVariables => {
	return {
		buckets: buckets
			? {
					column: QueryContentsFromBucketColumn.Slug,
					operator: SqlOperator.In,
					value: buckets,
				}
			: null,
		categories: categories
			? {
					OR: categories
						? categories.map((category: string) => {
								return {
									column: QueryContentsHasCategoryColumn.Slug,
									value: category,
								};
							})
						: [],
				}
			: null,
		tags: tags
			? {
					column: QueryContentsHasTagColumn.Slug,
					value: tags,
				}
			: null,
		partners: partners
			? {
					OR: partners
						? partners.map((partner: string) => {
								return {
									column: QueryContentsHasPartnerColumn.Slug,
									value: partner,
								};
							})
						: [],
				}
			: null,
		authors: authors
			? {
					OR: authors
						? authors.map((author: string) => {
								return {
									column: QueryContentsByAuthorColumn.Slug,
									value: author,
								};
							})
						: [],
				}
			: null,
		// date: date,
		types: types || [ContentType.Article, ContentType.LiveArticle],
		// option: option,
		limit: limit,
		before: before,
		after: after,
	};
};
