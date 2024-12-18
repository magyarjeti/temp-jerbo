/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
	Date: { input: any; output: any };
	/** A datetime string with format `Y-m-d\TH:i:sP`, e.g. `2005-08-15T15:52:01+00:00`. */
	DateTimeTz: { input: any; output: any };
	HashID: { input: any; output: any };
	/** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org. */
	JSON: { input: any; output: any };
};

export type Article = Content & {
	__typename?: 'Article';
	authors: Array<Author>;
	body: Scalars['JSON']['output'];
	categories: Array<Category>;
	contents?: Maybe<Array<Content>>;
	createdAt: Scalars['DateTimeTz']['output'];
	extract?: Maybe<Array<KeyValuePair>>;
	extras?: Maybe<Scalars['JSON']['output']>;
	flags?: Maybe<Array<Flag>>;
	id: Scalars['HashID']['output'];
	language: Scalars['String']['output'];
	layout: Scalars['String']['output'];
	meta?: Maybe<Array<KeyValuePair>>;
	parentContents?: Maybe<Array<Content>>;
	paywalledAt?: Maybe<Scalars['DateTimeTz']['output']>;
	product: Product;
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	slug: Scalars['String']['output'];
	slugs?: Maybe<Array<Slug>>;
	status: ContentStatus;
	tags?: Maybe<Array<Tag>>;
	title?: Maybe<Array<KeyValuePair>>;
	updatedAt: Scalars['DateTimeTz']['output'];
	versions: Array<Version>;
};

export type Author = Taxonomy & {
	__typename?: 'Author';
	annex?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	domain: Scalars['String']['output'];
	id: Scalars['HashID']['output'];
	image?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	ownContent?: Maybe<Content>;
	products: Array<Product>;
	relatedContents: Array<Content>;
	slug: Scalars['String']['output'];
};

export type Category = Taxonomy & {
	__typename?: 'Category';
	annex?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	domain: Scalars['String']['output'];
	id: Scalars['HashID']['output'];
	image?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	ownContent?: Maybe<Content>;
	products: Array<Product>;
	relatedContents: Array<Content>;
	slug: Scalars['String']['output'];
};

export type Content = {
	authors: Array<Author>;
	body: Scalars['JSON']['output'];
	categories: Array<Category>;
	contents?: Maybe<Array<Content>>;
	createdAt: Scalars['DateTimeTz']['output'];
	extract?: Maybe<Array<KeyValuePair>>;
	extras?: Maybe<Scalars['JSON']['output']>;
	flags?: Maybe<Array<Flag>>;
	id: Scalars['HashID']['output'];
	language: Scalars['String']['output'];
	layout: Scalars['String']['output'];
	meta?: Maybe<Array<KeyValuePair>>;
	parentContents?: Maybe<Array<Content>>;
	paywalledAt?: Maybe<Scalars['DateTimeTz']['output']>;
	product: Product;
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	slug: Scalars['String']['output'];
	slugs?: Maybe<Array<Slug>>;
	status: ContentStatus;
	tags?: Maybe<Array<Tag>>;
	title?: Maybe<Array<KeyValuePair>>;
	updatedAt: Scalars['DateTimeTz']['output'];
	versions?: Maybe<Array<Version>>;
};

export type ContentHasMany = {
	connect?: InputMaybe<Array<Scalars['HashID']['input']>>;
	create?: InputMaybe<Array<CreateContentInput>>;
	delete?: InputMaybe<Array<Scalars['HashID']['input']>>;
	disconnect?: InputMaybe<Array<Scalars['HashID']['input']>>;
	update?: InputMaybe<Array<UpdateContentInput>>;
};

/** A paginated list of Content items. */
export type ContentPaginator = {
	__typename?: 'ContentPaginator';
	/** A list of Content items. */
	data: Array<Content>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export enum ContentStatus {
	Archived = 'ARCHIVED',
	Draft = 'DRAFT',
	Published = 'PUBLISHED',
}

export enum ContentType {
	Article = 'ARTICLE',
	LiveArticle = 'LIVE_ARTICLE',
	LiveReport = 'LIVE_REPORT',
	Mainpage = 'MAINPAGE',
	Page = 'PAGE',
}

export type CreateContentInput = {
	authors?: InputMaybe<TaxonomiesHasMany>;
	body: Scalars['JSON']['input'];
	categories?: InputMaybe<TaxonomiesHasMany>;
	contents?: InputMaybe<ContentHasMany>;
	createdBy?: InputMaybe<Scalars['HashID']['input']>;
	extract?: InputMaybe<Array<KeyValuePairInput>>;
	extras?: InputMaybe<Scalars['JSON']['input']>;
	flags?: InputMaybe<TaxonomiesHasMany>;
	language: Scalars['String']['input'];
	layout: Scalars['String']['input'];
	meta?: InputMaybe<Array<KeyValuePairInput>>;
	parentContents?: InputMaybe<ContentHasMany>;
	paywalledAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	product: ProductBelongsTo;
	publishedAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	slugs?: InputMaybe<SlugHasMany>;
	status?: InputMaybe<ContentStatus>;
	tags?: InputMaybe<TaxonomiesHasMany>;
	title: Array<KeyValuePairInput>;
	type?: InputMaybe<ContentType>;
};

export type CreateProductInput = {
	annex?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	domain: Scalars['String']['input'];
	name: Scalars['String']['input'];
};

export type CreateSlugInput = {
	slug: Scalars['String']['input'];
	statuscode?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTaxonomyInput = {
	annex?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	domain: Scalars['String']['input'];
	image?: InputMaybe<Scalars['String']['input']>;
	name: Scalars['String']['input'];
	slug?: InputMaybe<Scalars['String']['input']>;
	type: TaxonomyType;
};

export type Flag = Taxonomy & {
	__typename?: 'Flag';
	annex?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	domain: Scalars['String']['output'];
	id: Scalars['HashID']['output'];
	image?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	ownContent?: Maybe<Content>;
	products: Array<Product>;
	relatedContents: Array<Content>;
	slug: Scalars['String']['output'];
};

export type KeyValuePair = {
	__typename?: 'KeyValuePair';
	key: Scalars['String']['output'];
	value?: Maybe<Scalars['String']['output']>;
};

export type KeyValuePairInput = {
	key: Scalars['String']['input'];
	value?: InputMaybe<Scalars['String']['input']>;
};

export type LiveArticle = Content & {
	__typename?: 'LiveArticle';
	authors: Array<Author>;
	body: Scalars['JSON']['output'];
	categories: Array<Category>;
	contents?: Maybe<Array<Content>>;
	createdAt: Scalars['DateTimeTz']['output'];
	extract?: Maybe<Array<KeyValuePair>>;
	extras?: Maybe<Scalars['JSON']['output']>;
	flags?: Maybe<Array<Flag>>;
	id: Scalars['HashID']['output'];
	language: Scalars['String']['output'];
	layout: Scalars['String']['output'];
	meta?: Maybe<Array<KeyValuePair>>;
	parentContents?: Maybe<Array<Content>>;
	paywalledAt?: Maybe<Scalars['DateTimeTz']['output']>;
	product: Product;
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	slug: Scalars['String']['output'];
	slugs?: Maybe<Array<Slug>>;
	status: ContentStatus;
	tags?: Maybe<Array<Tag>>;
	title?: Maybe<Array<KeyValuePair>>;
	updatedAt: Scalars['DateTimeTz']['output'];
	versions: Array<Version>;
};

export type LiveReport = Content & {
	__typename?: 'LiveReport';
	authors: Array<Author>;
	body: Scalars['JSON']['output'];
	categories: Array<Category>;
	contents?: Maybe<Array<Content>>;
	createdAt: Scalars['DateTimeTz']['output'];
	extract?: Maybe<Array<KeyValuePair>>;
	extras?: Maybe<Scalars['JSON']['output']>;
	flags?: Maybe<Array<Flag>>;
	id: Scalars['HashID']['output'];
	language: Scalars['String']['output'];
	layout: Scalars['String']['output'];
	meta?: Maybe<Array<KeyValuePair>>;
	parentContents?: Maybe<Array<Content>>;
	paywalledAt?: Maybe<Scalars['DateTimeTz']['output']>;
	product: Product;
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	slug: Scalars['String']['output'];
	slugs?: Maybe<Array<Slug>>;
	status: ContentStatus;
	tags?: Maybe<Array<Tag>>;
	title?: Maybe<Array<KeyValuePair>>;
	updatedAt: Scalars['DateTimeTz']['output'];
	versions: Array<Version>;
};

export type Mainpage = Content & {
	__typename?: 'Mainpage';
	authors: Array<Author>;
	body: Scalars['JSON']['output'];
	categories: Array<Category>;
	contents?: Maybe<Array<Content>>;
	createdAt: Scalars['DateTimeTz']['output'];
	extract?: Maybe<Array<KeyValuePair>>;
	extras?: Maybe<Scalars['JSON']['output']>;
	flags?: Maybe<Array<Flag>>;
	id: Scalars['HashID']['output'];
	language: Scalars['String']['output'];
	layout: Scalars['String']['output'];
	meta?: Maybe<Array<KeyValuePair>>;
	parentContents?: Maybe<Array<Content>>;
	paywalledAt?: Maybe<Scalars['DateTimeTz']['output']>;
	product: Product;
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	slug: Scalars['String']['output'];
	slugs?: Maybe<Array<Slug>>;
	status: ContentStatus;
	tags?: Maybe<Array<Tag>>;
	title?: Maybe<Array<KeyValuePair>>;
	updatedAt: Scalars['DateTimeTz']['output'];
	versions: Array<Version>;
};

export type Mutation = {
	__typename?: 'Mutation';
	createContent?: Maybe<Content>;
	createProduct?: Maybe<Product>;
	createTaxonomy?: Maybe<Taxonomy>;
	revertVersion: Content;
	updateContent?: Maybe<Content>;
	updateProduct?: Maybe<Product>;
	updateTaxonomy?: Maybe<Taxonomy>;
};

export type MutationCreateContentArgs = {
	input: CreateContentInput;
};

export type MutationCreateProductArgs = {
	input: CreateProductInput;
};

export type MutationCreateTaxonomyArgs = {
	input: CreateTaxonomyInput;
};

export type MutationRevertVersionArgs = {
	versionId: Scalars['HashID']['input'];
};

export type MutationUpdateContentArgs = {
	input: UpdateContentInput;
};

export type MutationUpdateProductArgs = {
	input: UpdateProductInput;
};

export type MutationUpdateTaxonomyArgs = {
	input: UpdateTaxonomyInput;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
	/** The column that is used for ordering. */
	column: Scalars['String']['input'];
	/** The direction that is used for ordering. */
	order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
	/** Amount of items. */
	Count = 'COUNT',
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
	/** Average. */
	Avg = 'AVG',
	/** Amount of items. */
	Count = 'COUNT',
	/** Maximum. */
	Max = 'MAX',
	/** Minimum. */
	Min = 'MIN',
	/** Sum. */
	Sum = 'SUM',
}

export type Page = Content & {
	__typename?: 'Page';
	authors: Array<Author>;
	body: Scalars['JSON']['output'];
	categories: Array<Category>;
	contents?: Maybe<Array<Content>>;
	createdAt: Scalars['DateTimeTz']['output'];
	extract?: Maybe<Array<KeyValuePair>>;
	extras?: Maybe<Scalars['JSON']['output']>;
	flags?: Maybe<Array<Flag>>;
	id: Scalars['HashID']['output'];
	language: Scalars['String']['output'];
	layout: Scalars['String']['output'];
	meta?: Maybe<Array<KeyValuePair>>;
	parentContents?: Maybe<Array<Content>>;
	paywalledAt?: Maybe<Scalars['DateTimeTz']['output']>;
	product: Product;
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	slug: Scalars['String']['output'];
	slugs?: Maybe<Array<Slug>>;
	status: ContentStatus;
	tags?: Maybe<Array<Tag>>;
	title?: Maybe<Array<KeyValuePair>>;
	updatedAt: Scalars['DateTimeTz']['output'];
	versions: Array<Version>;
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
	__typename?: 'PaginatorInfo';
	/** Number of items in the current page. */
	count: Scalars['Int']['output'];
	/** Index of the current page. */
	currentPage: Scalars['Int']['output'];
	/** Index of the first item in the current page. */
	firstItem?: Maybe<Scalars['Int']['output']>;
	/** Are there more pages after this one? */
	hasMorePages: Scalars['Boolean']['output'];
	/** Index of the last item in the current page. */
	lastItem?: Maybe<Scalars['Int']['output']>;
	/** Index of the last available page. */
	lastPage: Scalars['Int']['output'];
	/** Number of items per page. */
	perPage: Scalars['Int']['output'];
	/** Number of total available items. */
	total: Scalars['Int']['output'];
};

export type Product = {
	__typename?: 'Product';
	annex?: Maybe<Scalars['String']['output']>;
	contents?: Maybe<Array<Content>>;
	createdAt: Scalars['DateTimeTz']['output'];
	description?: Maybe<Scalars['String']['output']>;
	domain: Scalars['String']['output'];
	id: Scalars['HashID']['output'];
	name: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	updatedAt: Scalars['DateTimeTz']['output'];
};

export type ProductBelongsTo = {
	connect?: InputMaybe<Scalars['HashID']['input']>;
	create?: InputMaybe<CreateProductInput>;
	update?: InputMaybe<UpdateProductInput>;
};

export type ProductDomainAnnex = {
	annex?: InputMaybe<Scalars['String']['input']>;
	domain: Scalars['String']['input'];
};

/** A paginated list of Product items. */
export type ProductPaginator = {
	__typename?: 'ProductPaginator';
	/** A list of Product items. */
	data: Array<Product>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export type ProductsDomainAnnex = {
	annex?: InputMaybe<Scalars['String']['input']>;
	domain: Scalars['String']['input'];
};

export type Query = {
	__typename?: 'Query';
	content?: Maybe<Content>;
	contents: ContentPaginator;
	products: ProductPaginator;
	taxonomies: TaxonomyPaginator;
};

export type QueryContentArgs = {
	id?: InputMaybe<Scalars['HashID']['input']>;
};

export type QueryContentsArgs = {
	byAuthor?: InputMaybe<Array<Scalars['String']['input']>>;
	byProduct?: InputMaybe<ProductDomainAnnex>;
	byStatus?: InputMaybe<Array<ContentStatus>>;
	byType?: InputMaybe<Array<ContentType>>;
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryProductsArgs = {
	domain: Scalars['String']['input'];
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTaxonomiesArgs = {
	byProduct?: InputMaybe<ProductsDomainAnnex>;
	byType?: InputMaybe<Array<TaxonomyType>>;
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
};

export enum ReasonType {
	Edited = 'EDITED',
	Published = 'PUBLISHED',
}

export type Slug = {
	__typename?: 'Slug';
	content: Content;
	createdAt: Scalars['DateTimeTz']['output'];
	id: Scalars['HashID']['output'];
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	slug: Scalars['String']['output'];
	statuscode: Scalars['String']['output'];
	updatedAt: Scalars['DateTimeTz']['output'];
};

export type SlugHasMany = {
	connect?: InputMaybe<Array<Scalars['HashID']['input']>>;
	create?: InputMaybe<Array<CreateSlugInput>>;
	delete?: InputMaybe<Array<Scalars['HashID']['input']>>;
	disconnect?: InputMaybe<Array<Scalars['HashID']['input']>>;
	update?: InputMaybe<Array<UpdateSlugInput>>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
	/** Sort records in ascending order. */
	Asc = 'ASC',
	/** Sort records in descending order. */
	Desc = 'DESC',
}

export type Tag = Taxonomy & {
	__typename?: 'Tag';
	annex?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	domain: Scalars['String']['output'];
	id: Scalars['HashID']['output'];
	image?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	ownContent?: Maybe<Content>;
	products: Array<Product>;
	relatedContents: Array<Content>;
	slug: Scalars['String']['output'];
};

export type TaxonomiesHasMany = {
	connect?: InputMaybe<Array<Scalars['HashID']['input']>>;
	create?: InputMaybe<Array<CreateTaxonomyInput>>;
	delete?: InputMaybe<Array<Scalars['HashID']['input']>>;
	disconnect?: InputMaybe<Array<Scalars['HashID']['input']>>;
	update?: InputMaybe<Array<UpdateTaxonomyInput>>;
};

export type Taxonomy = {
	annex?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	domain: Scalars['String']['output'];
	id: Scalars['HashID']['output'];
	image?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	ownContent?: Maybe<Content>;
	products: Array<Product>;
	relatedContents: Array<Content>;
	slug: Scalars['String']['output'];
};

/** A paginated list of Taxonomy items. */
export type TaxonomyPaginator = {
	__typename?: 'TaxonomyPaginator';
	/** A list of Taxonomy items. */
	data: Array<Taxonomy>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export enum TaxonomyType {
	Author = 'AUTHOR',
	Category = 'CATEGORY',
	Flag = 'FLAG',
	Tag = 'TAG',
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
	/** Only return trashed results. */
	Only = 'ONLY',
	/** Return both trashed and non-trashed results. */
	With = 'WITH',
	/** Only return non-trashed results. */
	Without = 'WITHOUT',
}

export type UpdateContentInput = {
	authors?: InputMaybe<TaxonomiesHasMany>;
	body?: InputMaybe<Scalars['JSON']['input']>;
	categories?: InputMaybe<TaxonomiesHasMany>;
	contents?: InputMaybe<ContentHasMany>;
	createdBy?: InputMaybe<Scalars['HashID']['input']>;
	extract?: InputMaybe<Array<KeyValuePairInput>>;
	extras?: InputMaybe<Scalars['JSON']['input']>;
	flags?: InputMaybe<TaxonomiesHasMany>;
	id: Scalars['HashID']['input'];
	language?: InputMaybe<Scalars['String']['input']>;
	layout?: InputMaybe<Scalars['String']['input']>;
	meta?: InputMaybe<Array<KeyValuePairInput>>;
	parentContents?: InputMaybe<ContentHasMany>;
	paywalledAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	product?: InputMaybe<ProductBelongsTo>;
	publishedAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	slugs?: InputMaybe<SlugHasMany>;
	status?: InputMaybe<ContentStatus>;
	tags?: InputMaybe<TaxonomiesHasMany>;
	title?: InputMaybe<Array<KeyValuePairInput>>;
	type?: InputMaybe<ContentType>;
};

export type UpdateProductInput = {
	annex?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	domain?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['HashID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSlugInput = {
	id?: InputMaybe<Scalars['HashID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	statuscode?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTaxonomyInput = {
	annex?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	domain?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['HashID']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	type?: InputMaybe<TaxonomyType>;
};

export type Version = {
	__typename?: 'Version';
	createdAt: Scalars['DateTimeTz']['output'];
	id: Scalars['HashID']['output'];
	modelData?: Maybe<Scalars['JSON']['output']>;
	reason?: Maybe<Scalars['String']['output']>;
	updatedAt: Scalars['DateTimeTz']['output'];
	userId?: Maybe<Scalars['HashID']['output']>;
};

export type CreateContentMutationVariables = Exact<{
	input: CreateContentInput;
}>;

export type CreateContentMutation = {
	__typename?: 'Mutation';
	createContent?:
		| { __typename?: 'Article'; id: any; updatedAt: any }
		| { __typename?: 'LiveArticle'; id: any; updatedAt: any }
		| { __typename?: 'LiveReport'; id: any; updatedAt: any }
		| { __typename?: 'Mainpage'; id: any; updatedAt: any }
		| { __typename?: 'Page'; id: any; updatedAt: any }
		| null;
};

export type GetContentQueryVariables = Exact<{
	id?: InputMaybe<Scalars['HashID']['input']>;
}>;

export type GetContentQuery = {
	__typename?: 'Query';
	content?:
		| {
				__typename?: 'Article';
				id: any;
				body: any;
				layout: string;
				slug: string;
				status: ContentStatus;
				updatedAt: any;
				tags?: Array<{ __typename?: 'Tag'; id: any; name: string; slug: string }> | null;
				title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
		  }
		| {
				__typename?: 'LiveArticle';
				id: any;
				body: any;
				layout: string;
				slug: string;
				status: ContentStatus;
				updatedAt: any;
				tags?: Array<{ __typename?: 'Tag'; id: any; name: string; slug: string }> | null;
				title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
		  }
		| {
				__typename?: 'LiveReport';
				id: any;
				body: any;
				layout: string;
				slug: string;
				status: ContentStatus;
				updatedAt: any;
				tags?: Array<{ __typename?: 'Tag'; id: any; name: string; slug: string }> | null;
				title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
		  }
		| {
				__typename?: 'Mainpage';
				id: any;
				body: any;
				layout: string;
				slug: string;
				status: ContentStatus;
				updatedAt: any;
				tags?: Array<{ __typename?: 'Tag'; id: any; name: string; slug: string }> | null;
				title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
		  }
		| {
				__typename?: 'Page';
				id: any;
				body: any;
				layout: string;
				slug: string;
				status: ContentStatus;
				updatedAt: any;
				tags?: Array<{ __typename?: 'Tag'; id: any; name: string; slug: string }> | null;
				title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
		  }
		| null;
};

export type GetContentsQueryVariables = Exact<{
	page?: InputMaybe<Scalars['Int']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	byType?: InputMaybe<Array<ContentType> | ContentType>;
	byStatus?: InputMaybe<Array<ContentStatus> | ContentStatus>;
}>;

export type GetContentsQuery = {
	__typename?: 'Query';
	contents: {
		__typename?: 'ContentPaginator';
		data: Array<
			| {
					__typename?: 'Article';
					id: any;
					status: ContentStatus;
					title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
			  }
			| {
					__typename?: 'LiveArticle';
					id: any;
					status: ContentStatus;
					title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
			  }
			| {
					__typename?: 'LiveReport';
					id: any;
					status: ContentStatus;
					title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
			  }
			| {
					__typename?: 'Mainpage';
					id: any;
					status: ContentStatus;
					title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
			  }
			| {
					__typename?: 'Page';
					id: any;
					status: ContentStatus;
					title?: Array<{ __typename?: 'KeyValuePair'; key: string; value?: string | null }> | null;
			  }
		>;
		paginatorInfo: {
			__typename?: 'PaginatorInfo';
			count: number;
			currentPage: number;
			firstItem?: number | null;
			hasMorePages: boolean;
			lastItem?: number | null;
			lastPage: number;
			perPage: number;
			total: number;
		};
	};
};

export type ProductsQueryVariables = Exact<{
	domain: Scalars['String']['input'];
}>;

export type ProductsQuery = {
	__typename?: 'Query';
	products: {
		__typename?: 'ProductPaginator';
		data: Array<{ __typename?: 'Product'; id: any; name: string }>;
	};
};

export type UpdateContentMutationVariables = Exact<{
	input: UpdateContentInput;
}>;

export type UpdateContentMutation = {
	__typename?: 'Mutation';
	updateContent?:
		| { __typename?: 'Article'; id: any; updatedAt: any }
		| { __typename?: 'LiveArticle'; id: any; updatedAt: any }
		| { __typename?: 'LiveReport'; id: any; updatedAt: any }
		| { __typename?: 'Mainpage'; id: any; updatedAt: any }
		| { __typename?: 'Page'; id: any; updatedAt: any }
		| null;
};

export const CreateContentDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'createContent' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateContentInput' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'createContent' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<CreateContentMutation, CreateContentMutationVariables>;
export const GetContentDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getContent' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'HashID' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'content' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'body' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'tags' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'title' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetContentQuery, GetContentQueryVariables>;
export const GetContentsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getContents' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'search' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'byType' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'ContentType' } },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'byStatus' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'ContentStatus' } },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'contents' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'page' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'search' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'search' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'byType' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'byType' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'byStatus' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'byStatus' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'first' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'data' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'title' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'paginatorInfo' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'count' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'currentPage' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'firstItem' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'hasMorePages' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastItem' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'lastPage' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'perPage' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetContentsQuery, GetContentsQueryVariables>;
export const ProductsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'products' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'domain' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'products' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'domain' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'domain' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'data' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const UpdateContentDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateContent' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateContentInput' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'updateContent' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<UpdateContentMutation, UpdateContentMutationVariables>;
