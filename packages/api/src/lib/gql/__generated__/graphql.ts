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
	/** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
	DateTime: { input: any; output: any };
	/** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sP`, e.g. `2020-04-20T13:53:12+02:00`. */
	DateTimeTz: { input: any; output: any };
	/** A [RFC 5321](https://tools.ietf.org/html/rfc5321) compliant email. */
	Email: { input: any; output: any };
	/** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org/. */
	JSON: { input: any; output: any };
	/** Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals, as they may not be parsed correctly on the server side. Use `String` literals if you are dealing with really large numbers to be on the safe side. */
	Mixed: { input: any; output: any };
	/** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sP`, e.g. `2020-04-20T13:53:12+02:00`. */
	Time: { input: any; output: any };
};

export type Area = {
	__typename?: 'Area';
	aliases: Array<Scalars['String']['output']>;
	childs: Array<Area>;
	competitionStages: CompetitionStagePaginator;
	competitions: CompetitionPaginator;
	description?: Maybe<Scalars['String']['output']>;
	geometries: Array<AreaGeometry>;
	id: Scalars['ID']['output'];
	longName: Scalars['String']['output'];
	parent?: Maybe<Area>;
	properties: Array<KeyValue>;
	shortName?: Maybe<Scalars['String']['output']>;
	slug: Scalars['String']['output'];
	subType?: Maybe<AreaSubType>;
	type: AreaType;
};

export type AreaChildsArgs = {
	type?: InputMaybe<Array<AreaType>>;
};

export type AreaCompetitionStagesArgs = {
	competitionSeriesSlug?: InputMaybe<Array<Scalars['String']['input']>>;
	competitionSeriesType?: InputMaybe<Array<CompetitionSeriesType>>;
	competitionsType?: InputMaybe<Array<CompetitionType>>;
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<Array<CompetitionStageType>>;
};

export type AreaCompetitionsArgs = {
	competitionSeriesSlug?: InputMaybe<Array<Scalars['String']['input']>>;
	competitionSeriesType?: InputMaybe<Array<CompetitionSeriesType>>;
	competitionStagesType?: InputMaybe<Array<CompetitionStageType>>;
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<Array<CompetitionType>>;
};

export type AreaGeometriesArgs = {
	type?: InputMaybe<Array<AreaGeometryType>>;
};

export type AreaParentArgs = {
	type?: InputMaybe<AreaType>;
};

export type AreaPropertiesArgs = {
	key?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AreaFilterInput = {
	id?: InputMaybe<Array<Scalars['ID']['input']>>;
	slug?: InputMaybe<Array<Scalars['String']['input']>>;
	subType?: InputMaybe<Array<AreaSubType>>;
	type?: InputMaybe<Array<AreaType>>;
};

export type AreaGeometry = {
	__typename?: 'AreaGeometry';
	area: Area;
	geometry?: Maybe<Scalars['Mixed']['output']>;
	id: Scalars['ID']['output'];
	type: AreaGeometryType;
};

export enum AreaGeometryType {
	Point = 'POINT',
	Shape = 'SHAPE',
	Unknown = 'UNKNOWN',
}

/** A paginated list of Area items. */
export type AreaPaginator = {
	__typename?: 'AreaPaginator';
	/** A list of Area items. */
	data: Array<Area>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export enum AreaSubType {
	Capital = 'CAPITAL',
	Regular = 'REGULAR',
	Village = 'VILLAGE',
	WithCountyRights = 'WITH_COUNTY_RIGHTS',
}

export enum AreaType {
	City = 'CITY',
	Constituency = 'CONSTITUENCY',
	Continent = 'CONTINENT',
	Country = 'COUNTRY',
	County = 'COUNTY',
	District = 'DISTRICT',
	Earth = 'EARTH',
	PollingDistrict = 'POLLING_DISTRICT',
	Region = 'REGION',
	SmalRegion = 'SMAL_REGION',
	Stadium = 'STADIUM',
}

export type AreaWhereInput = {
	AND?: InputMaybe<AreaWhereInput>;
	OR?: InputMaybe<AreaWhereInput>;
	id?: InputMaybe<Array<Scalars['ID']['input']>>;
	slug?: InputMaybe<Array<Scalars['String']['input']>>;
	subType?: InputMaybe<Array<InputMaybe<AreaSubType>>>;
	type?: InputMaybe<Array<AreaType>>;
};

export type Article = Content &
	Displayable &
	Searchable & {
		__typename?: 'Article';
		authors: Array<Author>;
		body: Array<Maybe<Scalars['String']['output']>>;
		bodyType: ContentBodyType;
		bucket: Bucket;
		categories: Array<Category>;
		collections: Array<Collection>;
		counters: Array<ContentCounter>;
		coverImage?: Maybe<Image>;
		createdAt: Scalars['DateTimeTz']['output'];
		excerpt?: Maybe<Scalars['String']['output']>;
		featuredImage?: Maybe<Image>;
		id: Scalars['ID']['output'];
		localOptions?: Maybe<Array<Option>>;
		mateType: ContentMateType;
		meta: Array<Meta>;
		options: Array<Option>;
		partners: Array<Partner>;
		publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
		publisher?: Maybe<Author>;
		relatedArticles: Array<Article>;
		slug: Scalars['String']['output'];
		tags: Array<Tag>;
		title: Scalars['String']['output'];
		updatedAt: Scalars['DateTimeTz']['output'];
		url?: Maybe<Scalars['String']['output']>;
		userHasAccess: Scalars['Boolean']['output'];
	};

export type AttacksDangerous = {
	__typename?: 'AttacksDangerous';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type AttacksTotal = {
	__typename?: 'AttacksTotal';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type Author = {
	__typename?: 'Author';
	avatar?: Maybe<Scalars['String']['output']>;
	avatarMediaItem?: Maybe<MediaItem>;
	description?: Maybe<Scalars['String']['output']>;
	email: Scalars['Email']['output'];
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	slug: Scalars['String']['output'];
	state: AuthorState;
};

export type AuthorInput = {
	avatar?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	email?: InputMaybe<Scalars['Email']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

/** Author state */
export enum AuthorState {
	/** Active */
	Active = 'ACTIVE',
	/** Inactive */
	Inactive = 'INACTIVE',
}

export type Blog = {
	__typename?: 'Blog';
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	slug: Scalars['String']['output'];
};

export type BlogInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type Bucket = {
	__typename?: 'Bucket';
	contents: Array<Content>;
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	localOptions?: Maybe<Array<Option>>;
	name: Scalars['String']['output'];
	options: Array<Option>;
	slug: Scalars['String']['output'];
	taxonomies: Array<Taxonomy>;
};

/** A paginated list of Bucket edges. */
export type BucketConnection = {
	__typename?: 'BucketConnection';
	/** A list of Bucket edges. */
	edges: Array<BucketEdge>;
	/** Pagination information about the list of edges. */
	pageInfo: CursorPaginationInfo;
};

/** An edge that contains a node of type Bucket and a cursor. */
export type BucketEdge = {
	__typename?: 'BucketEdge';
	/** A unique cursor that can be used for pagination. */
	cursor: Scalars['String']['output'];
	/** The Bucket node. */
	node: Bucket;
};

export type BucketInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	options?: InputMaybe<Array<OptionInput>>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type ByOptionInput = {
	AND?: InputMaybe<ByOptionInput>;
	OR?: InputMaybe<ByOptionInput>;
	key: Scalars['String']['input'];
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type Category = Searchable &
	Taxonomy & {
		__typename?: 'Category';
		bucket: Bucket;
		description?: Maybe<Scalars['Mixed']['output']>;
		id: Scalars['ID']['output'];
		listTemplate?: Maybe<Scalars['Mixed']['output']>;
		name: Scalars['String']['output'];
		slug: Scalars['String']['output'];
		url?: Maybe<Scalars['String']['output']>;
	};

export type Collection = Searchable &
	Taxonomy & {
		__typename?: 'Collection';
		bucket: Bucket;
		description?: Maybe<Scalars['Mixed']['output']>;
		id: Scalars['ID']['output'];
		listTemplate?: Maybe<Scalars['Mixed']['output']>;
		name: Scalars['String']['output'];
		picture?: Maybe<Scalars['String']['output']>;
		slug: Scalars['String']['output'];
		title?: Maybe<Scalars['String']['output']>;
		url?: Maybe<Scalars['String']['output']>;
	};

export type Competition = {
	__typename?: 'Competition';
	area: Area;
	competitionSeries: CompetitionSeries;
	competitionStages: CompetitionStagePaginator;
	description?: Maybe<Scalars['String']['output']>;
	events: Array<Event>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	properties?: Maybe<CompetitionProperties>;
	shortName?: Maybe<Scalars['String']['output']>;
	statistics?: Maybe<CompetitionStatistics>;
	type: CompetitionType;
};

export type CompetitionCompetitionSeriesArgs = {
	season?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CompetitionCompetitionStagesArgs = {
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<Array<CompetitionStageType>>;
};

/** A paginated list of Competition items. */
export type CompetitionPaginator = {
	__typename?: 'CompetitionPaginator';
	/** A list of Competition items. */
	data: Array<Competition>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export type CompetitionProperties = ElectionCompetitionProperties;

export type CompetitionSeries = {
	__typename?: 'CompetitionSeries';
	competitions: CompetitionPaginator;
	competitors: CompetitorPaginator;
	description?: Maybe<Scalars['String']['output']>;
	endedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	events: Array<Event>;
	id: Scalars['ID']['output'];
	metas: Array<KeyValue>;
	name: Scalars['String']['output'];
	season: Scalars['String']['output'];
	shortName?: Maybe<Scalars['String']['output']>;
	slug: Scalars['String']['output'];
	startedAt: Scalars['DateTimeTz']['output'];
	type: CompetitionSeriesType;
};

export type CompetitionSeriesCompetitionsArgs = {
	area?: InputMaybe<AreaFilterInput>;
	competitionStages?: InputMaybe<Array<Scalars['String']['input']>>;
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<Array<CompetitionType>>;
};

export type CompetitionSeriesCompetitorsArgs = {
	area?: InputMaybe<AreaFilterInput>;
	competitionStages?: InputMaybe<Array<Scalars['String']['input']>>;
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
};

export type CompetitionSeriesMetasArgs = {
	key?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A paginated list of CompetitionSeries items. */
export type CompetitionSeriesPaginator = {
	__typename?: 'CompetitionSeriesPaginator';
	/** A list of CompetitionSeries items. */
	data: Array<CompetitionSeries>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export enum CompetitionSeriesType {
	ElectionEuropeanParliamentary = 'ELECTION_EUROPEAN_PARLIAMENTARY',
	ElectionLocalGovernment = 'ELECTION_LOCAL_GOVERNMENT',
	ElectionParliamentary = 'ELECTION_PARLIAMENTARY',
	SportCup = 'SPORT_CUP',
}

export type CompetitionStage = {
	__typename?: 'CompetitionStage';
	area: Area;
	competition: Competition;
	competitors: Array<Competitor>;
	description?: Maybe<Scalars['String']['output']>;
	endedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	events: Array<Event>;
	id: Scalars['ID']['output'];
	links: Array<Url>;
	name: Scalars['String']['output'];
	outcomes: Array<Outcome>;
	properties?: Maybe<CompetitionStageProperties>;
	slug: Scalars['String']['output'];
	startedAt: Scalars['DateTimeTz']['output'];
	statistics?: Maybe<CompetitionStageStatistics>;
	type: CompetitionStageType;
};

export type CompetitionStageOutcomesArgs = {
	onlyWinners?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A paginated list of CompetitionStage items. */
export type CompetitionStagePaginator = {
	__typename?: 'CompetitionStagePaginator';
	/** A list of CompetitionStage items. */
	data: Array<CompetitionStage>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export type CompetitionStageProperties = FootballCompetitionStageProperties;

export type CompetitionStageStatistics =
	| ElectionCompetitionStageStatistics
	| FootballCompetitionStageStatistics
	| ListElectionCompetitionStageStatistics;

export enum CompetitionStageType {
	ElectionIndividual = 'ELECTION_INDIVIDUAL',
	ElectionLists = 'ELECTION_LISTS',
	ElectionMayor = 'ELECTION_MAYOR',
	ElectionNationalLists = 'ELECTION_NATIONAL_LISTS',
	ElectionPrimeMinister = 'ELECTION_PRIME_MINISTER',
	SportMatch = 'SPORT_MATCH',
}

export type CompetitionStatistics = ElectionCompetitionStatistics | FootballCompetitionStatistics;

export enum CompetitionType {
	Election = 'ELECTION',
	SportGroupStage = 'SPORT_GROUP_STAGE',
	SportKnockOut = 'SPORT_KNOCK_OUT',
}

export type CompetitiorFilterByRelationshipInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Array<Scalars['String']['input']>>;
	type?: InputMaybe<Array<CompetitorRelationshipType>>;
};

export type Competitor = {
	__typename?: 'Competitor';
	competitionSeries: CompetitionSeries;
	competitionStages: Array<CompetitionStage>;
	id: Scalars['ID']['output'];
	markerTeams: Array<Organization>;
	members: Array<Member>;
	outcomes: Array<Outcome>;
	owner: HumanOrOrganization;
	players?: Maybe<Array<Player>>;
	supporterTeams: Array<Organization>;
};

export type CompetitorMembersArgs = {
	onlyWinners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompetitorOutcomesArgs = {
	competitionStages?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A paginated list of Competitor items. */
export type CompetitorPaginator = {
	__typename?: 'CompetitorPaginator';
	/** A list of Competitor items. */
	data: Array<Competitor>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export enum CompetitorRelationshipType {
	ListMember = 'LIST_MEMBER',
	Marker = 'MARKER',
	Player = 'PLAYER',
	Supporter = 'SUPPORTER',
}

export type Content = {
	authors: Array<Author>;
	body: Array<Maybe<Scalars['String']['output']>>;
	bodyType: ContentBodyType;
	bucket: Bucket;
	categories: Array<Category>;
	collections: Array<Collection>;
	counters: Array<ContentCounter>;
	coverImage?: Maybe<Image>;
	createdAt: Scalars['DateTimeTz']['output'];
	excerpt?: Maybe<Scalars['String']['output']>;
	featuredImage?: Maybe<Image>;
	id: Scalars['ID']['output'];
	localOptions?: Maybe<Array<Option>>;
	mateType: ContentMateType;
	meta: Array<Meta>;
	options?: Maybe<Array<Option>>;
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	publisher?: Maybe<Author>;
	slug: Scalars['String']['output'];
	tags: Array<Tag>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTimeTz']['output'];
	url?: Maybe<Scalars['String']['output']>;
	userHasAccess: Scalars['Boolean']['output'];
};

/** Content body type */
export enum ContentBodyType {
	/** Block */
	Block = 'BLOCK',
	/** Legacy */
	Legacy = 'LEGACY',
}

/** A paginated list of Content edges. */
export type ContentConnection = {
	__typename?: 'ContentConnection';
	/** A list of Content edges. */
	edges: Array<ContentEdge>;
	/** Pagination information about the list of edges. */
	pageInfo: CursorPaginationInfo;
};

export type ContentCounter = {
	__typename?: 'ContentCounter';
	name: ContentCounterType;
	value: Scalars['Mixed']['output'];
};

/** Content counter type */
export enum ContentCounterType {
	/** Disqus comment */
	DisqusComment = 'DISQUS_COMMENT',
	/** Facebook interaction */
	FacebookInteraction = 'FACEBOOK_INTERACTION',
}

export type ContentCountsMonth = {
	__typename?: 'ContentCountsMonth';
	count: Scalars['Int']['output'];
	days: Array<Scalars['Int']['output']>;
	month: Scalars['Int']['output'];
};

export type ContentCountsYear = {
	__typename?: 'ContentCountsYear';
	count: Scalars['Int']['output'];
	months: Array<ContentCountsMonth>;
	year: Scalars['Int']['output'];
};

/** An edge that contains a node of type Content and a cursor. */
export type ContentEdge = {
	__typename?: 'ContentEdge';
	/** A unique cursor that can be used for pagination. */
	cursor: Scalars['String']['output'];
	/** The Content node. */
	node: Content;
};

export type ContentInput = {
	authors?: InputMaybe<Array<AuthorInput>>;
	body?: InputMaybe<Scalars['String']['input']>;
	bodyType?: InputMaybe<ContentBodyType>;
	bucket?: InputMaybe<BucketInput>;
	categories?: InputMaybe<Array<TaxonomyInput>>;
	collections?: InputMaybe<Array<TaxonomyInput>>;
	contentType?: InputMaybe<ContentType>;
	coverImage?: InputMaybe<ImageInput>;
	excerpt?: InputMaybe<Scalars['String']['input']>;
	featuredImage?: InputMaybe<ImageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	isPreview?: InputMaybe<Scalars['Boolean']['input']>;
	mateType?: InputMaybe<ContentMateType>;
	meta?: InputMaybe<Array<MetaInput>>;
	options?: InputMaybe<Array<OptionInput>>;
	partners?: InputMaybe<Array<PartnerTaxonomyInput>>;
	publishedAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	publisher?: InputMaybe<AuthorInput>;
	slug?: InputMaybe<Scalars['String']['input']>;
	tags?: InputMaybe<Array<TaxonomyInput>>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ContentInviteToken = {
	__typename?: 'ContentInviteToken';
	content: Content;
	inviteToken: Scalars['String']['output'];
};

/** Content mate type */
export enum ContentMateType {
	/** Big picture */
	BigPicture = 'BIG_PICTURE',
	/** Default */
	Default = 'DEFAULT',
	/** Feature */
	Feature = 'FEATURE',
	/** Video */
	Video = 'VIDEO',
}

/** Content relation type */
export enum ContentRelationType {
	/** Related */
	Related = 'RELATED',
	/** Report */
	Report = 'REPORT',
}

/** Content type */
export enum ContentType {
	/** Article */
	Article = 'ARTICLE',
	/** Live article */
	LiveArticle = 'LIVE_ARTICLE',
	/** Live report */
	LiveReport = 'LIVE_REPORT',
	/** Page */
	Page = 'PAGE',
}

export type Corners = {
	__typename?: 'Corners';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type Cup = {
	__typename?: 'Cup';
	color?: Maybe<Scalars['String']['output']>;
	curentSession?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	logo?: Maybe<Scalars['String']['output']>;
	matches: Array<Match>;
	name: Scalars['String']['output'];
	shortName: Scalars['String']['output'];
	slug?: Maybe<Scalars['String']['output']>;
	stages?: Maybe<Array<Maybe<Stage>>>;
	teams: Array<Team>;
};

export type CupMatchesArgs = {
	after?: InputMaybe<Scalars['DateTimeTz']['input']>;
	before?: InputMaybe<Scalars['DateTimeTz']['input']>;
	stage?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CupStagesArgs = {
	name?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Information about pagination using a Relay style cursor. */
export type CursorPageInfo = {
	__typename?: 'CursorPageInfo';
	/** Number of nodes in the current page. */
	count: Scalars['Int']['output'];
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']['output'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']['output'];
	/** The cursor to continue paginating forwards. */
	nextCursor?: Maybe<Scalars['String']['output']>;
	/** The cursor to continue paginating backwards. */
	previousCursor?: Maybe<Scalars['String']['output']>;
};

/** Cursor Pagination information about the corresponding list of items. */
export type CursorPaginationInfo = {
	__typename?: 'CursorPaginationInfo';
	/** Count of nodes in current request. */
	count: Scalars['Int']['output'];
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']['output']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']['output'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']['output'];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']['output']>;
	/** Total number of node in connection. */
	total: Scalars['Int']['output'];
};

export type Dataset = {
	__typename?: 'Dataset';
	body: Scalars['JSON']['output'];
	created_at: Scalars['DateTime']['output'];
	datasetCollection: DatasetCollection;
	description: Scalars['String']['output'];
	/** Can only be called after `body` */
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	title: Scalars['String']['output'];
	updated_at: Scalars['DateTime']['output'];
};

export type DatasetBodyArgs = {
	postProcessor?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DatasetCollection = {
	__typename?: 'DatasetCollection';
	created_at: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	slug: Scalars['String']['output'];
	title: Scalars['String']['output'];
	updated_at: Scalars['DateTime']['output'];
};

export type DetailedName = {
	__typename?: 'DetailedName';
	firstName?: Maybe<Scalars['String']['output']>;
	lastName?: Maybe<Scalars['String']['output']>;
	middleName?: Maybe<Scalars['String']['output']>;
	prefix?: Maybe<Scalars['String']['output']>;
	suffix?: Maybe<Scalars['String']['output']>;
};

export type Display = {
	__typename?: 'Display';
	createdAt: Scalars['DateTimeTz']['output'];
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	position?: Maybe<Scalars['Int']['output']>;
	slug: Scalars['String']['output'];
	template?: Maybe<Scalars['String']['output']>;
	updatedAt: Scalars['DateTimeTz']['output'];
};

export type DisplayInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['Int']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	template?: InputMaybe<Scalars['String']['input']>;
};

export type Displayable = {
	id: Scalars['ID']['output'];
};

export type DisplayableInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type ElectionCompetitionProperties = {
	__typename?: 'ElectionCompetitionProperties';
	/**  Szavazásra jogosultak száma  */
	eligibleVoters?: Maybe<Scalars['Int']['output']>;
};

export type ElectionCompetitionStageStatistics = {
	__typename?: 'ElectionCompetitionStageStatistics';
	/**  Az urnában lévő szavazólapok száma  */
	ballotPapers?: Maybe<Scalars['Int']['output']>;
	/**  Az érvénytelen szavazatok száma  */
	invalidVotes?: Maybe<Scalars['Int']['output']>;
	/**  Az érvénytelen szavazatok aránya az összes szavazathoz  */
	invalidVotesPercentage?: Maybe<Scalars['Float']['output']>;
	/**  Feldolgozottsági százalék  */
	processingPercentage?: Maybe<Scalars['Float']['output']>;
	/**  Feldolgozottsági százalék  */
	processingPercentageTime?: Maybe<Scalars['DateTimeTz']['output']>;
	/**  Az érvényes szavazatok száma  */
	validVotes?: Maybe<Scalars['Int']['output']>;
	/**  Az érvényes szavazatok aránya az összes szavazathoz  */
	validVotesPercentage?: Maybe<Scalars['Float']['output']>;
	/**  Szavazásra jogosultak száma  */
	voters?: Maybe<Scalars['Int']['output']>;
	/**  Részvételi adat  */
	votersAppeared?: Maybe<Scalars['Int']['output']>;
	/**  Résztvételi adat aránya  */
	votersAppearedPercentage?: Maybe<Scalars['Float']['output']>;
	/**  Résztvételi adat aránya  */
	votersAppearedPercentageTime?: Maybe<Scalars['DateTimeTz']['output']>;
};

export type ElectionCompetitionStatistics = {
	__typename?: 'ElectionCompetitionStatistics';
	/**  Részvételi adatok  */
	participationData?: Maybe<Array<ParticipationData>>;
};

export type ElectionOutcome = Outcome & {
	__typename?: 'ElectionOutcome';
	competitionStage: CompetitionStage;
	competitor: Competitor;
	/**  Megnyerte a választást  */
	isWinner?: Maybe<Scalars['Boolean']['output']>;
	/**  Elért eredmény százalékos értéke  */
	percent?: Maybe<Scalars['Float']['output']>;
	/**  Megszerzett szavazatok száma  */
	votes?: Maybe<Scalars['Int']['output']>;
};

export enum EntityRelationshipType {
	Member = 'MEMBER',
	Successor = 'SUCCESSOR',
}

export enum EntityType {
	Coach = 'COACH',
	FootballPlayer = 'FOOTBALL_PLAYER',
	FootballTeam = 'FOOTBALL_TEAM',
	Independent = 'INDEPENDENT',
	MarkingOrganization = 'MARKING_ORGANIZATION',
	NationalGovernments = 'NATIONAL_GOVERNMENTS',
	Ngo = 'NGO',
	PoliticalParty = 'POLITICAL_PARTY',
	Politician = 'POLITICIAN',
	Referee = 'REFEREE',
}

export type Event = {
	__typename?: 'Event';
	description?: Maybe<Scalars['String']['output']>;
	happenedAt: Scalars['DateTimeTz']['output'];
	id: Scalars['ID']['output'];
	participants: Array<EventParticipant>;
	properties?: Maybe<Array<KeyValue>>;
	title: Scalars['String']['output'];
	type: EventType;
};

export type EventParticipantsArgs = {
	role?: InputMaybe<Array<EventParticipantRole>>;
};

export type EventParticipant = {
	__typename?: 'EventParticipant';
	id: Scalars['ID']['output'];
	participant: Participant;
	role?: Maybe<EventParticipantRole>;
};

export enum EventParticipantRole {
	Assist = 'ASSIST',
	CompetitionStage = 'COMPETITION_STAGE',
	IncomingPlayer = 'INCOMING_PLAYER',
	OutgoingPlayer = 'OUTGOING_PLAYER',
	PenalizedPlayer = 'PENALIZED_PLAYER',
	Scorer = 'SCORER',
	Victim = 'VICTIM',
}

export enum EventType {
	Corner = 'CORNER',
	Goal = 'GOAL',
	MissedPenalty = 'MISSED_PENALTY',
	Owngoal = 'OWNGOAL',
	Penalty = 'PENALTY',
	PenaltyShootoutGoal = 'PENALTY_SHOOTOUT_GOAL',
	PenaltyShootoutMiss = 'PENALTY_SHOOTOUT_MISS',
	Redcard = 'REDCARD',
	Substitution = 'SUBSTITUTION',
	Var = 'VAR',
	Yellowcard = 'YELLOWCARD',
	Yellowredcard = 'YELLOWREDCARD',
}

export type FootballCompetitionStageProperties = {
	__typename?: 'FootballCompetitionStageProperties';
	/**  Hosszabbítás első félidő */
	addedTimeFirstHalf?: Maybe<Scalars['Int']['output']>;
	/**  Hosszabbítás második félidő */
	addedTimeSecondHalf?: Maybe<Scalars['Int']['output']>;
	/**  Rájátszás  */
	extraMinute?: Maybe<Scalars['Int']['output']>;
	/**  Játékidő  */
	minutes?: Maybe<Scalars['Int']['output']>;
	/**  Ismeretlen résztvevő  */
	placeholder?: Maybe<Scalars['Boolean']['output']>;
	/**  Játékvezető  */
	referee?: Maybe<Name>;
	/**  Mérkőzés allapota  */
	status?: Maybe<Scalars['String']['output']>;
	/**  Hőmérséklet (celsius)  */
	temperature?: Maybe<Scalars['Float']['output']>;
	/**  Időjárás  */
	weatherCode?: Maybe<Scalars['String']['output']>;
	/**  Időjárás típusa  */
	weatherType?: Maybe<Scalars['String']['output']>;
};

export type FootballCompetitionStageStatistics = {
	__typename?: 'FootballCompetitionStageStatistics';
	attacksDangerous?: Maybe<AttacksDangerous>;
	attacksTotal?: Maybe<AttacksTotal>;
	corners?: Maybe<Corners>;
	freeKick?: Maybe<FreeKick>;
	offsides?: Maybe<Offsides>;
	passesPercentage?: Maybe<PassesPercentage>;
	passesTotal?: Maybe<PassesTotal>;
	possessiontime?: Maybe<Possessiontime>;
	shotsBlocked?: Maybe<ShotsBlocked>;
	shotsOffgoal?: Maybe<ShotsOffgoal>;
	shotsOngoal?: Maybe<ShotsOngoal>;
	shotsTotal?: Maybe<ShotsTotal>;
	throwIn?: Maybe<ThrowIn>;
};

export type FootballCompetitionStatistics = {
	__typename?: 'FootballCompetitionStatistics';
	standings?: Maybe<Array<FootballTeamStatistics>>;
};

export type FootballGroupStageOutcome = Outcome & {
	__typename?: 'FootballGroupStageOutcome';
	/**  Edző  */
	coach?: Maybe<Scalars['String']['output']>;
	competitor: Competitor;
	/**  Formáció  */
	formation?: Maybe<Scalars['String']['output']>;
	/**  Hazai vagy vendég csapat  */
	localOrVisitor: Scalars['String']['output'];
	/**  Pontok  */
	score?: Maybe<Scalars['Int']['output']>;
};

export type FootballKnockOutStageOutcome = Outcome & {
	__typename?: 'FootballKnockOutStageOutcome';
	/**  Edző  */
	coach?: Maybe<Scalars['String']['output']>;
	competitor: Competitor;
	/**  Formáció  */
	formation?: Maybe<Scalars['String']['output']>;
	/**  Hazai vagy vendég csapat  */
	localOrVisitor: Scalars['String']['output'];
	/**  Büntető pontok  */
	penaltyScore?: Maybe<Scalars['Int']['output']>;
	/**  Pontok  */
	score?: Maybe<Scalars['Int']['output']>;
};

export type FootballTeamStatistics = {
	__typename?: 'FootballTeamStatistics';
	draw: Scalars['Int']['output'];
	goalDifference: Scalars['Int']['output'];
	goalsAgainst: Scalars['Int']['output'];
	goalsScored: Scalars['Int']['output'];
	lost: Scalars['Int']['output'];
	matches: Scalars['Int']['output'];
	points: Scalars['Int']['output'];
	position: Scalars['Int']['output'];
	recentForm: Scalars['String']['output'];
	team: Organization;
	won: Scalars['Int']['output'];
};

export type FreeKick = {
	__typename?: 'FreeKick';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type FrontpageItem = {
	id: Scalars['ID']['output'];
};

export type FrontpageItemAd = FrontpageItem & {
	__typename?: 'FrontpageItemAd';
	ad_size?: Maybe<Scalars['String']['output']>;
	ad_unit_id?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	title: Scalars['String']['output'];
};

export type FrontpageItemArticle = FrontpageItem & {
	__typename?: 'FrontpageItemArticle';
	body?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	title: Scalars['String']['output'];
	title_link: Scalars['String']['output'];
};

export type FrontpageItemImage = FrontpageItem & {
	__typename?: 'FrontpageItemImage';
	id: Scalars['ID']['output'];
	img_url: Scalars['String']['output'];
};

export type FrontpageItemSeparator = FrontpageItem & {
	__typename?: 'FrontpageItemSeparator';
	id: Scalars['ID']['output'];
};

export type FrontpageItemSubhead = FrontpageItem & {
	__typename?: 'FrontpageItemSubhead';
	id: Scalars['ID']['output'];
	subhead: Scalars['String']['output'];
};

export enum Gender {
	Female = 'FEMALE',
	Male = 'MALE',
	Unknown = 'UNKNOWN',
}

export type Group = {
	__typename?: 'Group';
	cup?: Maybe<Cup>;
	groupScores: Array<GroupScore>;
	id: Scalars['ID']['output'];
	name?: Maybe<Scalars['String']['output']>;
	stage?: Maybe<Stage>;
	teams: Array<Team>;
};

export type GroupScore = {
	__typename?: 'GroupScore';
	drawCount?: Maybe<Scalars['Int']['output']>;
	getScore?: Maybe<Scalars['Int']['output']>;
	goalDifference?: Maybe<Scalars['Int']['output']>;
	integral?: Maybe<Scalars['Int']['output']>;
	lastUpdate?: Maybe<Scalars['DateTimeTz']['output']>;
	loseCount?: Maybe<Scalars['Int']['output']>;
	loseScore?: Maybe<Scalars['Int']['output']>;
	rank?: Maybe<Scalars['Int']['output']>;
	team?: Maybe<Team>;
	totalCount?: Maybe<Scalars['Int']['output']>;
	winCount?: Maybe<Scalars['Int']['output']>;
};

export type Human = HumanOrOrganization & {
	__typename?: 'Human';
	childs?: Maybe<Array<HumanOrOrganization>>;
	color?: Maybe<Scalars['String']['output']>;
	events?: Maybe<Array<Event>>;
	id: Scalars['ID']['output'];
	introduction?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	parents?: Maybe<Array<HumanOrOrganization>>;
	photoUrls?: Maybe<Array<Scalars['String']['output']>>;
	shortName?: Maybe<Scalars['String']['output']>;
	slug: Scalars['String']['output'];
	stageName: Scalars['String']['output'];
};

export type HumanEventsArgs = {
	role?: InputMaybe<Array<EventType>>;
};

export type HumanOrOrganization = {
	childs?: Maybe<Array<HumanOrOrganization>>;
	color?: Maybe<Scalars['String']['output']>;
	events?: Maybe<Array<Event>>;
	id: Scalars['ID']['output'];
	introduction?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	parents?: Maybe<Array<HumanOrOrganization>>;
	photoUrls?: Maybe<Array<Scalars['String']['output']>>;
	shortName?: Maybe<Scalars['String']['output']>;
	slug: Scalars['String']['output'];
	stageName: Scalars['String']['output'];
};

export type HumanOrOrganizationEventsArgs = {
	role?: InputMaybe<Array<EventType>>;
};

export type Image = MediaItem & {
	__typename?: 'Image';
	author: Scalars['String']['output'];
	bucket: Bucket;
	caption: Scalars['String']['output'];
	creditType: Scalars['String']['output'];
	height: Scalars['Int']['output'];
	id: Scalars['ID']['output'];
	meta?: Maybe<Scalars['JSON']['output']>;
	sourceLink?: Maybe<Scalars['String']['output']>;
	uploader?: Maybe<User>;
	url: Scalars['String']['output'];
	variations?: Maybe<Array<ImageVariation>>;
	width: Scalars['Int']['output'];
};

export type ImageInput = {
	author?: InputMaybe<Scalars['String']['input']>;
	bucket?: InputMaybe<BucketInput>;
	caption?: InputMaybe<Scalars['String']['input']>;
	creditType?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	sourceLink?: InputMaybe<Scalars['String']['input']>;
	uploader?: InputMaybe<AuthorInput>;
};

export type ImageVariation = {
	__typename?: 'ImageVariation';
	height: Scalars['Int']['output'];
	size: Scalars['String']['output'];
	url: Scalars['String']['output'];
	width: Scalars['Int']['output'];
};

export type KeyValue = {
	__typename?: 'KeyValue';
	key: Scalars['String']['output'];
	value?: Maybe<Scalars['Mixed']['output']>;
};

export type LatLon = {
	lat: Scalars['Float']['input'];
	lon: Scalars['Float']['input'];
};

export type Layout = {
	__typename?: 'Layout';
	createdAt: Scalars['DateTimeTz']['output'];
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	sections: Array<LayoutSection>;
	template: Scalars['String']['output'];
	updatedAt: Scalars['DateTimeTz']['output'];
};

export type LayoutInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	sections?: InputMaybe<Array<LayoutSectionInput>>;
	template?: InputMaybe<Scalars['String']['input']>;
};

export type LayoutSection = {
	__typename?: 'LayoutSection';
	createdAt: Scalars['DateTimeTz']['output'];
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	position: Scalars['Int']['output'];
	template?: Maybe<Scalars['String']['output']>;
	updatedAt: Scalars['DateTimeTz']['output'];
};

export type LayoutSectionInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['Int']['input']>;
	template?: InputMaybe<Scalars['String']['input']>;
};

export type Lineup = {
	__typename?: 'Lineup';
	awayBackupPlayers: Array<LineupPlayer>;
	awayFormation?: Maybe<Scalars['String']['output']>;
	awayPlayers: Array<LineupPlayer>;
	awayTeam?: Maybe<Team>;
	homeBackupPlayers: Array<LineupPlayer>;
	homeFormation?: Maybe<Scalars['String']['output']>;
	homePlayers: Array<LineupPlayer>;
	homeTeam?: Maybe<Team>;
};

export type LineupPlayer = {
	__typename?: 'LineupPlayer';
	number?: Maybe<Scalars['Int']['output']>;
	player: Person;
	position?: Maybe<LineupPosition>;
};

export enum LineupPosition {
	/** Attacking midfielder */
	AttackingMidfielder = 'ATTACKING_MIDFIELDER',
	/** Defender */
	Defender = 'DEFENDER',
	/** Defending midfielder */
	DefendingMidfielder = 'DEFENDING_MIDFIELDER',
	/** Forward */
	Forward = 'FORWARD',
	/** Goalkeeper */
	Goalkeeper = 'GOALKEEPER',
	/** Midfielder */
	Midfielder = 'MIDFIELDER',
}

export type Link = {
	__typename?: 'Link';
	title: Scalars['String']['output'];
	url: Scalars['String']['output'];
};

export enum LinkType {
	Analysis = 'ANALYSIS',
	Mediation = 'MEDIATION',
	Summary = 'SUMMARY',
	Unknown = 'UNKNOWN',
}

export type ListElectionCompetitionStageStatistics = {
	__typename?: 'ListElectionCompetitionStageStatistics';
	/**  Betöltetlen mandátumok száma  */
	freeMandates?: Maybe<Scalars['Int']['output']>;
	/**  Elnyert mandátumok száma  */
	mandates?: Maybe<Scalars['Int']['output']>;
	/**  Az elnyerteken felüli, kedvezményes nemzetiségi mandátumok száma  */
	nationalMandates?: Maybe<Scalars['Int']['output']>;
};

export type ListElectionOutcome = Outcome & {
	__typename?: 'ListElectionOutcome';
	competitionStage: CompetitionStage;
	competitor: Competitor;
	/**  Megszerzett egyéni mandátumok  */
	individualMandate?: Maybe<Scalars['Int']['output']>;
	/**  Megszerzett egyéni mandátumok százaléka  */
	individualMandatePercent?: Maybe<Scalars['Float']['output']>;
	/**  Elért eredmény százalékos értéke  */
	letterPercent?: Maybe<Scalars['Float']['output']>;
	/**  Megszerzett szavazatok száma  */
	letterVotes?: Maybe<Scalars['Int']['output']>;
	/**  Megszerzett listás mandátumok  */
	listMandate?: Maybe<Scalars['Int']['output']>;
	/**  Megszerzett listás mandátumok százaléka  */
	listMandatePercent?: Maybe<Scalars['Float']['output']>;
	/**  Megszerzett mandátumok  */
	mandate?: Maybe<Scalars['Int']['output']>;
	/**  Megszerzett mandátumok  */
	mandatePercent?: Maybe<Scalars['Float']['output']>;
	/**  Elért eredmény százalékos értéke  */
	percent?: Maybe<Scalars['Float']['output']>;
	/**  Megszerzett szavazatok száma  */
	votes?: Maybe<Scalars['Int']['output']>;
};

export type LiveArticle = Content &
	Displayable &
	Searchable & {
		__typename?: 'LiveArticle';
		authors: Array<Author>;
		body: Array<Maybe<Scalars['String']['output']>>;
		bodyType: ContentBodyType;
		bucket: Bucket;
		categories: Array<Category>;
		collections: Array<Collection>;
		counters: Array<ContentCounter>;
		coverImage?: Maybe<Image>;
		createdAt: Scalars['DateTimeTz']['output'];
		excerpt?: Maybe<Scalars['String']['output']>;
		featuredImage?: Maybe<Image>;
		id: Scalars['ID']['output'];
		localOptions?: Maybe<Array<Option>>;
		mateType: ContentMateType;
		meta: Array<Meta>;
		options: Array<Option>;
		publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
		publisher?: Maybe<Author>;
		reports: LiveReportConnection;
		slug: Scalars['String']['output'];
		tags: Array<Tag>;
		title: Scalars['String']['output'];
		updatedAt: Scalars['DateTimeTz']['output'];
		url?: Maybe<Scalars['String']['output']>;
		userHasAccess: Scalars['Boolean']['output'];
	};

export type LiveArticleReportsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	byOption?: InputMaybe<ByOptionInput>;
	cursorInclusive?: InputMaybe<Scalars['Boolean']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Array<LiveArticleReportsOrderByOrderByClause>>;
};

/** Allowed column names for LiveArticle.reports.orderBy. */
export enum LiveArticleReportsOrderByColumn {
	PublishedAt = 'PUBLISHED_AT',
}

/** Order by clause for LiveArticle.reports.orderBy. */
export type LiveArticleReportsOrderByOrderByClause = {
	/** The column that is used for ordering. */
	column: LiveArticleReportsOrderByColumn;
	/** The direction that is used for ordering. */
	order: SortOrder;
};

export type LiveReport = Content &
	Displayable & {
		__typename?: 'LiveReport';
		authors: Array<Author>;
		body: Array<Maybe<Scalars['String']['output']>>;
		bodyType: ContentBodyType;
		bucket: Bucket;
		categories: Array<Category>;
		collections: Array<Collection>;
		counters: Array<ContentCounter>;
		coverImage?: Maybe<Image>;
		createdAt: Scalars['DateTimeTz']['output'];
		excerpt?: Maybe<Scalars['String']['output']>;
		featuredImage?: Maybe<Image>;
		highlighted?: Maybe<Scalars['Boolean']['output']>;
		id: Scalars['ID']['output'];
		isOther?: Maybe<Scalars['Boolean']['output']>;
		link?: Maybe<Scalars['String']['output']>;
		liveArticle?: Maybe<LiveArticle>;
		localOptions?: Maybe<Array<Option>>;
		mateType: ContentMateType;
		meta: Array<Meta>;
		options: Array<Option>;
		publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
		publisher?: Maybe<Author>;
		slug: Scalars['String']['output'];
		tags: Array<Tag>;
		title: Scalars['String']['output'];
		updatedAt: Scalars['DateTimeTz']['output'];
		url?: Maybe<Scalars['String']['output']>;
		userHasAccess: Scalars['Boolean']['output'];
	};

/** A paginated list of LiveReport edges. */
export type LiveReportConnection = {
	__typename?: 'LiveReportConnection';
	/** A list of LiveReport edges. */
	edges: Array<LiveReportEdge>;
	/** Live Reports Stats informations. */
	liveReportsStats: LiveReportStats;
	/** Pagination information about the list of edges. */
	pageInfo: CursorPaginationInfo;
};

/** An edge that contains a node of type LiveReport and a cursor. */
export type LiveReportEdge = {
	__typename?: 'LiveReportEdge';
	/** A unique cursor that can be used for pagination. */
	cursor: Scalars['String']['output'];
	/** The LiveReport node. */
	node: LiveReport;
};

export type LiveReportInput = {
	authors?: InputMaybe<Array<AuthorInput>>;
	body?: InputMaybe<Scalars['String']['input']>;
	bodyType?: InputMaybe<ContentBodyType>;
	createdAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	highlighted?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	isOther?: InputMaybe<Scalars['Boolean']['input']>;
	link?: InputMaybe<Scalars['String']['input']>;
	liveArticle: Scalars['ID']['input'];
	publishedAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	publisher?: InputMaybe<AuthorInput>;
	slug?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
};

/** An edge that contains a node of type LiveReport and a cursor. */
export type LiveReportStats = {
	__typename?: 'LiveReportStats';
	highlighted?: Maybe<Scalars['Int']['output']>;
	latestReport?: Maybe<Scalars['DateTimeTz']['output']>;
	postsBehindTheCursor?: Maybe<Scalars['Int']['output']>;
};

export type Mainpage = {
	__typename?: 'Mainpage';
	blog: Blog;
	createdAt: Scalars['DateTimeTz']['output'];
	description?: Maybe<Scalars['String']['output']>;
	displays: Array<Display>;
	id: Scalars['ID']['output'];
	items: Array<MainpageItem>;
	layout: Layout;
	name: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
	publisher?: Maybe<Author>;
	slug: Scalars['String']['output'];
	updatedAt: Scalars['DateTimeTz']['output'];
};

export type MainpageInput = {
	blog?: InputMaybe<BlogInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	items?: InputMaybe<Array<InputMaybe<MainpageItemInput>>>;
	layout?: InputMaybe<LayoutInput>;
	name?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
	publisher?: InputMaybe<AuthorInput>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type MainpageItem = {
	display?: Maybe<Display>;
	id: Scalars['ID']['output'];
	layoutSection: LayoutSection;
	options: Array<Option>;
	position: Scalars['Int']['output'];
};

export type MainpageItemBase = MainpageItem & {
	__typename?: 'MainpageItemBase';
	display?: Maybe<Display>;
	id: Scalars['ID']['output'];
	layoutSection: LayoutSection;
	options: Array<Option>;
	position: Scalars['Int']['output'];
};

export type MainpageItemInput = {
	content?: InputMaybe<DisplayableInput>;
	display?: InputMaybe<DisplayInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	layoutSection?: InputMaybe<LayoutSectionInput>;
	options?: InputMaybe<Array<OptionInput>>;
	position?: InputMaybe<Scalars['Int']['input']>;
};

export type MainpageItemWithContent = MainpageItem & {
	__typename?: 'MainpageItemWithContent';
	content?: Maybe<Displayable>;
	display?: Maybe<Display>;
	featuredImage?: Maybe<Image>;
	id: Scalars['ID']['output'];
	layoutSection: LayoutSection;
	options: Array<Option>;
	position: Scalars['Int']['output'];
};

export type Match = {
	__typename?: 'Match';
	away: Team;
	cup?: Maybe<Cup>;
	events: Array<MatchEvent>;
	group?: Maybe<Group>;
	halfTimeDate?: Maybe<Scalars['DateTimeTz']['output']>;
	hasLineup?: Maybe<Scalars['Boolean']['output']>;
	home: Team;
	id: Scalars['ID']['output'];
	lineup?: Maybe<Lineup>;
	links?: Maybe<Array<Link>>;
	score: MatchScore;
	stage: Stage;
	startDate?: Maybe<Scalars['DateTimeTz']['output']>;
	state?: Maybe<MatchState>;
	stateNum?: Maybe<Scalars['Int']['output']>;
	stats: Array<MatchStat>;
	temperature?: Maybe<Scalars['String']['output']>;
	venue?: Maybe<Venue>;
	weather?: Maybe<Scalars['String']['output']>;
};

export type MatchEvent = {
	__typename?: 'MatchEvent';
	assistPlayer?: Maybe<Person>;
	/** @deprecated Typo */
	assitPlayer?: Maybe<Person>;
	id: Scalars['ID']['output'];
	minute?: Maybe<Scalars['Int']['output']>;
	player?: Maybe<Person>;
	type?: Maybe<MatchEventType>;
};

export enum MatchEventType {
	/** Goal */
	Goal = 'GOAL',
	/** Own goal */
	OwnGoal = 'OWN_GOAL',
	/** Penalty missed */
	PenaltyMissed = 'PENALTY_MISSED',
	/** Penalty scored */
	PenaltyScored = 'PENALTY_SCORED',
	/** Red card */
	RedCard = 'RED_CARD',
	/** Second yellow card */
	SecondYellowCard = 'SECOND_YELLOW_CARD',
	/** Substitution */
	Substitution = 'SUBSTITUTION',
	/** Yellow card */
	YellowCard = 'YELLOW_CARD',
}

export type MatchScore = {
	__typename?: 'MatchScore';
	awayScore?: Maybe<Scalars['Int']['output']>;
	extraAwayScore?: Maybe<Scalars['Int']['output']>;
	extraHomeScore?: Maybe<Scalars['Int']['output']>;
	extraTimeStatus?: Maybe<Scalars['Int']['output']>;
	homeScore?: Maybe<Scalars['Int']['output']>;
	kickOff?: Maybe<Scalars['Int']['output']>;
	lastUpdate?: Maybe<Scalars['DateTimeTz']['output']>;
	minute?: Maybe<Scalars['Int']['output']>;
	penAwayScore?: Maybe<Scalars['Int']['output']>;
	penHomeScore?: Maybe<Scalars['Int']['output']>;
	twoRoundsAwayScore?: Maybe<Scalars['Int']['output']>;
	twoRoundsHomeScore?: Maybe<Scalars['Int']['output']>;
	winner?: Maybe<Scalars['Int']['output']>;
};

export type MatchStat = {
	__typename?: 'MatchStat';
	away?: Maybe<Scalars['String']['output']>;
	home?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	type?: Maybe<MatchStatType>;
};

export enum MatchStatType {
	/** Assist */
	Assist = 'ASSIST',
	/** Attacks */
	Attacks = 'ATTACKS',
	/** Beat */
	Beat = 'BEAT',
	/** Challenge */
	Challenge = 'CHALLENGE',
	/** Corner */
	Corner = 'CORNER',
	/** Corners overtime */
	CornersOvertime = 'CORNERS_OVERTIME',
	/** Dangerous attacks */
	DangerousAttacks = 'DANGEROUS_ATTACKS',
	/** Dispossessed */
	Dispossessed = 'DISPOSSESSED',
	/** First corner */
	FirstCorner = 'FIRST_CORNER',
	/** First half corner */
	FirstHalfCorner = 'FIRST_HALF_CORNER',
	/** First half possession */
	FirstHalfPossession = 'FIRST_HALF_POSSESSION',
	/** First kick */
	FirstKick = 'FIRST_KICK',
	/** First offside */
	FirstOffside = 'FIRST_OFFSIDE',
	/** First substitution */
	FirstSubstitution = 'FIRST_SUBSTITUTION',
	/** First yellow card */
	FirstYellowCard = 'FIRST_YELLOW_CARD',
	/** Fouls */
	Fouls = 'FOULS',
	/** Free kick */
	FreeKick = 'FREE_KICK',
	/** Goalkeeper come out */
	GoalkeeperComeOut = 'GOALKEEPER_COME_OUT',
	/** Header */
	Header = 'HEADER',
	/** Last corner */
	LastCorner = 'LAST_CORNER',
	/** Last offside */
	LastOffside = 'LAST_OFFSIDE',
	/** Last substitution */
	LastSubstitution = 'LAST_SUBSTITUTION',
	/** Last yellow card */
	LastYellowCard = 'LAST_YELLOW_CARD',
	/** Long pass */
	LongPass = 'LONG_PASS',
	/** Offside */
	Offside = 'OFFSIDE',
	/** Offside overtime */
	OffsideOvertime = 'OFFSIDE_OVERTIME',
	/** Own goal */
	OwnGoal = 'OWN_GOAL',
	/** Passes */
	Passes = 'PASSES',
	/** Pass success */
	PassSuccess = 'PASS_SUCCESS',
	/** Possession */
	Possession = 'POSSESSION',
	/** Red card */
	RedCard = 'RED_CARD',
	/** Save */
	Save = 'SAVE',
	/** Short pass */
	ShortPass = 'SHORT_PASS',
	/** Shots off target */
	ShotsOffTarget = 'SHOTS_OFF_TARGET',
	/** Shots on target */
	ShotsOnTarget = 'SHOTS_ON_TARGET',
	/** Shot blocked */
	ShotBlocked = 'SHOT_BLOCKED',
	/** Substitution */
	Substitution = 'SUBSTITUTION',
	/** Substitution overtime */
	SubstitutionOvertime = 'SUBSTITUTION_OVERTIME',
	/** Successful center */
	SuccessfulCenter = 'SUCCESSFUL_CENTER',
	/** Successful header */
	SuccessfulHeader = 'SUCCESSFUL_HEADER',
	/** Successful intercept */
	SuccessfulIntercept = 'SUCCESSFUL_INTERCEPT',
	/** Tackle */
	Tackle = 'TACKLE',
	/** Throw in */
	ThrowIn = 'THROW_IN',
	/** Total shots */
	TotalShots = 'TOTAL_SHOTS',
	/** Woodwork */
	Woodwork = 'WOODWORK',
	/** Yellow card */
	YellowCard = 'YELLOW_CARD',
	/** Yellow card overtime */
	YellowCardOvertime = 'YELLOW_CARD_OVERTIME',
}

export enum MatchState {
	/** Cancelled */
	Cancelled = 'CANCELLED',
	/** Extra time */
	ExtraTime = 'EXTRA_TIME',
	/** Finished */
	Finished = 'FINISHED',
	/** First half */
	FirstHalf = 'FIRST_HALF',
	/** Halftime break */
	HalftimeBreak = 'HALFTIME_BREAK',
	/** Interrupted */
	Interrupted = 'INTERRUPTED',
	/** Not started */
	NotStarted = 'NOT_STARTED',
	/** Penalty */
	Penalty = 'PENALTY',
	/** Postponed */
	Postponed = 'POSTPONED',
	/** Second half */
	SecondHalf = 'SECOND_HALF',
	/** Tbd */
	Tbd = 'TBD',
	/** Terminated */
	Terminated = 'TERMINATED',
}

export type MediaItem = {
	author: Scalars['String']['output'];
	bucket: Bucket;
	caption: Scalars['String']['output'];
	creditType: Scalars['String']['output'];
	id?: Maybe<Scalars['ID']['output']>;
	sourceLink?: Maybe<Scalars['String']['output']>;
	uploader?: Maybe<User>;
	url: Scalars['String']['output'];
};

export type MediaItemInput = {
	author?: InputMaybe<Scalars['String']['input']>;
	bucket?: InputMaybe<BucketInput>;
	caption?: InputMaybe<Scalars['String']['input']>;
	creditType?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	meta?: InputMaybe<Array<InputMaybe<MetaInput>>>;
	sourceLink?: InputMaybe<Scalars['String']['input']>;
	type?: InputMaybe<MediaItemType>;
	uploader?: InputMaybe<AuthorInput>;
};

/** Media item type */
export enum MediaItemType {
	/** Document */
	Document = 'DOCUMENT',
	/** Image */
	Image = 'IMAGE',
	/** Other */
	Other = 'OTHER',
	/** Sound */
	Sound = 'SOUND',
	/** Video */
	Video = 'VIDEO',
}

export type Member = {
	__typename?: 'Member';
	color?: Maybe<Scalars['String']['output']>;
	dateOfBirth?: Maybe<Scalars['Date']['output']>;
	dateOfDeath?: Maybe<Scalars['Date']['output']>;
	gender: Gender;
	id: Scalars['ID']['output'];
	introduction?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	outcome: PersonListElcetionOutcome;
	photoUrls?: Maybe<Array<Scalars['String']['output']>>;
	slug: Scalars['String']['output'];
	stageName?: Maybe<Scalars['String']['output']>;
};

export type Meta = {
	__typename?: 'Meta';
	id: Scalars['ID']['output'];
	key: Scalars['String']['output'];
	value: Scalars['String']['output'];
};

export type MetaInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	key?: InputMaybe<Scalars['String']['input']>;
	value?: InputMaybe<Scalars['String']['input']>;
};

export type MobileContent = {
	id: Scalars['ID']['output'];
};

export type MobileContentAd = MobileContent & {
	__typename?: 'MobileContentAd';
	ad_size?: Maybe<Scalars['String']['output']>;
	ad_unit_id?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	title: Scalars['String']['output'];
};

export type MobileContentArticle = MobileContent & {
	__typename?: 'MobileContentArticle';
	author: Scalars['String']['output'];
	content: Scalars['String']['output'];
	highlight: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	image?: Maybe<Scalars['String']['output']>;
	published_at: Scalars['String']['output'];
	target: Scalars['String']['output'];
	title: Scalars['String']['output'];
	url: Scalars['String']['output'];
};

export type MobileMainpage = {
	__typename?: 'MobileMainpage';
	feed: Array<MobileContent>;
	frontpage: Array<FrontpageItem>;
};

export type Mutation = {
	__typename?: 'Mutation';
	content: Content;
	contentCounter?: Maybe<Content>;
	liveReport: LiveReport;
	mainpage: Mainpage;
	mediaItem: MediaItem;
	recommendations: Array<Recommendation>;
	streamer?: Maybe<Stream>;
};

export type MutationContentArgs = {
	input: ContentInput;
};

export type MutationContentCounterArgs = {
	contentId: Scalars['ID']['input'];
	name: ContentCounterType;
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type MutationLiveReportArgs = {
	input: LiveReportInput;
};

export type MutationMainpageArgs = {
	input: MainpageInput;
};

export type MutationMediaItemArgs = {
	input: MediaItemInput;
};

export type MutationRecommendationsArgs = {
	input?: InputMaybe<Array<RecommendationInput>>;
};

export type MutationStreamerArgs = {
	action: StreamerAction;
	author: Scalars['Email']['input'];
	network: Scalars['ID']['input'];
};

export type Name = {
	__typename?: 'Name';
	commonName?: Maybe<Scalars['String']['output']>;
	firstName?: Maybe<Scalars['String']['output']>;
	fullName?: Maybe<Scalars['String']['output']>;
	lastName?: Maybe<Scalars['String']['output']>;
};

export type Offsides = {
	__typename?: 'Offsides';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type Option = {
	__typename?: 'Option';
	defaultValue?: Maybe<Scalars['Mixed']['output']>;
	id: Scalars['String']['output'];
	key: Scalars['String']['output'];
	level?: Maybe<Scalars['String']['output']>;
	value?: Maybe<Scalars['Mixed']['output']>;
	valueDefinition?: Maybe<Scalars['JSON']['output']>;
	valueType: OptionValueType;
};

export type OptionInput = {
	defaultValue?: InputMaybe<Scalars['Mixed']['input']>;
	id?: InputMaybe<Scalars['String']['input']>;
	key?: InputMaybe<Scalars['String']['input']>;
	value?: InputMaybe<Scalars['Mixed']['input']>;
	valueDefinition?: InputMaybe<Scalars['JSON']['input']>;
	valueType?: InputMaybe<OptionValueType>;
};

/** Option value type */
export enum OptionValueType {
	/** List */
	List = 'LIST',
	/** Logical */
	Logical = 'LOGICAL',
	/** Map */
	Map = 'MAP',
	/** Numeric */
	Numeric = 'NUMERIC',
	/** Text */
	Text = 'TEXT',
}

/** Order by */
export enum OrderBy {
	/** Asc */
	Asc = 'ASC',
	/** Desc */
	Desc = 'DESC',
}

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

export type Organization = HumanOrOrganization & {
	__typename?: 'Organization';
	childs?: Maybe<Array<HumanOrOrganization>>;
	color?: Maybe<Scalars['String']['output']>;
	dateOfFoundation?: Maybe<Scalars['Date']['output']>;
	dateOfTermination?: Maybe<Scalars['Date']['output']>;
	events?: Maybe<Array<Event>>;
	id: Scalars['ID']['output'];
	introduction?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	parents?: Maybe<Array<HumanOrOrganization>>;
	photoUrls?: Maybe<Array<Scalars['String']['output']>>;
	relatedCompetitors?: Maybe<Array<Competitor>>;
	shortName?: Maybe<Scalars['String']['output']>;
	slug: Scalars['String']['output'];
	stageName: Scalars['String']['output'];
};

export type OrganizationEventsArgs = {
	role?: InputMaybe<Array<EventType>>;
};

export type OrganizationRelatedCompetitorsArgs = {
	competitionStagesType?: InputMaybe<Array<CompetitionStageType>>;
};

export type Other = MediaItem & {
	__typename?: 'Other';
	author: Scalars['String']['output'];
	bucket: Bucket;
	caption: Scalars['String']['output'];
	creditType: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	meta?: Maybe<Scalars['JSON']['output']>;
	sourceLink?: Maybe<Scalars['String']['output']>;
	uploader?: Maybe<User>;
	url: Scalars['String']['output'];
};

export type Outcome = {
	competitor: Competitor;
};

export type Page = Content &
	Displayable &
	Searchable & {
		__typename?: 'Page';
		authors: Array<Author>;
		body: Array<Maybe<Scalars['String']['output']>>;
		bodyType: ContentBodyType;
		bucket: Bucket;
		categories: Array<Category>;
		collections: Array<Collection>;
		counters: Array<ContentCounter>;
		coverImage?: Maybe<Image>;
		createdAt: Scalars['DateTimeTz']['output'];
		excerpt?: Maybe<Scalars['String']['output']>;
		featuredImage?: Maybe<Image>;
		id: Scalars['ID']['output'];
		localOptions?: Maybe<Array<Option>>;
		mateType: ContentMateType;
		meta: Array<Meta>;
		options: Array<Option>;
		partners: Array<Partner>;
		publishedAt?: Maybe<Scalars['DateTimeTz']['output']>;
		publisher?: Maybe<Author>;
		slug: Scalars['String']['output'];
		tags: Array<Tag>;
		title: Scalars['String']['output'];
		updatedAt: Scalars['DateTimeTz']['output'];
		url?: Maybe<Scalars['String']['output']>;
		userHasAccess: Scalars['Boolean']['output'];
	};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
	__typename?: 'PageInfo';
	/** Number of nodes in the current page. */
	count?: Maybe<Scalars['Int']['output']>;
	/** Index of the current page. */
	currentPage?: Maybe<Scalars['Int']['output']>;
	/** The cursor to continue paginating forwards. */
	endCursor?: Maybe<Scalars['String']['output']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']['output'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']['output'];
	/** Index of the last available page. */
	lastPage?: Maybe<Scalars['Int']['output']>;
	/** The cursor to continue paginating backwards. */
	startCursor?: Maybe<Scalars['String']['output']>;
	/** Total number of nodes in the paginated connection. */
	total?: Maybe<Scalars['Int']['output']>;
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

export type Participant = CompetitionStage | Human | Organization;

export type ParticipationData = {
	__typename?: 'ParticipationData';
	/**  Megjelentek száma  */
	appeared?: Maybe<Scalars['Int']['output']>;
	/**  Részvételi arány  */
	percent?: Maybe<Scalars['Float']['output']>;
	/**  Jelentés ideje  */
	reportTime?: Maybe<Scalars['Time']['output']>;
	/**  Választópolgárok száma  */
	voters?: Maybe<Scalars['Int']['output']>;
};

export type Partner = Searchable &
	Taxonomy & {
		__typename?: 'Partner';
		bucket: Bucket;
		colors?: Maybe<Scalars['Mixed']['output']>;
		description?: Maybe<Scalars['Mixed']['output']>;
		id: Scalars['ID']['output'];
		listTemplate?: Maybe<Scalars['Mixed']['output']>;
		name: Scalars['String']['output'];
		picture?: Maybe<Scalars['Mixed']['output']>;
		slug: Scalars['String']['output'];
		tagline?: Maybe<Scalars['String']['output']>;
		title?: Maybe<Scalars['String']['output']>;
		url?: Maybe<Scalars['String']['output']>;
	};

export type PartnerTaxonomyInput = {
	colors?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	listTemplate?: InputMaybe<Scalars['Mixed']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	tagline?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
};

export type PassesPercentage = {
	__typename?: 'PassesPercentage';
	local?: Maybe<Scalars['Float']['output']>;
	visitor?: Maybe<Scalars['Float']['output']>;
};

export type PassesTotal = {
	__typename?: 'PassesTotal';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type Person = {
	__typename?: 'Person';
	birthDay?: Maybe<Scalars['Date']['output']>;
	detailedName?: Maybe<DetailedName>;
	feet?: Maybe<PersonFeet>;
	height?: Maybe<Scalars['Int']['output']>;
	id: Scalars['ID']['output'];
	jerseyName?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	photo?: Maybe<Scalars['String']['output']>;
	position?: Maybe<Scalars['String']['output']>;
	team?: Maybe<Team>;
	weight?: Maybe<Scalars['Int']['output']>;
};

export enum PersonFeet {
	/** Both */
	Both = 'BOTH',
	/** Left */
	Left = 'LEFT',
	/** Right */
	Right = 'RIGHT',
}

export type PersonListElcetionOutcome = Outcome & {
	__typename?: 'PersonListElcetionOutcome';
	competitor: Competitor;
	/**  Megszerzett szavazatok száma  */
	isWinner?: Maybe<Scalars['Boolean']['output']>;
	order?: Maybe<Scalars['Int']['output']>;
};

export type PersonListElectionOutcome = Outcome & {
	__typename?: 'PersonListElectionOutcome';
	competitor: Competitor;
	/**  Megszerzett szavazatok száma  */
	isWinner?: Maybe<Scalars['Boolean']['output']>;
	order?: Maybe<Scalars['Int']['output']>;
};

export type Player = {
	__typename?: 'Player';
	dateOfBirth?: Maybe<Scalars['Date']['output']>;
	formationPosition?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	number?: Maybe<Scalars['Int']['output']>;
	photoUrls?: Maybe<Array<Scalars['String']['output']>>;
	position?: Maybe<Scalars['String']['output']>;
	shortName?: Maybe<Scalars['String']['output']>;
	slug: Scalars['String']['output'];
};

export type Possessiontime = {
	__typename?: 'Possessiontime';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
	__typename?: 'Query';
	area?: Maybe<Area>;
	areas: AreaPaginator;
	author?: Maybe<Author>;
	buckets: BucketConnection;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	competition: Competition;
	competitionSeries?: Maybe<CompetitionSeries>;
	competitionSeriesList: CompetitionSeriesPaginator;
	competitionStage?: Maybe<CompetitionStage>;
	competitionStages: CompetitionStagePaginator;
	competitions: CompetitionPaginator;
	competitor?: Maybe<Competitor>;
	competitors: CompetitorPaginator;
	content?: Maybe<Content>;
	contentInviteToken?: Maybe<ContentInviteToken>;
	contentPreview?: Maybe<Content>;
	contents: ContentConnection;
	contentsCount?: Maybe<Array<ContentCountsYear>>;
	cup?: Maybe<Cup>;
	datasets: Array<Dataset>;
	groups?: Maybe<Array<Maybe<Group>>>;
	mainpage?: Maybe<Mainpage>;
	match?: Maybe<Match>;
	mediaItem?: Maybe<MediaItem>;
	mobileMainpage?: Maybe<MobileMainpage>;
	organization?: Maybe<Organization>;
	partner?: Maybe<Partner>;
	person?: Maybe<Human>;
	recommendation: Array<Recommendation>;
	search: SearchableConnection;
	stream?: Maybe<Stream>;
	tag?: Maybe<Tag>;
	teams?: Maybe<Array<Maybe<Team>>>;
};

export type QueryAreaArgs = {
	byName?: InputMaybe<Scalars['String']['input']>;
	byType?: InputMaybe<Array<AreaType>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAreasArgs = {
	first?: Scalars['Int']['input'];
	nearest?: InputMaybe<LatLon>;
	page?: InputMaybe<Scalars['Int']['input']>;
	subType?: InputMaybe<Array<InputMaybe<AreaSubType>>>;
	type?: InputMaybe<Array<AreaType>>;
	where?: InputMaybe<AreaWhereInput>;
};

export type QueryAuthorArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBucketsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	cursorInclusive?: InputMaybe<Scalars['Boolean']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCategoryArgs = {
	fromBucket?: InputMaybe<QueryCategoryFromBucketWhereHasConditions>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCollectionArgs = {
	fromBucket?: InputMaybe<QueryCollectionFromBucketWhereHasConditions>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCompetitionArgs = {
	area?: InputMaybe<Array<AreaFilterInput>>;
	id: Scalars['ID']['input'];
};

export type QueryCompetitionSeriesArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCompetitionSeriesListArgs = {
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	season?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	type?: InputMaybe<Array<CompetitionSeriesType>>;
};

export type QueryCompetitionStageArgs = {
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCompetitionStagesArgs = {
	after?: InputMaybe<Scalars['DateTimeTz']['input']>;
	area?: InputMaybe<AreaFilterInput>;
	before?: InputMaybe<Scalars['DateTimeTz']['input']>;
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']>>;
	first?: Scalars['Int']['input'];
	orderBy?: InputMaybe<Array<QueryCompetitionStagesOrderByOrderByClause>>;
	page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCompetitionsArgs = {
	area?: InputMaybe<AreaFilterInput>;
	competitionSeriesSlug?: InputMaybe<Array<Scalars['String']['input']>>;
	competitionSeriesType?: InputMaybe<Array<CompetitionSeriesType>>;
	first?: Scalars['Int']['input'];
	page?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<Array<CompetitionType>>;
};

export type QueryCompetitorArgs = {
	area?: InputMaybe<Scalars['String']['input']>;
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']>>;
	competitionStagesType?: InputMaybe<Array<CompetitionStageType>>;
	owner?: InputMaybe<Scalars['String']['input']>;
	ownerType?: InputMaybe<Array<EntityType>>;
};

export type QueryCompetitorsArgs = {
	area?: InputMaybe<AreaFilterInput>;
	byRelationship?: InputMaybe<CompetitiorFilterByRelationshipInput>;
	competitionSeriesSlug?: InputMaybe<Array<Scalars['String']['input']>>;
	competitionSeriesType?: InputMaybe<Array<CompetitionSeriesType>>;
	competitionStagesType?: InputMaybe<Array<CompetitionStageType>>;
	first?: Scalars['Int']['input'];
	owner?: InputMaybe<Scalars['String']['input']>;
	ownerType?: InputMaybe<Array<EntityType>>;
	page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryContentArgs = {
	fromBucket?: InputMaybe<QueryContentFromBucketWhereHasConditions>;
	id?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['Date']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	withUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentInviteTokenArgs = {
	id: Scalars['ID']['input'];
};

export type QueryContentPreviewArgs = {
	expires?: InputMaybe<Scalars['DateTime']['input']>;
	previewId: Scalars['ID']['input'];
	signature?: InputMaybe<Scalars['String']['input']>;
};

export type QueryContentsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	byAuthor?: InputMaybe<QueryContentsByAuthorWhereHasConditions>;
	byDate?: InputMaybe<QueryContentsByDateWhereConditions>;
	byOption?: InputMaybe<ByOptionInput>;
	byType?: InputMaybe<Array<ContentType>>;
	cursorInclusive?: InputMaybe<Scalars['Boolean']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	fromBucket?: InputMaybe<QueryContentsFromBucketWhereHasConditions>;
	hasCategory?: InputMaybe<QueryContentsHasCategoryWhereHasConditions>;
	hasCollection?: InputMaybe<QueryContentsHasCollectionWhereHasConditions>;
	hasPartner?: InputMaybe<QueryContentsHasPartnerWhereHasConditions>;
	hasTag?: InputMaybe<QueryContentsHasTagWhereHasConditions>;
	orderBy?: InputMaybe<Array<QueryContentsOrderByOrderByClause>>;
	withUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentsCountArgs = {
	byAuthor?: InputMaybe<Array<Scalars['String']['input']>>;
	byOption?: InputMaybe<ByOptionInput>;
	byType?: InputMaybe<Array<ContentType>>;
	fromBucket?: InputMaybe<Array<Scalars['String']['input']>>;
	hasCategory?: InputMaybe<Array<Scalars['String']['input']>>;
	hasCollection?: InputMaybe<Array<Scalars['String']['input']>>;
	hasTag?: InputMaybe<Array<Scalars['String']['input']>>;
	orderBy?: InputMaybe<OrderBy>;
};

export type QueryCupArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryDatasetsArgs = {
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGroupsArgs = {
	cup: Scalars['ID']['input'];
	group?: InputMaybe<Array<Scalars['ID']['input']>>;
	groupName?: InputMaybe<Array<Scalars['ID']['input']>>;
	stage?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type QueryMainpageArgs = {
	fromBlog?: InputMaybe<QueryMainpageFromBlogWhereHasConditions>;
	fromNetwork?: InputMaybe<QueryMainpageFromNetworkWhereHasConditions>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryMatchArgs = {
	id: Scalars['ID']['input'];
};

export type QueryMediaItemArgs = {
	id: Scalars['ID']['input'];
};

export type QueryMobileMainpageArgs = {
	device?: InputMaybe<Scalars['String']['input']>;
};

export type QueryOrganizationArgs = {
	competitionSeriesSlug?: InputMaybe<Array<Scalars['String']['input']>>;
	competitionSeriesType?: InputMaybe<Array<CompetitionSeriesType>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPartnerArgs = {
	fromBucket?: InputMaybe<QueryPartnerFromBucketWhereHasConditions>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPersonArgs = {
	competitionSeriesSlug?: InputMaybe<Array<Scalars['String']['input']>>;
	competitionSeriesType?: InputMaybe<Array<CompetitionSeriesType>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryRecommendationArgs = {
	except?: InputMaybe<Scalars['ID']['input']>;
	fromBucket?: InputMaybe<QueryRecommendationFromBucketWhereHasConditions>;
	randomOrder?: InputMaybe<Scalars['Boolean']['input']>;
	take?: InputMaybe<Scalars['Int']['input']>;
};

export type QuerySearchArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	byDate?: InputMaybe<QuerySearchByDateWhereConditions>;
	first?: Scalars['Int']['input'];
	fromBucket?: InputMaybe<QuerySearchFromBucketWhereHasConditions>;
	query?: InputMaybe<Scalars['String']['input']>;
	type?: InputMaybe<Array<SearchableType>>;
};

export type QueryStreamArgs = {
	except?: InputMaybe<StreamExcepts>;
};

export type QueryTagArgs = {
	fromBucket?: InputMaybe<QueryTagFromBucketWhereHasConditions>;
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

/** Allowed column names for Query.category.fromBucket. */
export enum QueryCategoryFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBucket` argument of the query `category`. */
export type QueryCategoryFromBucketWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryCategoryFromBucketWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryCategoryFromBucketWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryCategoryFromBucketWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryCategoryFromBucketColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBucket` argument of the query `category`. */
export type QueryCategoryFromBucketWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryCategoryFromBucketWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.collection.fromBucket. */
export enum QueryCollectionFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBucket` argument of the query `collection`. */
export type QueryCollectionFromBucketWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryCollectionFromBucketWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryCollectionFromBucketWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryCollectionFromBucketWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryCollectionFromBucketColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBucket` argument of the query `collection`. */
export type QueryCollectionFromBucketWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryCollectionFromBucketWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.competitionStages.orderBy. */
export enum QueryCompetitionStagesOrderByColumn {
	Nameslong = 'NAMESLONG',
	PropertiesstartedAt = 'PROPERTIESSTARTED_AT',
}

/** Order by clause for Query.competitionStages.orderBy. */
export type QueryCompetitionStagesOrderByOrderByClause = {
	/** The column that is used for ordering. */
	column: QueryCompetitionStagesOrderByColumn;
	/** The direction that is used for ordering. */
	order: SortOrder;
};

/** Allowed column names for Query.content.fromBucket. */
export enum QueryContentFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBucket` argument of the query `content`. */
export type QueryContentFromBucketWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentFromBucketWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentFromBucketWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentFromBucketWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentFromBucketColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBucket` argument of the query `content`. */
export type QueryContentFromBucketWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentFromBucketWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.byAuthor. */
export enum QueryContentsByAuthorColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `byAuthor` argument of the query `contents`. */
export type QueryContentsByAuthorWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentsByAuthorWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentsByAuthorWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentsByAuthorWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentsByAuthorColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `byAuthor` argument of the query `contents`. */
export type QueryContentsByAuthorWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentsByAuthorWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.byDate. */
export enum QueryContentsByDateColumn {
	CreatedAt = 'CREATED_AT',
	PublishedAt = 'PUBLISHED_AT',
	UpdatedAt = 'UPDATED_AT',
}

/** Dynamic WHERE conditions for the `byDate` argument of the query `contents`. */
export type QueryContentsByDateWhereConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentsByDateWhereConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentsByDateWhereConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentsByDateWhereConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentsByDateColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `byDate` argument of the query `contents`. */
export type QueryContentsByDateWhereConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentsByDateWhereConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.fromBucket. */
export enum QueryContentsFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBucket` argument of the query `contents`. */
export type QueryContentsFromBucketWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentsFromBucketWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentsFromBucketWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentsFromBucketWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentsFromBucketColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBucket` argument of the query `contents`. */
export type QueryContentsFromBucketWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentsFromBucketWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.hasCategory. */
export enum QueryContentsHasCategoryColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `hasCategory` argument of the query `contents`. */
export type QueryContentsHasCategoryWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentsHasCategoryWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentsHasCategoryWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentsHasCategoryWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentsHasCategoryColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCategory` argument of the query `contents`. */
export type QueryContentsHasCategoryWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentsHasCategoryWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.hasCollection. */
export enum QueryContentsHasCollectionColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `hasCollection` argument of the query `contents`. */
export type QueryContentsHasCollectionWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentsHasCollectionWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentsHasCollectionWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentsHasCollectionWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentsHasCollectionColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCollection` argument of the query `contents`. */
export type QueryContentsHasCollectionWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentsHasCollectionWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.hasPartner. */
export enum QueryContentsHasPartnerColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `hasPartner` argument of the query `contents`. */
export type QueryContentsHasPartnerWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentsHasPartnerWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentsHasPartnerWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentsHasPartnerWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentsHasPartnerColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPartner` argument of the query `contents`. */
export type QueryContentsHasPartnerWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentsHasPartnerWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.hasTag. */
export enum QueryContentsHasTagColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `hasTag` argument of the query `contents`. */
export type QueryContentsHasTagWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryContentsHasTagWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryContentsHasTagWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryContentsHasTagWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryContentsHasTagColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasTag` argument of the query `contents`. */
export type QueryContentsHasTagWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryContentsHasTagWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.contents.orderBy. */
export enum QueryContentsOrderByColumn {
	PublishedAt = 'PUBLISHED_AT',
}

/** Order by clause for Query.contents.orderBy. */
export type QueryContentsOrderByOrderByClause = {
	/** The column that is used for ordering. */
	column: QueryContentsOrderByColumn;
	/** The direction that is used for ordering. */
	order: SortOrder;
};

/** Allowed column names for Query.mainpage.fromBlog. */
export enum QueryMainpageFromBlogColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBlog` argument of the query `mainpage`. */
export type QueryMainpageFromBlogWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryMainpageFromBlogWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryMainpageFromBlogWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryMainpageFromBlogWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryMainpageFromBlogColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBlog` argument of the query `mainpage`. */
export type QueryMainpageFromBlogWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryMainpageFromBlogWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.mainpage.fromNetwork. */
export enum QueryMainpageFromNetworkColumn {
	Domain = 'DOMAIN',
	Id = 'ID',
}

/** Dynamic WHERE conditions for the `fromNetwork` argument of the query `mainpage`. */
export type QueryMainpageFromNetworkWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryMainpageFromNetworkWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryMainpageFromNetworkWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryMainpageFromNetworkWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryMainpageFromNetworkColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromNetwork` argument of the query `mainpage`. */
export type QueryMainpageFromNetworkWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryMainpageFromNetworkWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.partner.fromBucket. */
export enum QueryPartnerFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBucket` argument of the query `partner`. */
export type QueryPartnerFromBucketWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryPartnerFromBucketWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryPartnerFromBucketWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryPartnerFromBucketWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryPartnerFromBucketColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBucket` argument of the query `partner`. */
export type QueryPartnerFromBucketWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryPartnerFromBucketWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

/** Allowed column names for Query.recommendation.fromBucket. */
export enum QueryRecommendationFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBucket` argument of the query `recommendation`. */
export type QueryRecommendationFromBucketWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryRecommendationFromBucketWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryRecommendationFromBucketWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryRecommendationFromBucketWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryRecommendationFromBucketColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBucket` argument of the query `recommendation`. */
export type QueryRecommendationFromBucketWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryRecommendationFromBucketWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

export enum QuerySearchByDateColumn {
	PublishedAt = 'PUBLISHED_AT',
	UpdatedAt = 'UPDATED_AT',
}

export type QuerySearchByDateWhereConditions = {
	column?: InputMaybe<QuerySearchByDateColumn>;
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

export enum QuerySearchFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

export type QuerySearchFromBucketWhereHasConditions = {
	column?: InputMaybe<QuerySearchFromBucketColumn>;
	operator?: InputMaybe<SqlOperator>;
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Allowed column names for Query.tag.fromBucket. */
export enum QueryTagFromBucketColumn {
	Id = 'ID',
	Slug = 'SLUG',
}

/** Dynamic WHERE conditions for the `fromBucket` argument of the query `tag`. */
export type QueryTagFromBucketWhereHasConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<QueryTagFromBucketWhereHasConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<QueryTagFromBucketWhereHasConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<QueryTagFromBucketWhereHasConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<QueryTagFromBucketColumn>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `fromBucket` argument of the query `tag`. */
export type QueryTagFromBucketWhereHasConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<QueryTagFromBucketWhereHasConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

export type Recommendation = {
	__typename?: 'Recommendation';
	order: Scalars['Int']['output'];
	title: Scalars['String']['output'];
	url: Scalars['String']['output'];
};

export type RecommendationInput = {
	bucket?: InputMaybe<BucketInput>;
	order?: Scalars['Int']['input'];
	title: Scalars['String']['input'];
	url: Scalars['String']['input'];
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
	/** Whether a value is within a range of values (`BETWEEN`) */
	Between = 'BETWEEN',
	/** Equal operator (`=`) */
	Eq = 'EQ',
	/** Greater than operator (`>`) */
	Gt = 'GT',
	/** Greater than or equal operator (`>=`) */
	Gte = 'GTE',
	/** Whether a value is within a set of values (`IN`) */
	In = 'IN',
	/** Whether a value is not null (`IS NOT NULL`) */
	IsNotNull = 'IS_NOT_NULL',
	/** Whether a value is null (`IS NULL`) */
	IsNull = 'IS_NULL',
	/** Simple pattern matching (`LIKE`) */
	Like = 'LIKE',
	/** Less than operator (`<`) */
	Lt = 'LT',
	/** Less than or equal operator (`<=`) */
	Lte = 'LTE',
	/** Not equal operator (`!=`) */
	Neq = 'NEQ',
	/** Whether a value is not within a range of values (`NOT BETWEEN`) */
	NotBetween = 'NOT_BETWEEN',
	/** Whether a value is not within a set of values (`NOT IN`) */
	NotIn = 'NOT_IN',
	/** Negation of simple pattern matching (`NOT LIKE`) */
	NotLike = 'NOT_LIKE',
}

export type Searchable = {
	id: Scalars['ID']['output'];
	url?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of Searchable edges. */
export type SearchableConnection = {
	__typename?: 'SearchableConnection';
	/** A list of Searchable edges. */
	edges: Array<SearchableEdge>;
	/** Pagination information about the list of edges. */
	pageInfo: PageInfo;
};

/** An edge that contains a node of type Searchable and a cursor. */
export type SearchableEdge = {
	__typename?: 'SearchableEdge';
	/** A unique cursor that can be used for pagination. */
	cursor: Scalars['String']['output'];
	/** The Searchable node. */
	node: Searchable;
};

/** Searchable type */
export enum SearchableType {
	/** Article */
	Article = 'ARTICLE',
	/** Category */
	Category = 'CATEGORY',
	/** Page */
	Page = 'PAGE',
	/** Tag */
	Tag = 'TAG',
}

export type ShotsBlocked = {
	__typename?: 'ShotsBlocked';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type ShotsOffgoal = {
	__typename?: 'ShotsOffgoal';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type ShotsOngoal = {
	__typename?: 'ShotsOngoal';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

export type ShotsTotal = {
	__typename?: 'ShotsTotal';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
	/** Sort records in ascending order. */
	Asc = 'ASC',
	/** Sort records in descending order. */
	Desc = 'DESC',
}

export type Stage = {
	__typename?: 'Stage';
	cup?: Maybe<Cup>;
	id: Scalars['ID']['output'];
	matches: Array<Match>;
	name?: Maybe<Scalars['String']['output']>;
};

export type Stream = {
	__typename?: 'Stream';
	anchors: Array<Author>;
	articles: Array<Article>;
};

export type StreamExcepts = {
	contentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Streamer action */
export enum StreamerAction {
	/** In */
	In = 'IN',
	/** Out */
	Out = 'OUT',
}

export type Tag = Searchable &
	Taxonomy & {
		__typename?: 'Tag';
		bucket: Bucket;
		description?: Maybe<Scalars['Mixed']['output']>;
		id: Scalars['ID']['output'];
		listTemplate?: Maybe<Scalars['Mixed']['output']>;
		name: Scalars['String']['output'];
		slug: Scalars['String']['output'];
		url?: Maybe<Scalars['String']['output']>;
	};

export type Taxonomy = {
	bucket: Bucket;
	description?: Maybe<Scalars['Mixed']['output']>;
	id: Scalars['ID']['output'];
	listTemplate?: Maybe<Scalars['Mixed']['output']>;
	name: Scalars['String']['output'];
	slug: Scalars['String']['output'];
	url?: Maybe<Scalars['String']['output']>;
};

export type TaxonomyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	listTemplate?: InputMaybe<Scalars['Mixed']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
	__typename?: 'Team';
	coach?: Maybe<Person>;
	color?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	logo: Scalars['String']['output'];
	name: Scalars['String']['output'];
	players: Array<Person>;
	shortName: Scalars['String']['output'];
	venue?: Maybe<Venue>;
	website?: Maybe<Scalars['String']['output']>;
};

export type ThrowIn = {
	__typename?: 'ThrowIn';
	local?: Maybe<Scalars['Int']['output']>;
	visitor?: Maybe<Scalars['Int']['output']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
	/** Only return trashed results. */
	Only = 'ONLY',
	/** Return both trashed and non-trashed results. */
	With = 'WITH',
	/** Only return non-trashed results. */
	Without = 'WITHOUT',
}

export type Url = {
	__typename?: 'URL';
	id: Scalars['ID']['output'];
	link: Scalars['String']['output'];
	name: Scalars['String']['output'];
};

export type User = {
	__typename?: 'User';
	email: Scalars['Email']['output'];
	firstName?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	lastName?: Maybe<Scalars['String']['output']>;
	roles?: Maybe<Array<Scalars['String']['output']>>;
};

export type Venue = {
	__typename?: 'Venue';
	capacity?: Maybe<Scalars['Int']['output']>;
	id: Scalars['ID']['output'];
	location?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
	/** A set of conditions that requires all conditions to match. */
	AND?: InputMaybe<Array<WhereConditions>>;
	/** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
	HAS?: InputMaybe<WhereConditionsRelation>;
	/** A set of conditions that requires at least one condition to match. */
	OR?: InputMaybe<Array<WhereConditions>>;
	/** The column that is used for the condition. */
	column?: InputMaybe<Scalars['String']['input']>;
	/** The operator that is used for the condition. */
	operator?: InputMaybe<SqlOperator>;
	/** The value that is used for the condition. */
	value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
	/** The amount to test. */
	amount?: InputMaybe<Scalars['Int']['input']>;
	/** Additional condition logic. */
	condition?: InputMaybe<WhereConditions>;
	/** The comparison operator to test against the amount. */
	operator?: InputMaybe<SqlOperator>;
	/** The relation that is checked. */
	relation: Scalars['String']['input'];
};

export type FetchAreaQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
	competitionStageType?: InputMaybe<Array<CompetitionStageType> | CompetitionStageType>;
}>;

export type FetchAreaQuery = {
	__typename?: 'Query';
	area?: {
		__typename?: 'Area';
		id: string;
		type: AreaType;
		slug: string;
		shortName?: string | null;
		longName: string;
		competitionStages: {
			__typename?: 'CompetitionStagePaginator';
			data: Array<{
				__typename?: 'CompetitionStage';
				id: string;
				name: string;
				type: CompetitionStageType;
				startedAt: any;
				endedAt?: any | null;
				outcomes: Array<
					| {
							__typename?: 'ElectionOutcome';
							isWinner?: boolean | null;
							percent?: number | null;
							votes?: number | null;
							competitor: {
								__typename?: 'Competitor';
								id: string;
								owner:
									| {
											__typename?: 'Human';
											id: string;
											slug: string;
											name: string;
											stageName: string;
											photoUrls?: Array<string> | null;
									  }
									| {
											__typename?: 'Organization';
											id: string;
											slug: string;
											name: string;
											shortName?: string | null;
											photoUrls?: Array<string> | null;
											color?: string | null;
									  };
								markerTeams: Array<{
									__typename?: 'Organization';
									id: string;
									name: string;
									shortName?: string | null;
									color?: string | null;
								}>;
							};
					  }
					| {
							__typename?: 'FootballGroupStageOutcome';
							competitor: {
								__typename?: 'Competitor';
								id: string;
								owner:
									| {
											__typename?: 'Human';
											id: string;
											slug: string;
											name: string;
											stageName: string;
											photoUrls?: Array<string> | null;
									  }
									| {
											__typename?: 'Organization';
											id: string;
											slug: string;
											name: string;
											shortName?: string | null;
											photoUrls?: Array<string> | null;
											color?: string | null;
									  };
								markerTeams: Array<{
									__typename?: 'Organization';
									id: string;
									name: string;
									shortName?: string | null;
									color?: string | null;
								}>;
							};
					  }
					| {
							__typename?: 'FootballKnockOutStageOutcome';
							competitor: {
								__typename?: 'Competitor';
								id: string;
								owner:
									| {
											__typename?: 'Human';
											id: string;
											slug: string;
											name: string;
											stageName: string;
											photoUrls?: Array<string> | null;
									  }
									| {
											__typename?: 'Organization';
											id: string;
											slug: string;
											name: string;
											shortName?: string | null;
											photoUrls?: Array<string> | null;
											color?: string | null;
									  };
								markerTeams: Array<{
									__typename?: 'Organization';
									id: string;
									name: string;
									shortName?: string | null;
									color?: string | null;
								}>;
							};
					  }
					| {
							__typename?: 'ListElectionOutcome';
							mandate?: number | null;
							mandatePercent?: number | null;
							votes?: number | null;
							percent?: number | null;
							competitor: {
								__typename?: 'Competitor';
								id: string;
								owner:
									| {
											__typename?: 'Human';
											id: string;
											slug: string;
											name: string;
											stageName: string;
											photoUrls?: Array<string> | null;
									  }
									| {
											__typename?: 'Organization';
											id: string;
											slug: string;
											name: string;
											shortName?: string | null;
											photoUrls?: Array<string> | null;
											color?: string | null;
									  };
								markerTeams: Array<{
									__typename?: 'Organization';
									id: string;
									name: string;
									shortName?: string | null;
									color?: string | null;
								}>;
							};
					  }
					| {
							__typename?: 'PersonListElcetionOutcome';
							competitor: {
								__typename?: 'Competitor';
								id: string;
								owner:
									| {
											__typename?: 'Human';
											id: string;
											slug: string;
											name: string;
											stageName: string;
											photoUrls?: Array<string> | null;
									  }
									| {
											__typename?: 'Organization';
											id: string;
											slug: string;
											name: string;
											shortName?: string | null;
											photoUrls?: Array<string> | null;
											color?: string | null;
									  };
								markerTeams: Array<{
									__typename?: 'Organization';
									id: string;
									name: string;
									shortName?: string | null;
									color?: string | null;
								}>;
							};
					  }
					| {
							__typename?: 'PersonListElectionOutcome';
							competitor: {
								__typename?: 'Competitor';
								id: string;
								owner:
									| {
											__typename?: 'Human';
											id: string;
											slug: string;
											name: string;
											stageName: string;
											photoUrls?: Array<string> | null;
									  }
									| {
											__typename?: 'Organization';
											id: string;
											slug: string;
											name: string;
											shortName?: string | null;
											photoUrls?: Array<string> | null;
											color?: string | null;
									  };
								markerTeams: Array<{
									__typename?: 'Organization';
									id: string;
									name: string;
									shortName?: string | null;
									color?: string | null;
								}>;
							};
					  }
				>;
				statistics?:
					| {
							__typename?: 'ElectionCompetitionStageStatistics';
							voters?: number | null;
							votersAppeared?: number | null;
							votersAppearedPercentage?: number | null;
							votersAppearedPercentageTime?: any | null;
							ballotPapers?: number | null;
							validVotes?: number | null;
							invalidVotes?: number | null;
							processingPercentage?: number | null;
							processingPercentageTime?: any | null;
					  }
					| { __typename?: 'FootballCompetitionStageStatistics' }
					| { __typename?: 'ListElectionCompetitionStageStatistics' }
					| null;
			}>;
		};
		properties: Array<{ __typename?: 'KeyValue'; key: string; value?: any | null }>;
	} | null;
};

export type FetchAuthorQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type FetchAuthorQuery = {
	__typename?: 'Query';
	author?: {
		__typename?: 'Author';
		id: string;
		name: string;
		avatar?: string | null;
		slug: string;
	} | null;
};

export type FetchCategoryQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
	buckets: Scalars['Mixed']['input'];
}>;

export type FetchCategoryQuery = {
	__typename?: 'Query';
	category?: {
		__typename?: 'Category';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	} | null;
};

export type FetchCompetitionSeriesListQueryVariables = Exact<{
	type?: InputMaybe<Array<CompetitionSeriesType> | CompetitionSeriesType>;
}>;

export type FetchCompetitionSeriesListQuery = {
	__typename?: 'Query';
	competitionSeriesList: {
		__typename?: 'CompetitionSeriesPaginator';
		data: Array<{
			__typename?: 'CompetitionSeries';
			slug: string;
			name: string;
			season: string;
			type: CompetitionSeriesType;
			startedAt: any;
		}>;
	};
};

export type FetchCompetitionSeriesQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type FetchCompetitionSeriesQuery = {
	__typename?: 'Query';
	competitionSeries?: {
		__typename: 'CompetitionSeries';
		id: string;
		name: string;
		shortName?: string | null;
		season: string;
		slug: string;
		metas: Array<{ __typename: 'KeyValue'; key: string; value?: any | null }>;
	} | null;
};

export type FetchCompetitionsWithResultsQueryVariables = Exact<{
	type?: InputMaybe<Array<CompetitionType> | CompetitionType>;
	area?: InputMaybe<AreaFilterInput>;
	competitionStageType?: InputMaybe<Array<CompetitionStageType> | CompetitionStageType>;
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type FetchCompetitionsWithResultsQuery = {
	__typename?: 'Query';
	competitions: {
		__typename?: 'CompetitionPaginator';
		data: Array<{
			__typename?: 'Competition';
			id: string;
			name: string;
			shortName?: string | null;
			area: {
				__typename?: 'Area';
				id: string;
				slug: string;
				type: AreaType;
				shortName?: string | null;
			};
			competitionStages: {
				__typename?: 'CompetitionStagePaginator';
				data: Array<{
					__typename?: 'CompetitionStage';
					id: string;
					name: string;
					type: CompetitionStageType;
					outcomes: Array<
						| {
								__typename?: 'ElectionOutcome';
								isWinner?: boolean | null;
								percent?: number | null;
								votes?: number | null;
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human'; id: string; slug: string; name: string }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										name: string;
										shortName?: string | null;
										color?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'FootballGroupStageOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human'; id: string; slug: string; name: string }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										name: string;
										shortName?: string | null;
										color?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'FootballKnockOutStageOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human'; id: string; slug: string; name: string }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										name: string;
										shortName?: string | null;
										color?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'ListElectionOutcome';
								mandate?: number | null;
								mandatePercent?: number | null;
								votes?: number | null;
								percent?: number | null;
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human'; id: string; slug: string; name: string }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										name: string;
										shortName?: string | null;
										color?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'PersonListElcetionOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human'; id: string; slug: string; name: string }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										name: string;
										shortName?: string | null;
										color?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'PersonListElectionOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human'; id: string; slug: string; name: string }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										name: string;
										shortName?: string | null;
										color?: string | null;
									}>;
								};
						  }
					>;
					statistics?:
						| {
								__typename?: 'ElectionCompetitionStageStatistics';
								processingPercentage?: number | null;
								validVotes?: number | null;
								votersAppeared?: number | null;
								votersAppearedPercentage?: number | null;
								votersAppearedPercentageTime?: any | null;
						  }
						| { __typename?: 'FootballCompetitionStageStatistics' }
						| { __typename?: 'ListElectionCompetitionStageStatistics' }
						| null;
				}>;
			};
		}>;
	};
};

export type FetchCompetitorQueryVariables = Exact<{
	owner?: InputMaybe<Scalars['String']['input']>;
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type FetchCompetitorQuery = {
	__typename?: 'Query';
	competitor?: {
		__typename?: 'Competitor';
		id: string;
		outcomes: Array<
			| { __typename?: 'ElectionOutcome' }
			| { __typename?: 'FootballGroupStageOutcome' }
			| { __typename?: 'FootballKnockOutStageOutcome' }
			| {
					__typename?: 'ListElectionOutcome';
					votes?: number | null;
					percent?: number | null;
					letterVotes?: number | null;
					letterPercent?: number | null;
					mandate?: number | null;
					mandatePercent?: number | null;
					listMandate?: number | null;
					listMandatePercent?: number | null;
					individualMandate?: number | null;
					individualMandatePercent?: number | null;
			  }
			| { __typename?: 'PersonListElcetionOutcome' }
			| { __typename?: 'PersonListElectionOutcome' }
		>;
		owner:
			| {
					__typename?: 'Human';
					id: string;
					slug: string;
					color?: string | null;
					shortName?: string | null;
					name: string;
			  }
			| {
					__typename?: 'Organization';
					id: string;
					slug: string;
					color?: string | null;
					shortName?: string | null;
					name: string;
					relatedCompetitors?: Array<{
						__typename?: 'Competitor';
						id: string;
						owner:
							| { __typename?: 'Human'; id: string; name: string; photoUrls?: Array<string> | null }
							| { __typename?: 'Organization' };
						outcomes: Array<
							| { __typename?: 'ElectionOutcome'; isWinner?: boolean | null }
							| { __typename?: 'FootballGroupStageOutcome' }
							| { __typename?: 'FootballKnockOutStageOutcome' }
							| { __typename?: 'ListElectionOutcome' }
							| { __typename?: 'PersonListElcetionOutcome' }
							| { __typename?: 'PersonListElectionOutcome' }
						>;
						markerTeams: Array<{
							__typename?: 'Organization';
							id: string;
							slug: string;
							color?: string | null;
							shortName?: string | null;
							name: string;
						}>;
						competitionStages: Array<{
							__typename?: 'CompetitionStage';
							competition: {
								__typename?: 'Competition';
								area: {
									__typename?: 'Area';
									id: string;
									slug: string;
									type: AreaType;
									shortName?: string | null;
									longName: string;
								};
							};
						}>;
					}> | null;
			  };
		members: Array<{
			__typename?: 'Member';
			id: string;
			name: string;
			photoUrls?: Array<string> | null;
			outcome: {
				__typename?: 'PersonListElcetionOutcome';
				isWinner?: boolean | null;
				competitor: {
					__typename?: 'Competitor';
					owner:
						| { __typename?: 'Human' }
						| { __typename?: 'Organization'; color?: string | null; shortName?: string | null };
				};
			};
		}>;
		markerTeams: Array<{
			__typename?: 'Organization';
			id: string;
			slug: string;
			color?: string | null;
			shortName?: string | null;
			name: string;
		}>;
	} | null;
};

export type FetchContentQueryVariables = Exact<{
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	buckets: Scalars['Mixed']['input'];
	date?: InputMaybe<Scalars['Date']['input']>;
}>;

export type FetchContentQuery = {
	__typename?: 'Query';
	content?:
		| {
				__typename?: 'Article';
				id: string;
				title: string;
				body: Array<string | null>;
				slug: string;
				excerpt?: string | null;
				publishedAt?: any | null;
				createdAt: any;
				updatedAt: any;
				url?: string | null;
				userHasAccess: boolean;
				partners: Array<{
					__typename?: 'Partner';
					id: string;
					colors?: any | null;
					description?: any | null;
					picture?: any | null;
					name: string;
					slug: string;
					tagline?: string | null;
					url?: string | null;
				}>;
				relatedArticles: Array<{
					__typename?: 'Article';
					id: string;
					title: string;
					slug: string;
					excerpt?: string | null;
					publishedAt?: any | null;
					createdAt: any;
					url?: string | null;
					partners: Array<{
						__typename?: 'Partner';
						id: string;
						colors?: any | null;
						description?: any | null;
						picture?: any | null;
						name: string;
						slug: string;
						tagline?: string | null;
						url?: string | null;
					}>;
					featuredImage?: {
						__typename?: 'Image';
						id: string;
						caption: string;
						author: string;
						url: string;
						creditType: string;
						sourceLink?: string | null;
						width: number;
						height: number;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						variations?: Array<{
							__typename?: 'ImageVariation';
							url: string;
							size: string;
							width: number;
							height: number;
						}> | null;
					} | null;
					authors: Array<{
						__typename?: 'Author';
						id: string;
						name: string;
						avatar?: string | null;
						slug: string;
					}>;
					categories: Array<{
						__typename?: 'Category';
						id: string;
						slug: string;
						name: string;
						description?: any | null;
						url?: string | null;
					}>;
					tags: Array<{
						__typename?: 'Tag';
						id: string;
						slug: string;
						name: string;
						description?: any | null;
						url?: string | null;
					}>;
					collections: Array<{
						__typename?: 'Collection';
						picture?: string | null;
						id: string;
						slug: string;
						name: string;
						description?: any | null;
						url?: string | null;
					}>;
					bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
					counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
					options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
				}>;
				featuredImage?: {
					__typename?: 'Image';
					id: string;
					caption: string;
					author: string;
					url: string;
					creditType: string;
					sourceLink?: string | null;
					width: number;
					height: number;
					bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
					variations?: Array<{
						__typename?: 'ImageVariation';
						url: string;
						size: string;
						width: number;
						height: number;
					}> | null;
				} | null;
				authors: Array<{
					__typename?: 'Author';
					id: string;
					name: string;
					avatar?: string | null;
					slug: string;
				}>;
				categories: Array<{
					__typename?: 'Category';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				tags: Array<{
					__typename?: 'Tag';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				collections: Array<{
					__typename?: 'Collection';
					picture?: string | null;
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
				counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
				options: Array<{ __typename?: 'Option'; id: string; key: string; value?: any | null }>;
		  }
		| {
				__typename?: 'LiveArticle';
				id: string;
				title: string;
				body: Array<string | null>;
				slug: string;
				excerpt?: string | null;
				publishedAt?: any | null;
				createdAt: any;
				updatedAt: any;
				url?: string | null;
				userHasAccess: boolean;
				featuredImage?: {
					__typename?: 'Image';
					id: string;
					caption: string;
					author: string;
					url: string;
					creditType: string;
					sourceLink?: string | null;
					width: number;
					height: number;
					bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
					variations?: Array<{
						__typename?: 'ImageVariation';
						url: string;
						size: string;
						width: number;
						height: number;
					}> | null;
				} | null;
				authors: Array<{
					__typename?: 'Author';
					id: string;
					name: string;
					avatar?: string | null;
					slug: string;
				}>;
				categories: Array<{
					__typename?: 'Category';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				tags: Array<{
					__typename?: 'Tag';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				collections: Array<{
					__typename?: 'Collection';
					picture?: string | null;
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
				counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
				options: Array<{ __typename?: 'Option'; id: string; key: string; value?: any | null }>;
		  }
		| {
				__typename?: 'LiveReport';
				link?: string | null;
				highlighted?: boolean | null;
				id: string;
				title: string;
				body: Array<string | null>;
				slug: string;
				excerpt?: string | null;
				publishedAt?: any | null;
				createdAt: any;
				updatedAt: any;
				url?: string | null;
				userHasAccess: boolean;
				liveArticle?: {
					__typename?: 'LiveArticle';
					id: string;
					title: string;
					slug: string;
					excerpt?: string | null;
					publishedAt?: any | null;
					createdAt: any;
					url?: string | null;
					featuredImage?: {
						__typename?: 'Image';
						id: string;
						caption: string;
						author: string;
						url: string;
						creditType: string;
						sourceLink?: string | null;
						width: number;
						height: number;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						variations?: Array<{
							__typename?: 'ImageVariation';
							url: string;
							size: string;
							width: number;
							height: number;
						}> | null;
					} | null;
					authors: Array<{
						__typename?: 'Author';
						id: string;
						name: string;
						avatar?: string | null;
						slug: string;
					}>;
					categories: Array<{
						__typename?: 'Category';
						id: string;
						slug: string;
						name: string;
						description?: any | null;
						url?: string | null;
					}>;
					tags: Array<{
						__typename?: 'Tag';
						id: string;
						slug: string;
						name: string;
						description?: any | null;
						url?: string | null;
					}>;
					collections: Array<{
						__typename?: 'Collection';
						picture?: string | null;
						id: string;
						slug: string;
						name: string;
						description?: any | null;
						url?: string | null;
					}>;
					bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
					counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
					options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
				} | null;
				featuredImage?: {
					__typename?: 'Image';
					id: string;
					caption: string;
					author: string;
					url: string;
					creditType: string;
					sourceLink?: string | null;
					width: number;
					height: number;
					bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
					variations?: Array<{
						__typename?: 'ImageVariation';
						url: string;
						size: string;
						width: number;
						height: number;
					}> | null;
				} | null;
				authors: Array<{
					__typename?: 'Author';
					id: string;
					name: string;
					avatar?: string | null;
					slug: string;
				}>;
				categories: Array<{
					__typename?: 'Category';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				tags: Array<{
					__typename?: 'Tag';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				collections: Array<{
					__typename?: 'Collection';
					picture?: string | null;
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
				counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
				options: Array<{ __typename?: 'Option'; id: string; key: string; value?: any | null }>;
		  }
		| {
				__typename?: 'Page';
				id: string;
				title: string;
				body: Array<string | null>;
				slug: string;
				excerpt?: string | null;
				publishedAt?: any | null;
				createdAt: any;
				updatedAt: any;
				url?: string | null;
				userHasAccess: boolean;
				featuredImage?: {
					__typename?: 'Image';
					id: string;
					caption: string;
					author: string;
					url: string;
					creditType: string;
					sourceLink?: string | null;
					width: number;
					height: number;
					bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
					variations?: Array<{
						__typename?: 'ImageVariation';
						url: string;
						size: string;
						width: number;
						height: number;
					}> | null;
				} | null;
				authors: Array<{
					__typename?: 'Author';
					id: string;
					name: string;
					avatar?: string | null;
					slug: string;
				}>;
				categories: Array<{
					__typename?: 'Category';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				tags: Array<{
					__typename?: 'Tag';
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				collections: Array<{
					__typename?: 'Collection';
					picture?: string | null;
					id: string;
					slug: string;
					name: string;
					description?: any | null;
					url?: string | null;
				}>;
				bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
				counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
				options: Array<{ __typename?: 'Option'; id: string; key: string; value?: any | null }>;
		  }
		| null;
};

export type FetchContentsQueryVariables = Exact<{
	buckets?: InputMaybe<QueryContentsFromBucketWhereHasConditions>;
	types?: InputMaybe<Array<ContentType> | ContentType>;
	categories?: InputMaybe<QueryContentsHasCategoryWhereHasConditions>;
	tags?: InputMaybe<QueryContentsHasTagWhereHasConditions>;
	partners?: InputMaybe<QueryContentsHasPartnerWhereHasConditions>;
	authors?: InputMaybe<QueryContentsByAuthorWhereHasConditions>;
	option?: InputMaybe<ByOptionInput>;
	date?: InputMaybe<QueryContentsByDateWhereConditions>;
	before?: InputMaybe<Scalars['String']['input']>;
	after?: InputMaybe<Scalars['String']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FetchContentsQuery = {
	__typename?: 'Query';
	contents: {
		__typename?: 'ContentConnection';
		pageInfo: {
			__typename?: 'CursorPaginationInfo';
			count: number;
			endCursor?: string | null;
			hasNextPage: boolean;
			hasPreviousPage: boolean;
			startCursor?: string | null;
			total: number;
		};
		edges: Array<{
			__typename?: 'ContentEdge';
			node:
				| {
						__typename?: 'Article';
						id: string;
						title: string;
						slug: string;
						excerpt?: string | null;
						publishedAt?: any | null;
						createdAt: any;
						url?: string | null;
						partners: Array<{
							__typename?: 'Partner';
							id: string;
							colors?: any | null;
							description?: any | null;
							picture?: any | null;
							name: string;
							slug: string;
							tagline?: string | null;
							url?: string | null;
						}>;
						featuredImage?: {
							__typename?: 'Image';
							id: string;
							caption: string;
							author: string;
							url: string;
							creditType: string;
							sourceLink?: string | null;
							width: number;
							height: number;
							bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
							variations?: Array<{
								__typename?: 'ImageVariation';
								url: string;
								size: string;
								width: number;
								height: number;
							}> | null;
						} | null;
						authors: Array<{
							__typename?: 'Author';
							id: string;
							name: string;
							avatar?: string | null;
							slug: string;
						}>;
						categories: Array<{
							__typename?: 'Category';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						tags: Array<{
							__typename?: 'Tag';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						collections: Array<{
							__typename?: 'Collection';
							picture?: string | null;
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						counters: Array<{
							__typename?: 'ContentCounter';
							name: ContentCounterType;
							value: any;
						}>;
						options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
				  }
				| {
						__typename?: 'LiveArticle';
						id: string;
						title: string;
						slug: string;
						excerpt?: string | null;
						publishedAt?: any | null;
						createdAt: any;
						url?: string | null;
						featuredImage?: {
							__typename?: 'Image';
							id: string;
							caption: string;
							author: string;
							url: string;
							creditType: string;
							sourceLink?: string | null;
							width: number;
							height: number;
							bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
							variations?: Array<{
								__typename?: 'ImageVariation';
								url: string;
								size: string;
								width: number;
								height: number;
							}> | null;
						} | null;
						authors: Array<{
							__typename?: 'Author';
							id: string;
							name: string;
							avatar?: string | null;
							slug: string;
						}>;
						categories: Array<{
							__typename?: 'Category';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						tags: Array<{
							__typename?: 'Tag';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						collections: Array<{
							__typename?: 'Collection';
							picture?: string | null;
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						counters: Array<{
							__typename?: 'ContentCounter';
							name: ContentCounterType;
							value: any;
						}>;
						options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
				  }
				| {
						__typename?: 'LiveReport';
						id: string;
						title: string;
						slug: string;
						excerpt?: string | null;
						publishedAt?: any | null;
						createdAt: any;
						url?: string | null;
						featuredImage?: {
							__typename?: 'Image';
							id: string;
							caption: string;
							author: string;
							url: string;
							creditType: string;
							sourceLink?: string | null;
							width: number;
							height: number;
							bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
							variations?: Array<{
								__typename?: 'ImageVariation';
								url: string;
								size: string;
								width: number;
								height: number;
							}> | null;
						} | null;
						authors: Array<{
							__typename?: 'Author';
							id: string;
							name: string;
							avatar?: string | null;
							slug: string;
						}>;
						categories: Array<{
							__typename?: 'Category';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						tags: Array<{
							__typename?: 'Tag';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						collections: Array<{
							__typename?: 'Collection';
							picture?: string | null;
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						counters: Array<{
							__typename?: 'ContentCounter';
							name: ContentCounterType;
							value: any;
						}>;
						options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
				  }
				| {
						__typename?: 'Page';
						id: string;
						title: string;
						slug: string;
						excerpt?: string | null;
						publishedAt?: any | null;
						createdAt: any;
						url?: string | null;
						featuredImage?: {
							__typename?: 'Image';
							id: string;
							caption: string;
							author: string;
							url: string;
							creditType: string;
							sourceLink?: string | null;
							width: number;
							height: number;
							bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
							variations?: Array<{
								__typename?: 'ImageVariation';
								url: string;
								size: string;
								width: number;
								height: number;
							}> | null;
						} | null;
						authors: Array<{
							__typename?: 'Author';
							id: string;
							name: string;
							avatar?: string | null;
							slug: string;
						}>;
						categories: Array<{
							__typename?: 'Category';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						tags: Array<{
							__typename?: 'Tag';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						collections: Array<{
							__typename?: 'Collection';
							picture?: string | null;
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						counters: Array<{
							__typename?: 'ContentCounter';
							name: ContentCounterType;
							value: any;
						}>;
						options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
				  };
		}>;
	};
};

export type FetchCountiesQueryVariables = Exact<{ [key: string]: never }>;

export type FetchCountiesQuery = {
	__typename?: 'Query';
	areas: {
		__typename?: 'AreaPaginator';
		data: Array<{
			__typename?: 'Area';
			id: string;
			type: AreaType;
			slug: string;
			shortName?: string | null;
			longName: string;
			childs: Array<{
				__typename?: 'Area';
				id: string;
				type: AreaType;
				slug: string;
				shortName?: string | null;
				longName: string;
				properties: Array<{ __typename?: 'KeyValue'; key: string; value?: any | null }>;
			}>;
			properties: Array<{ __typename?: 'KeyValue'; key: string; value?: any | null }>;
		}>;
	};
};

export type FetchCupQueryVariables = Exact<{
	cupId?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type FetchCupQuery = {
	__typename?: 'Query';
	cup?: { __typename?: 'Cup'; id: string; name: string } | null;
};

export type FetchDatasetsQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
	postProcessors?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>
	>;
}>;

export type FetchDatasetsQuery = {
	__typename?: 'Query';
	datasets: Array<{
		__typename?: 'Dataset';
		title: string;
		body: any;
		id: string;
		updated_at: any;
	}>;
};

export type FetchGroupQueryVariables = Exact<{
	id: Scalars['ID']['input'];
}>;

export type FetchGroupQuery = {
	__typename?: 'Query';
	competition: {
		__typename: 'Competition';
		id: string;
		name: string;
		statistics?:
			| { __typename: 'ElectionCompetitionStatistics' }
			| {
					__typename: 'FootballCompetitionStatistics';
					standings?: Array<{
						__typename: 'FootballTeamStatistics';
						draw: number;
						goalDifference: number;
						goalsAgainst: number;
						goalsScored: number;
						lost: number;
						matches: number;
						points: number;
						position: number;
						recentForm: string;
						won: number;
						team: { __typename: 'Organization'; name: string };
					}> | null;
			  }
			| null;
	};
};

export type FetchGroupsQueryVariables = Exact<{
	type?: InputMaybe<Array<CompetitionType> | CompetitionType>;
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type FetchGroupsQuery = {
	__typename?: 'Query';
	competitions: {
		__typename?: 'CompetitionPaginator';
		data: Array<{
			__typename?: 'Competition';
			id: string;
			name: string;
			type: CompetitionType;
			statistics?:
				| { __typename?: 'ElectionCompetitionStatistics' }
				| {
						__typename?: 'FootballCompetitionStatistics';
						standings?: Array<{
							__typename?: 'FootballTeamStatistics';
							draw: number;
							goalDifference: number;
							goalsAgainst: number;
							goalsScored: number;
							lost: number;
							matches: number;
							points: number;
							position: number;
							recentForm: string;
							won: number;
							team: { __typename?: 'Organization'; name: string };
						}> | null;
				  }
				| null;
		}>;
	};
};

export type FetchLivereportsStatsQueryVariables = Exact<{
	id?: InputMaybe<Scalars['ID']['input']>;
	buckets: Scalars['Mixed']['input'];
	after?: InputMaybe<Scalars['String']['input']>;
}>;

export type FetchLivereportsStatsQuery = {
	__typename?: 'Query';
	content?:
		| { __typename?: 'Article'; id: string }
		| {
				__typename?: 'LiveArticle';
				id: string;
				reports: {
					__typename?: 'LiveReportConnection';
					pageInfo: { __typename?: 'CursorPaginationInfo'; total: number };
					liveReportsStats: {
						__typename?: 'LiveReportStats';
						highlighted?: number | null;
						latestReport?: any | null;
						postsBehindTheCursor?: number | null;
					};
				};
		  }
		| { __typename?: 'LiveReport'; id: string }
		| { __typename?: 'Page'; id: string }
		| null;
};

type MainpageContentAbstractFields_Article_Fragment = {
	__typename?: 'Article';
	id: string;
	title: string;
	slug: string;
	excerpt?: string | null;
	publishedAt?: any | null;
	createdAt: any;
	url?: string | null;
	partners: Array<{
		__typename?: 'Partner';
		id: string;
		colors?: any | null;
		description?: any | null;
		picture?: any | null;
		name: string;
		slug: string;
		tagline?: string | null;
		url?: string | null;
	}>;
	featuredImage?: {
		__typename?: 'Image';
		id: string;
		caption: string;
		author: string;
		url: string;
		creditType: string;
		sourceLink?: string | null;
		width: number;
		height: number;
		bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
		variations?: Array<{
			__typename?: 'ImageVariation';
			url: string;
			size: string;
			width: number;
			height: number;
		}> | null;
	} | null;
	authors: Array<{
		__typename?: 'Author';
		id: string;
		name: string;
		avatar?: string | null;
		slug: string;
	}>;
	categories: Array<{
		__typename?: 'Category';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	tags: Array<{
		__typename?: 'Tag';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	collections: Array<{
		__typename?: 'Collection';
		picture?: string | null;
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
	counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
	options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
};

type MainpageContentAbstractFields_LiveArticle_Fragment = {
	__typename?: 'LiveArticle';
	id: string;
	reports: {
		__typename?: 'LiveReportConnection';
		edges: Array<{
			__typename?: 'LiveReportEdge';
			node: {
				__typename?: 'LiveReport';
				id: string;
				url?: string | null;
				title: string;
				link?: string | null;
			};
		}>;
	};
};

type MainpageContentAbstractFields_LiveReport_Fragment = { __typename?: 'LiveReport'; id: string };

type MainpageContentAbstractFields_Page_Fragment = { __typename?: 'Page'; id: string };

export type MainpageContentAbstractFieldsFragment =
	| MainpageContentAbstractFields_Article_Fragment
	| MainpageContentAbstractFields_LiveArticle_Fragment
	| MainpageContentAbstractFields_LiveReport_Fragment
	| MainpageContentAbstractFields_Page_Fragment;

export type FetchMainpageQueryVariables = Exact<{
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	blog?: InputMaybe<QueryMainpageFromBlogWhereHasConditions>;
}>;

export type FetchMainpageQuery = {
	__typename?: 'Query';
	mainpage?: {
		__typename?: 'Mainpage';
		id: string;
		slug: string;
		layout: {
			__typename?: 'Layout';
			id: string;
			name: string;
			sections: Array<{ __typename?: 'LayoutSection'; id: string; name: string }>;
		};
		items: Array<
			| {
					__typename: 'MainpageItemBase';
					id: string;
					position: number;
					layoutSection: { __typename?: 'LayoutSection'; id: string; name: string };
					display?: { __typename?: 'Display'; id: string; slug: string } | null;
					options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
			  }
			| {
					__typename: 'MainpageItemWithContent';
					id: string;
					position: number;
					featuredImage?: {
						__typename?: 'Image';
						id: string;
						caption: string;
						author: string;
						url: string;
						creditType: string;
						sourceLink?: string | null;
						width: number;
						height: number;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						variations?: Array<{
							__typename?: 'ImageVariation';
							url: string;
							size: string;
							width: number;
							height: number;
						}> | null;
					} | null;
					content?:
						| {
								__typename?: 'Article';
								id: string;
								title: string;
								slug: string;
								excerpt?: string | null;
								publishedAt?: any | null;
								createdAt: any;
								url?: string | null;
								partners: Array<{
									__typename?: 'Partner';
									id: string;
									colors?: any | null;
									description?: any | null;
									picture?: any | null;
									name: string;
									slug: string;
									tagline?: string | null;
									url?: string | null;
								}>;
								featuredImage?: {
									__typename?: 'Image';
									id: string;
									caption: string;
									author: string;
									url: string;
									creditType: string;
									sourceLink?: string | null;
									width: number;
									height: number;
									bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
									variations?: Array<{
										__typename?: 'ImageVariation';
										url: string;
										size: string;
										width: number;
										height: number;
									}> | null;
								} | null;
								authors: Array<{
									__typename?: 'Author';
									id: string;
									name: string;
									avatar?: string | null;
									slug: string;
								}>;
								categories: Array<{
									__typename?: 'Category';
									id: string;
									slug: string;
									name: string;
									description?: any | null;
									url?: string | null;
								}>;
								tags: Array<{
									__typename?: 'Tag';
									id: string;
									slug: string;
									name: string;
									description?: any | null;
									url?: string | null;
								}>;
								collections: Array<{
									__typename?: 'Collection';
									picture?: string | null;
									id: string;
									slug: string;
									name: string;
									description?: any | null;
									url?: string | null;
								}>;
								bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
								counters: Array<{
									__typename?: 'ContentCounter';
									name: ContentCounterType;
									value: any;
								}>;
								options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
						  }
						| {
								__typename?: 'LiveArticle';
								id: string;
								reports: {
									__typename?: 'LiveReportConnection';
									edges: Array<{
										__typename?: 'LiveReportEdge';
										node: {
											__typename?: 'LiveReport';
											id: string;
											url?: string | null;
											title: string;
											link?: string | null;
										};
									}>;
								};
						  }
						| { __typename?: 'LiveReport'; id: string }
						| { __typename?: 'Page'; id: string }
						| null;
					layoutSection: { __typename?: 'LayoutSection'; id: string; name: string };
					display?: { __typename?: 'Display'; id: string; slug: string } | null;
					options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
			  }
		>;
	} | null;
};

export type FetchMandatesQueryVariables = Exact<{
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
	competitionStage?: InputMaybe<Array<CompetitionStageType> | CompetitionStageType>;
}>;

export type FetchMandatesQuery = {
	__typename?: 'Query';
	list: {
		__typename?: 'CompetitionPaginator';
		data: Array<{
			__typename?: 'Competition';
			competitionStages: {
				__typename?: 'CompetitionStagePaginator';
				data: Array<{
					__typename?: 'CompetitionStage';
					id: string;
					name: string;
					type: CompetitionStageType;
					startedAt: any;
					endedAt?: any | null;
					statistics?:
						| {
								__typename?: 'ElectionCompetitionStageStatistics';
								voters?: number | null;
								votersAppeared?: number | null;
								votersAppearedPercentage?: number | null;
								votersAppearedPercentageTime?: any | null;
								validVotes?: number | null;
								validVotesPercentage?: number | null;
								invalidVotes?: number | null;
								invalidVotesPercentage?: number | null;
								processingPercentage?: number | null;
								processingPercentageTime?: any | null;
								ballotPapers?: number | null;
						  }
						| { __typename?: 'FootballCompetitionStageStatistics' }
						| { __typename?: 'ListElectionCompetitionStageStatistics' }
						| null;
					outcomes: Array<
						| {
								__typename?: 'ElectionOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human' }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										shortName?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'FootballGroupStageOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human' }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										shortName?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'FootballKnockOutStageOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human' }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										shortName?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'ListElectionOutcome';
								votes?: number | null;
								mandate?: number | null;
								listMandate?: number | null;
								percent?: number | null;
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human' }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										shortName?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'PersonListElcetionOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human' }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										shortName?: string | null;
									}>;
								};
						  }
						| {
								__typename?: 'PersonListElectionOutcome';
								competitor: {
									__typename?: 'Competitor';
									id: string;
									owner:
										| { __typename?: 'Human' }
										| {
												__typename?: 'Organization';
												id: string;
												slug: string;
												name: string;
												shortName?: string | null;
												photoUrls?: Array<string> | null;
												color?: string | null;
										  };
									markerTeams: Array<{
										__typename?: 'Organization';
										id: string;
										shortName?: string | null;
									}>;
								};
						  }
					>;
				}>;
			};
		}>;
	};
};

export type FetchMatchQueryVariables = Exact<{
	id?: InputMaybe<Scalars['ID']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type FetchMatchQuery = {
	__typename?: 'Query';
	competitionStage?: {
		__typename?: 'CompetitionStage';
		id: string;
		name: string;
		slug: string;
		description?: string | null;
		startedAt: any;
		endedAt?: any | null;
		competition: {
			__typename?: 'Competition';
			name: string;
			type: CompetitionType;
			description?: string | null;
			competitionSeries: { __typename?: 'CompetitionSeries'; slug: string };
		};
		properties?: {
			__typename?: 'FootballCompetitionStageProperties';
			minutes?: number | null;
			extraMinute?: number | null;
			status?: string | null;
			addedTimeSecondHalf?: number | null;
			addedTimeFirstHalf?: number | null;
		} | null;
		events: Array<{
			__typename?: 'Event';
			type: EventType;
			title: string;
			description?: string | null;
			participants: Array<{
				__typename?: 'EventParticipant';
				role?: EventParticipantRole | null;
				participant:
					| { __typename?: 'CompetitionStage' }
					| { __typename?: 'Human'; name: string; stageName: string }
					| { __typename?: 'Organization' };
			}>;
			properties?: Array<{ __typename?: 'KeyValue'; key: string; value?: any | null }> | null;
		}>;
		statistics?:
			| { __typename?: 'ElectionCompetitionStageStatistics' }
			| {
					__typename?: 'FootballCompetitionStageStatistics';
					shotsTotal?: {
						__typename?: 'ShotsTotal';
						local?: number | null;
						visitor?: number | null;
					} | null;
					shotsOngoal?: {
						__typename?: 'ShotsOngoal';
						local?: number | null;
						visitor?: number | null;
					} | null;
					shotsOffgoal?: {
						__typename?: 'ShotsOffgoal';
						local?: number | null;
						visitor?: number | null;
					} | null;
					shotsBlocked?: {
						__typename?: 'ShotsBlocked';
						local?: number | null;
						visitor?: number | null;
					} | null;
					corners?: {
						__typename?: 'Corners';
						local?: number | null;
						visitor?: number | null;
					} | null;
					freeKick?: {
						__typename?: 'FreeKick';
						local?: number | null;
						visitor?: number | null;
					} | null;
					offsides?: {
						__typename?: 'Offsides';
						local?: number | null;
						visitor?: number | null;
					} | null;
					passesPercentage?: {
						__typename?: 'PassesPercentage';
						local?: number | null;
						visitor?: number | null;
					} | null;
					passesTotal?: {
						__typename?: 'PassesTotal';
						local?: number | null;
						visitor?: number | null;
					} | null;
					possessiontime?: {
						__typename?: 'Possessiontime';
						local?: number | null;
						visitor?: number | null;
					} | null;
					attacksTotal?: {
						__typename?: 'AttacksTotal';
						local?: number | null;
						visitor?: number | null;
					} | null;
					attacksDangerous?: {
						__typename?: 'AttacksDangerous';
						visitor?: number | null;
						local?: number | null;
					} | null;
			  }
			| { __typename?: 'ListElectionCompetitionStageStatistics' }
			| null;
		outcomes: Array<
			| { __typename?: 'ElectionOutcome' }
			| {
					__typename?: 'FootballGroupStageOutcome';
					localOrVisitor: string;
					score?: number | null;
					formation?: string | null;
					coach?: string | null;
					competitor: {
						__typename?: 'Competitor';
						owner:
							| { __typename?: 'Human' }
							| {
									__typename?: 'Organization';
									name: string;
									shortName?: string | null;
									photoUrls?: Array<string> | null;
							  };
						players?: Array<{
							__typename?: 'Player';
							name: string;
							shortName?: string | null;
							position?: string | null;
							number?: number | null;
							formationPosition?: string | null;
						}> | null;
					};
			  }
			| {
					__typename?: 'FootballKnockOutStageOutcome';
					localOrVisitor: string;
					penaltyScore?: number | null;
					score?: number | null;
					formation?: string | null;
					coach?: string | null;
					competitor: {
						__typename?: 'Competitor';
						owner:
							| { __typename?: 'Human' }
							| {
									__typename?: 'Organization';
									name: string;
									shortName?: string | null;
									photoUrls?: Array<string> | null;
							  };
						players?: Array<{
							__typename?: 'Player';
							name: string;
							shortName?: string | null;
							position?: string | null;
							number?: number | null;
							formationPosition?: string | null;
						}> | null;
					};
			  }
			| { __typename?: 'ListElectionOutcome' }
			| { __typename?: 'PersonListElcetionOutcome' }
			| { __typename?: 'PersonListElectionOutcome' }
		>;
		links: Array<{ __typename?: 'URL'; link: string; name: string }>;
	} | null;
};

export type FetchMatchesQueryVariables = Exact<{
	competitionSeries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<
		Array<QueryCompetitionStagesOrderByOrderByClause> | QueryCompetitionStagesOrderByOrderByClause
	>;
	after?: InputMaybe<Scalars['DateTimeTz']['input']>;
}>;

export type FetchMatchesQuery = {
	__typename?: 'Query';
	competitionStages: {
		__typename?: 'CompetitionStagePaginator';
		data: Array<{
			__typename?: 'CompetitionStage';
			id: string;
			name: string;
			slug: string;
			description?: string | null;
			startedAt: any;
			endedAt?: any | null;
			competition: {
				__typename?: 'Competition';
				name: string;
				type: CompetitionType;
				description?: string | null;
				competitionSeries: { __typename?: 'CompetitionSeries'; id: string; slug: string };
			};
			properties?: {
				__typename?: 'FootballCompetitionStageProperties';
				minutes?: number | null;
				extraMinute?: number | null;
				status?: string | null;
				addedTimeSecondHalf?: number | null;
				addedTimeFirstHalf?: number | null;
			} | null;
			outcomes: Array<
				| { __typename?: 'ElectionOutcome' }
				| {
						__typename?: 'FootballGroupStageOutcome';
						localOrVisitor: string;
						score?: number | null;
						competitor: {
							__typename?: 'Competitor';
							owner:
								| { __typename?: 'Human' }
								| {
										__typename?: 'Organization';
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
								  };
						};
				  }
				| {
						__typename?: 'FootballKnockOutStageOutcome';
						localOrVisitor: string;
						penaltyScore?: number | null;
						score?: number | null;
						competitor: {
							__typename?: 'Competitor';
							owner:
								| { __typename?: 'Human' }
								| {
										__typename?: 'Organization';
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
								  };
						};
				  }
				| { __typename?: 'ListElectionOutcome' }
				| { __typename?: 'PersonListElcetionOutcome' }
				| { __typename?: 'PersonListElectionOutcome' }
			>;
			links: Array<{ __typename?: 'URL'; link: string; name: string }>;
		}>;
	};
};

export type FetchMediaItemQueryVariables = Exact<{
	id: Scalars['ID']['input'];
}>;

export type FetchMediaItemQuery = {
	__typename?: 'Query';
	mediaItem?:
		| {
				__typename?: 'Image';
				id: string;
				caption: string;
				author: string;
				url: string;
				creditType: string;
				sourceLink?: string | null;
				width: number;
				height: number;
				bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
				variations?: Array<{
					__typename?: 'ImageVariation';
					url: string;
					size: string;
					width: number;
					height: number;
				}> | null;
		  }
		| {
				__typename?: 'Other';
				id: string;
				caption: string;
				author: string;
				url: string;
				creditType: string;
				sourceLink?: string | null;
				bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
		  }
		| null;
};

export type FetchPartnerQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
	buckets: Scalars['Mixed']['input'];
}>;

export type FetchPartnerQuery = {
	__typename?: 'Query';
	partner?: {
		__typename?: 'Partner';
		id: string;
		colors?: any | null;
		description?: any | null;
		picture?: any | null;
		name: string;
		slug: string;
		tagline?: string | null;
		url?: string | null;
	} | null;
};

export type RecommendationQueryVariables = Exact<{
	bucket?: InputMaybe<QueryRecommendationFromBucketWhereHasConditions>;
	take?: InputMaybe<Scalars['Int']['input']>;
}>;

export type RecommendationQuery = {
	__typename?: 'Query';
	recommendation: Array<{
		__typename?: 'Recommendation';
		title: string;
		url: string;
		order: number;
	}>;
};

export type FetchStreamQueryVariables = Exact<{
	except?: InputMaybe<StreamExcepts>;
}>;

export type FetchStreamQuery = {
	__typename?: 'Query';
	stream?: {
		__typename?: 'Stream';
		articles: Array<{
			__typename?: 'Article';
			id: string;
			title: string;
			slug: string;
			excerpt?: string | null;
			publishedAt?: any | null;
			createdAt: any;
			url?: string | null;
			partners: Array<{
				__typename?: 'Partner';
				id: string;
				colors?: any | null;
				description?: any | null;
				picture?: any | null;
				name: string;
				slug: string;
				tagline?: string | null;
				url?: string | null;
			}>;
			featuredImage?: {
				__typename?: 'Image';
				id: string;
				caption: string;
				author: string;
				url: string;
				creditType: string;
				sourceLink?: string | null;
				width: number;
				height: number;
				bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
				variations?: Array<{
					__typename?: 'ImageVariation';
					url: string;
					size: string;
					width: number;
					height: number;
				}> | null;
			} | null;
			authors: Array<{
				__typename?: 'Author';
				id: string;
				name: string;
				avatar?: string | null;
				slug: string;
			}>;
			categories: Array<{
				__typename?: 'Category';
				id: string;
				slug: string;
				name: string;
				description?: any | null;
				url?: string | null;
			}>;
			tags: Array<{
				__typename?: 'Tag';
				id: string;
				slug: string;
				name: string;
				description?: any | null;
				url?: string | null;
			}>;
			collections: Array<{
				__typename?: 'Collection';
				picture?: string | null;
				id: string;
				slug: string;
				name: string;
				description?: any | null;
				url?: string | null;
			}>;
			bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
			counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
			options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
		}>;
	} | null;
};

export type FetchTagQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
	buckets: Scalars['Mixed']['input'];
}>;

export type FetchTagQuery = {
	__typename?: 'Query';
	tag?: {
		__typename?: 'Tag';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	} | null;
};

export type AreaFieldsFragment = {
	__typename?: 'Area';
	id: string;
	type: AreaType;
	slug: string;
	shortName?: string | null;
	longName: string;
	properties: Array<{ __typename?: 'KeyValue'; key: string; value?: any | null }>;
};

export type AuthorFieldsFragment = {
	__typename?: 'Author';
	id: string;
	name: string;
	avatar?: string | null;
	slug: string;
};

export type BucketFieldsFragment = {
	__typename?: 'Bucket';
	id: string;
	slug: string;
	name: string;
};

export type CompetitionFieldsFragment = {
	__typename?: 'Competition';
	id: string;
	name: string;
	shortName?: string | null;
	type: CompetitionType;
	area: {
		__typename?: 'Area';
		id: string;
		type: AreaType;
		slug: string;
		shortName?: string | null;
		longName: string;
		parent?: {
			__typename?: 'Area';
			id: string;
			type: AreaType;
			slug: string;
			shortName?: string | null;
			longName: string;
			properties: Array<{ __typename?: 'KeyValue'; key: string; value?: any | null }>;
		} | null;
		properties: Array<{ __typename?: 'KeyValue'; key: string; value?: any | null }>;
	};
	competitionStages: {
		__typename?: 'CompetitionStagePaginator';
		data: Array<{
			__typename?: 'CompetitionStage';
			id: string;
			name: string;
			type: CompetitionStageType;
			startedAt: any;
			endedAt?: any | null;
			outcomes: Array<
				| {
						__typename?: 'ElectionOutcome';
						isWinner?: boolean | null;
						percent?: number | null;
						votes?: number | null;
						competitor: {
							__typename?: 'Competitor';
							id: string;
							owner:
								| {
										__typename?: 'Human';
										id: string;
										slug: string;
										name: string;
										stageName: string;
										photoUrls?: Array<string> | null;
								  }
								| {
										__typename?: 'Organization';
										id: string;
										slug: string;
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
										color?: string | null;
								  };
							markerTeams: Array<{
								__typename?: 'Organization';
								id: string;
								name: string;
								shortName?: string | null;
								color?: string | null;
							}>;
						};
				  }
				| {
						__typename?: 'FootballGroupStageOutcome';
						competitor: {
							__typename?: 'Competitor';
							id: string;
							owner:
								| {
										__typename?: 'Human';
										id: string;
										slug: string;
										name: string;
										stageName: string;
										photoUrls?: Array<string> | null;
								  }
								| {
										__typename?: 'Organization';
										id: string;
										slug: string;
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
										color?: string | null;
								  };
							markerTeams: Array<{
								__typename?: 'Organization';
								id: string;
								name: string;
								shortName?: string | null;
								color?: string | null;
							}>;
						};
				  }
				| {
						__typename?: 'FootballKnockOutStageOutcome';
						competitor: {
							__typename?: 'Competitor';
							id: string;
							owner:
								| {
										__typename?: 'Human';
										id: string;
										slug: string;
										name: string;
										stageName: string;
										photoUrls?: Array<string> | null;
								  }
								| {
										__typename?: 'Organization';
										id: string;
										slug: string;
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
										color?: string | null;
								  };
							markerTeams: Array<{
								__typename?: 'Organization';
								id: string;
								name: string;
								shortName?: string | null;
								color?: string | null;
							}>;
						};
				  }
				| {
						__typename?: 'ListElectionOutcome';
						mandate?: number | null;
						mandatePercent?: number | null;
						votes?: number | null;
						percent?: number | null;
						competitor: {
							__typename?: 'Competitor';
							id: string;
							owner:
								| {
										__typename?: 'Human';
										id: string;
										slug: string;
										name: string;
										stageName: string;
										photoUrls?: Array<string> | null;
								  }
								| {
										__typename?: 'Organization';
										id: string;
										slug: string;
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
										color?: string | null;
								  };
							markerTeams: Array<{
								__typename?: 'Organization';
								id: string;
								name: string;
								shortName?: string | null;
								color?: string | null;
							}>;
						};
				  }
				| {
						__typename?: 'PersonListElcetionOutcome';
						competitor: {
							__typename?: 'Competitor';
							id: string;
							owner:
								| {
										__typename?: 'Human';
										id: string;
										slug: string;
										name: string;
										stageName: string;
										photoUrls?: Array<string> | null;
								  }
								| {
										__typename?: 'Organization';
										id: string;
										slug: string;
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
										color?: string | null;
								  };
							markerTeams: Array<{
								__typename?: 'Organization';
								id: string;
								name: string;
								shortName?: string | null;
								color?: string | null;
							}>;
						};
				  }
				| {
						__typename?: 'PersonListElectionOutcome';
						competitor: {
							__typename?: 'Competitor';
							id: string;
							owner:
								| {
										__typename?: 'Human';
										id: string;
										slug: string;
										name: string;
										stageName: string;
										photoUrls?: Array<string> | null;
								  }
								| {
										__typename?: 'Organization';
										id: string;
										slug: string;
										name: string;
										shortName?: string | null;
										photoUrls?: Array<string> | null;
										color?: string | null;
								  };
							markerTeams: Array<{
								__typename?: 'Organization';
								id: string;
								name: string;
								shortName?: string | null;
								color?: string | null;
							}>;
						};
				  }
			>;
			statistics?:
				| {
						__typename?: 'ElectionCompetitionStageStatistics';
						voters?: number | null;
						votersAppeared?: number | null;
						votersAppearedPercentage?: number | null;
						votersAppearedPercentageTime?: any | null;
						ballotPapers?: number | null;
						validVotes?: number | null;
						invalidVotes?: number | null;
						processingPercentage?: number | null;
						processingPercentageTime?: any | null;
				  }
				| { __typename?: 'FootballCompetitionStageStatistics' }
				| { __typename?: 'ListElectionCompetitionStageStatistics' }
				| null;
		}>;
	};
};

type ContentAbstract_Article_Fragment = {
	__typename?: 'Article';
	id: string;
	title: string;
	slug: string;
	excerpt?: string | null;
	publishedAt?: any | null;
	createdAt: any;
	url?: string | null;
	partners: Array<{
		__typename?: 'Partner';
		id: string;
		colors?: any | null;
		description?: any | null;
		picture?: any | null;
		name: string;
		slug: string;
		tagline?: string | null;
		url?: string | null;
	}>;
	featuredImage?: {
		__typename?: 'Image';
		id: string;
		caption: string;
		author: string;
		url: string;
		creditType: string;
		sourceLink?: string | null;
		width: number;
		height: number;
		bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
		variations?: Array<{
			__typename?: 'ImageVariation';
			url: string;
			size: string;
			width: number;
			height: number;
		}> | null;
	} | null;
	authors: Array<{
		__typename?: 'Author';
		id: string;
		name: string;
		avatar?: string | null;
		slug: string;
	}>;
	categories: Array<{
		__typename?: 'Category';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	tags: Array<{
		__typename?: 'Tag';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	collections: Array<{
		__typename?: 'Collection';
		picture?: string | null;
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
	counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
	options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
};

type ContentAbstract_LiveArticle_Fragment = {
	__typename?: 'LiveArticle';
	id: string;
	title: string;
	slug: string;
	excerpt?: string | null;
	publishedAt?: any | null;
	createdAt: any;
	url?: string | null;
	featuredImage?: {
		__typename?: 'Image';
		id: string;
		caption: string;
		author: string;
		url: string;
		creditType: string;
		sourceLink?: string | null;
		width: number;
		height: number;
		bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
		variations?: Array<{
			__typename?: 'ImageVariation';
			url: string;
			size: string;
			width: number;
			height: number;
		}> | null;
	} | null;
	authors: Array<{
		__typename?: 'Author';
		id: string;
		name: string;
		avatar?: string | null;
		slug: string;
	}>;
	categories: Array<{
		__typename?: 'Category';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	tags: Array<{
		__typename?: 'Tag';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	collections: Array<{
		__typename?: 'Collection';
		picture?: string | null;
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
	counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
	options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
};

type ContentAbstract_LiveReport_Fragment = {
	__typename?: 'LiveReport';
	id: string;
	title: string;
	slug: string;
	excerpt?: string | null;
	publishedAt?: any | null;
	createdAt: any;
	url?: string | null;
	featuredImage?: {
		__typename?: 'Image';
		id: string;
		caption: string;
		author: string;
		url: string;
		creditType: string;
		sourceLink?: string | null;
		width: number;
		height: number;
		bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
		variations?: Array<{
			__typename?: 'ImageVariation';
			url: string;
			size: string;
			width: number;
			height: number;
		}> | null;
	} | null;
	authors: Array<{
		__typename?: 'Author';
		id: string;
		name: string;
		avatar?: string | null;
		slug: string;
	}>;
	categories: Array<{
		__typename?: 'Category';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	tags: Array<{
		__typename?: 'Tag';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	collections: Array<{
		__typename?: 'Collection';
		picture?: string | null;
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
	counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
	options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
};

type ContentAbstract_Page_Fragment = {
	__typename?: 'Page';
	id: string;
	title: string;
	slug: string;
	excerpt?: string | null;
	publishedAt?: any | null;
	createdAt: any;
	url?: string | null;
	featuredImage?: {
		__typename?: 'Image';
		id: string;
		caption: string;
		author: string;
		url: string;
		creditType: string;
		sourceLink?: string | null;
		width: number;
		height: number;
		bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
		variations?: Array<{
			__typename?: 'ImageVariation';
			url: string;
			size: string;
			width: number;
			height: number;
		}> | null;
	} | null;
	authors: Array<{
		__typename?: 'Author';
		id: string;
		name: string;
		avatar?: string | null;
		slug: string;
	}>;
	categories: Array<{
		__typename?: 'Category';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	tags: Array<{
		__typename?: 'Tag';
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	collections: Array<{
		__typename?: 'Collection';
		picture?: string | null;
		id: string;
		slug: string;
		name: string;
		description?: any | null;
		url?: string | null;
	}>;
	bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
	counters: Array<{ __typename?: 'ContentCounter'; name: ContentCounterType; value: any }>;
	options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
};

export type ContentAbstractFragment =
	| ContentAbstract_Article_Fragment
	| ContentAbstract_LiveArticle_Fragment
	| ContentAbstract_LiveReport_Fragment
	| ContentAbstract_Page_Fragment;

type MediaItemFields_Image_Fragment = {
	__typename?: 'Image';
	id: string;
	caption: string;
	author: string;
	url: string;
	creditType: string;
	sourceLink?: string | null;
	bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
};

type MediaItemFields_Other_Fragment = {
	__typename?: 'Other';
	id: string;
	caption: string;
	author: string;
	url: string;
	creditType: string;
	sourceLink?: string | null;
	bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
};

export type MediaItemFieldsFragment =
	| MediaItemFields_Image_Fragment
	| MediaItemFields_Other_Fragment;

export type ImageFieldsFragment = {
	__typename?: 'Image';
	url: string;
	width: number;
	height: number;
	variations?: Array<{
		__typename?: 'ImageVariation';
		url: string;
		size: string;
		width: number;
		height: number;
	}> | null;
};

export type PageInfoFieldsFragment = {
	__typename?: 'PageInfo';
	count?: number | null;
	currentPage?: number | null;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	startCursor?: string | null;
	endCursor?: string | null;
};

export type CursorPaginationInfoFieldsFragment = {
	__typename?: 'CursorPaginationInfo';
	count: number;
	endCursor?: string | null;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	startCursor?: string | null;
	total: number;
};

export type PartnerFieldsFragment = {
	__typename?: 'Partner';
	id: string;
	colors?: any | null;
	description?: any | null;
	picture?: any | null;
	name: string;
	slug: string;
	tagline?: string | null;
	url?: string | null;
};

type TaxonomyFields_Category_Fragment = {
	__typename?: 'Category';
	id: string;
	slug: string;
	name: string;
	description?: any | null;
	url?: string | null;
};

type TaxonomyFields_Collection_Fragment = {
	__typename?: 'Collection';
	id: string;
	slug: string;
	name: string;
	description?: any | null;
	url?: string | null;
};

type TaxonomyFields_Partner_Fragment = {
	__typename?: 'Partner';
	id: string;
	slug: string;
	name: string;
	description?: any | null;
	url?: string | null;
};

type TaxonomyFields_Tag_Fragment = {
	__typename?: 'Tag';
	id: string;
	slug: string;
	name: string;
	description?: any | null;
	url?: string | null;
};

export type TaxonomyFieldsFragment =
	| TaxonomyFields_Category_Fragment
	| TaxonomyFields_Collection_Fragment
	| TaxonomyFields_Partner_Fragment
	| TaxonomyFields_Tag_Fragment;

export type GetContentInviteTokenQueryVariables = Exact<{
	id: Scalars['ID']['input'];
}>;

export type GetContentInviteTokenQuery = {
	__typename?: 'Query';
	contentInviteToken?: { __typename?: 'ContentInviteToken'; inviteToken: string } | null;
};

export type SearchQueryVariables = Exact<{
	query: Scalars['String']['input'];
	buckets?: InputMaybe<QuerySearchFromBucketWhereHasConditions>;
	after?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchQuery = {
	__typename?: 'Query';
	search: {
		__typename?: 'SearchableConnection';
		pageInfo: {
			__typename?: 'PageInfo';
			count?: number | null;
			currentPage?: number | null;
			hasPreviousPage: boolean;
			hasNextPage: boolean;
			startCursor?: string | null;
			endCursor?: string | null;
		};
		edges: Array<{
			__typename?: 'SearchableEdge';
			node:
				| {
						__typename?: 'Article';
						id: string;
						title: string;
						slug: string;
						excerpt?: string | null;
						publishedAt?: any | null;
						createdAt: any;
						url?: string | null;
						partners: Array<{
							__typename?: 'Partner';
							id: string;
							colors?: any | null;
							description?: any | null;
							picture?: any | null;
							name: string;
							slug: string;
							tagline?: string | null;
							url?: string | null;
						}>;
						featuredImage?: {
							__typename?: 'Image';
							id: string;
							caption: string;
							author: string;
							url: string;
							creditType: string;
							sourceLink?: string | null;
							width: number;
							height: number;
							bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
							variations?: Array<{
								__typename?: 'ImageVariation';
								url: string;
								size: string;
								width: number;
								height: number;
							}> | null;
						} | null;
						authors: Array<{
							__typename?: 'Author';
							id: string;
							name: string;
							avatar?: string | null;
							slug: string;
						}>;
						categories: Array<{
							__typename?: 'Category';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						tags: Array<{
							__typename?: 'Tag';
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						collections: Array<{
							__typename?: 'Collection';
							picture?: string | null;
							id: string;
							slug: string;
							name: string;
							description?: any | null;
							url?: string | null;
						}>;
						bucket: { __typename?: 'Bucket'; id: string; slug: string; name: string };
						counters: Array<{
							__typename?: 'ContentCounter';
							name: ContentCounterType;
							value: any;
						}>;
						options: Array<{ __typename?: 'Option'; key: string; value?: any | null }>;
				  }
				| { __typename?: 'Category'; id: string }
				| { __typename?: 'Collection'; id: string }
				| { __typename?: 'LiveArticle'; id: string }
				| { __typename?: 'Page'; id: string }
				| { __typename?: 'Partner'; id: string }
				| { __typename?: 'Tag'; id: string };
		}>;
	};
};

export const BucketFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
	],
} as unknown as DocumentNode<BucketFieldsFragment, unknown>;
export const MediaItemFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
	],
} as unknown as DocumentNode<MediaItemFieldsFragment, unknown>;
export const ImageFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<ImageFieldsFragment, unknown>;
export const AuthorFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
	],
} as unknown as DocumentNode<AuthorFieldsFragment, unknown>;
export const TaxonomyFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<TaxonomyFieldsFragment, unknown>;
export const PartnerFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<PartnerFieldsFragment, unknown>;
export const ContentAbstractFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ContentAbstract' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'featuredImage' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'authors' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tags' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'collections' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'counters' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'options' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'partners' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<ContentAbstractFragment, unknown>;
export const MainpageContentAbstractFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MainpageContentAbstractFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ContentAbstract' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'LiveArticle' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'reports' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'orderBy' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'column' },
														value: { kind: 'EnumValue', value: 'PUBLISHED_AT' },
													},
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'order' },
														value: { kind: 'EnumValue', value: 'DESC' },
													},
												],
											},
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'edges' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'node' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
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
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ContentAbstract' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'featuredImage' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'authors' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tags' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'collections' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'counters' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'options' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'partners' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<MainpageContentAbstractFieldsFragment, unknown>;
export const AreaFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AreaFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Area' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'longName' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'properties' },
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
} as unknown as DocumentNode<AreaFieldsFragment, unknown>;
export const CompetitionFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CompetitionFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Competition' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'area' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AreaFields' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'parent' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'type' },
											value: { kind: 'EnumValue', value: 'COUNTY' },
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AreaFields' } },
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitionStages' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'type' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'competitionStageType' } },
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
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'endedAt' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'outcomes' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'competitor' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'owner' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'Human' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'id' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'slug' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'name' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'stageName' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'photoUrls' },
																							},
																						],
																					},
																				},
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'Organization' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'id' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'slug' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'name' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'shortName' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'photoUrls' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'color' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'markerTeams' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																				{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'shortName' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'color' } },
																			],
																		},
																	},
																],
															},
														},
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'ElectionOutcome' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'isWinner' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'percent' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'votes' } },
																],
															},
														},
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'ListElectionOutcome' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'mandate' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'mandatePercent' },
																	},
																	{ kind: 'Field', name: { kind: 'Name', value: 'votes' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'percent' } },
																],
															},
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'statistics' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'ElectionCompetitionStageStatistics' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'voters' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'votersAppeared' },
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'votersAppearedPercentage' },
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'votersAppearedPercentageTime' },
																	},
																	{ kind: 'Field', name: { kind: 'Name', value: 'ballotPapers' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'validVotes' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'invalidVotes' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'processingPercentage' },
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'processingPercentageTime' },
																	},
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
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AreaFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Area' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'longName' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'properties' },
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
} as unknown as DocumentNode<CompetitionFieldsFragment, unknown>;
export const PageInfoFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PageInfoFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageInfo' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'count' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'currentPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
				],
			},
		},
	],
} as unknown as DocumentNode<PageInfoFieldsFragment, unknown>;
export const CursorPaginationInfoFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CursorPaginationInfoFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CursorPaginationInfo' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'count' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
				],
			},
		},
	],
} as unknown as DocumentNode<CursorPaginationInfoFieldsFragment, unknown>;
export const FetchAreaDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchArea' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionStageType' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompetitionStageType' } },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'area' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AreaFields' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'competitionStages' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'type' },
											value: {
												kind: 'Variable',
												name: { kind: 'Name', value: 'competitionStageType' },
											},
										},
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'competitionSeriesSlug' },
											value: {
												kind: 'Variable',
												name: { kind: 'Name', value: 'competitionSeries' },
											},
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
														{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'endedAt' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'outcomes' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'competitor' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'owner' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'InlineFragment',
																								typeCondition: {
																									kind: 'NamedType',
																									name: { kind: 'Name', value: 'Human' },
																								},
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'id' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'slug' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'name' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'stageName' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'photoUrls' },
																										},
																									],
																								},
																							},
																							{
																								kind: 'InlineFragment',
																								typeCondition: {
																									kind: 'NamedType',
																									name: { kind: 'Name', value: 'Organization' },
																								},
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'id' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'slug' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'name' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'shortName' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'photoUrls' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'color' },
																										},
																									],
																								},
																							},
																						],
																					},
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'markerTeams' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'id' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'name' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'shortName' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'color' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'InlineFragment',
																		typeCondition: {
																			kind: 'NamedType',
																			name: { kind: 'Name', value: 'ElectionOutcome' },
																		},
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'isWinner' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'percent' } },
																				{ kind: 'Field', name: { kind: 'Name', value: 'votes' } },
																			],
																		},
																	},
																	{
																		kind: 'InlineFragment',
																		typeCondition: {
																			kind: 'NamedType',
																			name: { kind: 'Name', value: 'ListElectionOutcome' },
																		},
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'mandate' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'mandatePercent' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'votes' } },
																				{ kind: 'Field', name: { kind: 'Name', value: 'percent' } },
																			],
																		},
																	},
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'statistics' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'InlineFragment',
																		typeCondition: {
																			kind: 'NamedType',
																			name: {
																				kind: 'Name',
																				value: 'ElectionCompetitionStageStatistics',
																			},
																		},
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'voters' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'votersAppeared' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'votersAppearedPercentage' },
																				},
																				{
																					kind: 'Field',
																					name: {
																						kind: 'Name',
																						value: 'votersAppearedPercentageTime',
																					},
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'ballotPapers' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'validVotes' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'invalidVotes' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'processingPercentage' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'processingPercentageTime' },
																				},
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
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AreaFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Area' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'longName' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'properties' },
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
} as unknown as DocumentNode<FetchAreaQuery, FetchAreaQueryVariables>;
export const FetchAuthorDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchAuthor' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'author' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
	],
} as unknown as DocumentNode<FetchAuthorQuery, FetchAuthorQueryVariables>;
export const FetchCategoryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchCategory' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'Mixed' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'category' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'column' },
											value: { kind: 'EnumValue', value: 'SLUG' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'operator' },
											value: { kind: 'EnumValue', value: 'IN' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'value' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<FetchCategoryQuery, FetchCategoryQueryVariables>;
export const FetchCompetitionSeriesListDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchCompetitionSeriesList' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompetitionSeriesType' } },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitionSeriesList' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'type' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
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
											{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'season' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
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
} as unknown as DocumentNode<
	FetchCompetitionSeriesListQuery,
	FetchCompetitionSeriesListQueryVariables
>;
export const FetchCompetitionSeriesDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchCompetitionSeries' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitionSeries' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'season' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'metas' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
											{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<FetchCompetitionSeriesQuery, FetchCompetitionSeriesQueryVariables>;
export const FetchCompetitionsWithResultsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchCompetitionsWithResults' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompetitionType' } },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'area' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'AreaFilterInput' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionStageType' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompetitionStageType' } },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitions' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'type' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'area' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'area' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'competitionSeriesSlug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'first' },
								value: { kind: 'IntValue', value: '106' },
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
											{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'area' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'competitionStages' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'type' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'competitionStageType' },
														},
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
																	{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'outcomes' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'competitor' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'id' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'owner' },
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'InlineFragment',
																											typeCondition: {
																												kind: 'NamedType',
																												name: { kind: 'Name', value: 'Human' },
																											},
																											selectionSet: {
																												kind: 'SelectionSet',
																												selections: [
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'id' },
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'slug' },
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'name' },
																													},
																												],
																											},
																										},
																										{
																											kind: 'InlineFragment',
																											typeCondition: {
																												kind: 'NamedType',
																												name: {
																													kind: 'Name',
																													value: 'Organization',
																												},
																											},
																											selectionSet: {
																												kind: 'SelectionSet',
																												selections: [
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'id' },
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'slug' },
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'name' },
																													},
																													{
																														kind: 'Field',
																														name: {
																															kind: 'Name',
																															value: 'shortName',
																														},
																													},
																													{
																														kind: 'Field',
																														name: {
																															kind: 'Name',
																															value: 'photoUrls',
																														},
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'color' },
																													},
																												],
																											},
																										},
																									],
																								},
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'markerTeams' },
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'id' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'name' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'shortName' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'color' },
																										},
																									],
																								},
																							},
																						],
																					},
																				},
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'ElectionOutcome' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'isWinner' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'percent' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'votes' },
																							},
																						],
																					},
																				},
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'ListElectionOutcome' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'mandate' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'mandatePercent' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'votes' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'percent' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'statistics' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: {
																							kind: 'Name',
																							value: 'ElectionCompetitionStageStatistics',
																						},
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'processingPercentage',
																								},
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'validVotes' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'votersAppeared' },
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'votersAppearedPercentage',
																								},
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'votersAppearedPercentageTime',
																								},
																							},
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
												},
											},
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
} as unknown as DocumentNode<
	FetchCompetitionsWithResultsQuery,
	FetchCompetitionsWithResultsQueryVariables
>;
export const FetchCompetitorDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchCompetitor' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'owner' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitor' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'owner' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'owner' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'competitionSeries' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'outcomes' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'ListElectionOutcome' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'votes' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'percent' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'letterVotes' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'letterPercent' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mandate' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'mandatePercent' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'listMandate' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'listMandatePercent' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'individualMandate' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'individualMandatePercent' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'owner' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'color' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'Organization' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'relatedCompetitors' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'owner' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'Human' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'id' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'name' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'photoUrls' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'outcomes' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'ElectionOutcome' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'isWinner' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'markerTeams' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																				{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
																				{ kind: 'Field', name: { kind: 'Name', value: 'color' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'shortName' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'competitionStages' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'competition' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'area' },
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'id' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'slug' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'type' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'shortName' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'longName' },
																										},
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
															},
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'members' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'photoUrls' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'outcome' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'competitor' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'owner' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'Organization' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'color' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'shortName' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																],
															},
														},
														{ kind: 'Field', name: { kind: 'Name', value: 'isWinner' } },
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'markerTeams' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'color' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
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
} as unknown as DocumentNode<FetchCompetitorQuery, FetchCompetitorQueryVariables>;
export const FetchContentDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchContent' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'Mixed' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } },
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
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'column' },
											value: { kind: 'EnumValue', value: 'SLUG' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'operator' },
											value: { kind: 'EnumValue', value: 'IN' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'value' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'publishedAt' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'featuredImage' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'body' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'authors' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'categories' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'tags' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
										],
									},
								},
								{
									kind: 'InlineFragment',
									typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'partners' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: { kind: 'Name', value: 'PartnerFields' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'collections' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'bucket' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'counters' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'options' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{
									kind: 'InlineFragment',
									typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'relatedArticles' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: { kind: 'Name', value: 'ContentAbstract' },
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'InlineFragment',
									typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'LiveReport' } },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'liveArticle' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: { kind: 'Name', value: 'ContentAbstract' },
														},
													],
												},
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'highlighted' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'userHasAccess' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ContentAbstract' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'featuredImage' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'authors' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tags' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'collections' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'counters' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'options' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'partners' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<FetchContentQuery, FetchContentQueryVariables>;
export const FetchContentsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchContents' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryContentsFromBucketWhereHasConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'types' } },
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
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'categories' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryContentsHasCategoryWhereHasConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'tags' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryContentsHasTagWhereHasConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'partners' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryContentsHasPartnerWhereHasConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'authors' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryContentsByAuthorWhereHasConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'option' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'ByOptionInput' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryContentsByDateWhereConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
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
								name: { kind: 'Name', value: 'before' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'before' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'after' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'byType' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'types' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'hasCategory' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'categories' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'hasTag' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'tags' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'hasPartner' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'partners' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'byAuthor' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'authors' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'byDate' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'byOption' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'option' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'orderBy' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'column' },
											value: { kind: 'EnumValue', value: 'PUBLISHED_AT' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'order' },
											value: { kind: 'EnumValue', value: 'DESC' },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'first' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'pageInfo' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: { kind: 'Name', value: 'CursorPaginationInfoFields' },
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: { kind: 'Name', value: 'ContentAbstract' },
														},
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'Article' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'partners' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'FragmentSpread',
																					name: { kind: 'Name', value: 'PartnerFields' },
																				},
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
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CursorPaginationInfoFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CursorPaginationInfo' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'count' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ContentAbstract' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'featuredImage' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'authors' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tags' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'collections' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'counters' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'options' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'partners' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<FetchContentsQuery, FetchContentsQueryVariables>;
export const FetchCountiesDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchCounties' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'areas' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'first' },
								value: { kind: 'IntValue', value: '20' },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'type' },
								value: { kind: 'ListValue', values: [{ kind: 'EnumValue', value: 'COUNTY' }] },
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
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AreaFields' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'childs' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'type' },
														value: {
															kind: 'ListValue',
															values: [{ kind: 'EnumValue', value: 'CONSTITUENCY' }],
														},
													},
												],
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AreaFields' } },
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
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AreaFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Area' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'longName' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'properties' },
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
} as unknown as DocumentNode<FetchCountiesQuery, FetchCountiesQueryVariables>;
export const FetchCupDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchCup' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'cupId' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cup' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'cupId' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
						],
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
} as unknown as DocumentNode<FetchCupQuery, FetchCupQueryVariables>;
export const FetchDatasetsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchDatasets' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'postProcessors' } },
					type: {
						kind: 'ListType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'datasets' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'body' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'postProcessor' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'postProcessors' } },
										},
									],
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<FetchDatasetsQuery, FetchDatasetsQueryVariables>;
export const FetchGroupDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchGroup' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competition' },
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
								{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'statistics' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'FootballCompetitionStatistics' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'standings' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'draw' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'goalDifference' },
																	},
																	{ kind: 'Field', name: { kind: 'Name', value: 'goalsAgainst' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'goalsScored' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'lost' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'matches' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'points' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'recentForm' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'team' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: '__typename' },
																				},
																			],
																		},
																	},
																	{ kind: 'Field', name: { kind: 'Name', value: 'won' } },
																	{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
																],
															},
														},
														{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
													],
												},
											},
											{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
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
} as unknown as DocumentNode<FetchGroupQuery, FetchGroupQueryVariables>;
export const FetchGroupsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchGroups' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompetitionType' } },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitions' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'type' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'competitionSeriesSlug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
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
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'statistics' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'FootballCompetitionStatistics' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'standings' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'draw' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'goalDifference' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'goalsAgainst' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'goalsScored' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'lost' } },
																				{ kind: 'Field', name: { kind: 'Name', value: 'matches' } },
																				{ kind: 'Field', name: { kind: 'Name', value: 'points' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'position' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'recentForm' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'won' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'team' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'name' },
																							},
																						],
																					},
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'won' } },
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
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<FetchGroupsQuery, FetchGroupsQueryVariables>;
export const FetchLivereportsStatsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchLivereportsStats' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'Mixed' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
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
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'column' },
											value: { kind: 'EnumValue', value: 'SLUG' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'operator' },
											value: { kind: 'EnumValue', value: 'IN' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'value' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{
									kind: 'InlineFragment',
									typeCondition: {
										kind: 'NamedType',
										name: { kind: 'Name', value: 'LiveArticle' },
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'reports' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'after' },
														value: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
													},
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'orderBy' },
														value: {
															kind: 'ListValue',
															values: [
																{
																	kind: 'ObjectValue',
																	fields: [
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'column' },
																			value: { kind: 'EnumValue', value: 'PUBLISHED_AT' },
																		},
																		{
																			kind: 'ObjectField',
																			name: { kind: 'Name', value: 'order' },
																			value: { kind: 'EnumValue', value: 'DESC' },
																		},
																	],
																},
															],
														},
													},
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'cursorInclusive' },
														value: { kind: 'BooleanValue', value: true },
													},
												],
												directives: [
													{
														kind: 'Directive',
														name: { kind: 'Name', value: 'connection' },
														arguments: [
															{
																kind: 'Argument',
																name: { kind: 'Name', value: 'key' },
																value: { kind: 'StringValue', value: 'reportsStats', block: false },
															},
														],
													},
												],
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'pageInfo' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'total' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'liveReportsStats' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'highlighted' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'latestReport' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'postsBehindTheCursor' },
																	},
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
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<FetchLivereportsStatsQuery, FetchLivereportsStatsQueryVariables>;
export const FetchMainpageDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchMainpage' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'blog' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryMainpageFromBlogWhereHasConditions' },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'mainpage' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBlog' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'blog' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'layout' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'sections' },
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
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'items' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'position' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'layoutSection' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'display' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'options' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'MainpageItemWithContent' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'featuredImage' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'FragmentSpread',
																		name: { kind: 'Name', value: 'MediaItemFields' },
																	},
																	{
																		kind: 'FragmentSpread',
																		name: { kind: 'Name', value: 'ImageFields' },
																	},
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'content' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'FragmentSpread',
																		name: { kind: 'Name', value: 'MainpageContentAbstractFields' },
																	},
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
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ContentAbstract' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'featuredImage' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'authors' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tags' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'collections' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'counters' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'options' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'partners' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MainpageContentAbstractFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ContentAbstract' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'LiveArticle' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'reports' },
									arguments: [
										{
											kind: 'Argument',
											name: { kind: 'Name', value: 'orderBy' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'column' },
														value: { kind: 'EnumValue', value: 'PUBLISHED_AT' },
													},
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'order' },
														value: { kind: 'EnumValue', value: 'DESC' },
													},
												],
											},
										},
									],
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'edges' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'node' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
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
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<FetchMainpageQuery, FetchMainpageQueryVariables>;
export const FetchMandatesDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'FetchMandates' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionStage' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompetitionStageType' } },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'list' },
						name: { kind: 'Name', value: 'competitions' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'type' },
								value: { kind: 'EnumValue', value: 'ELECTION' },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'area' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'slug' },
											value: { kind: 'StringValue', value: 'magyarorszag', block: false },
										},
									],
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'competitionSeriesSlug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
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
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'competitionStages' },
												arguments: [
													{
														kind: 'Argument',
														name: { kind: 'Name', value: 'type' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'competitionStage' },
														},
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
																	{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'endedAt' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'statistics' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: {
																							kind: 'Name',
																							value: 'ElectionCompetitionStageStatistics',
																						},
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'voters' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'votersAppeared' },
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'votersAppearedPercentage',
																								},
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'votersAppearedPercentageTime',
																								},
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'validVotes' },
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'validVotesPercentage',
																								},
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'invalidVotes' },
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'invalidVotesPercentage',
																								},
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'processingPercentage',
																								},
																							},
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'processingPercentageTime',
																								},
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'ballotPapers' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'outcomes' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'competitor' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'id' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'owner' },
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'InlineFragment',
																											typeCondition: {
																												kind: 'NamedType',
																												name: {
																													kind: 'Name',
																													value: 'Organization',
																												},
																											},
																											selectionSet: {
																												kind: 'SelectionSet',
																												selections: [
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'id' },
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'slug' },
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'name' },
																													},
																													{
																														kind: 'Field',
																														name: {
																															kind: 'Name',
																															value: 'shortName',
																														},
																													},
																													{
																														kind: 'Field',
																														name: {
																															kind: 'Name',
																															value: 'photoUrls',
																														},
																													},
																													{
																														kind: 'Field',
																														name: { kind: 'Name', value: 'color' },
																													},
																												],
																											},
																										},
																									],
																								},
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'markerTeams' },
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'id' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'shortName' },
																										},
																									],
																								},
																							},
																						],
																					},
																				},
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'ListElectionOutcome' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'votes' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'mandate' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'listMandate' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'percent' },
																							},
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
												},
											},
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
} as unknown as DocumentNode<FetchMandatesQuery, FetchMandatesQueryVariables>;
export const FetchMatchDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchMatch' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitionStage' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'competition' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'competitionSeries' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'properties' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'FootballCompetitionStageProperties' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'minutes' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'extraMinute' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'addedTimeSecondHalf' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'addedTimeFirstHalf' } },
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'events' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'participants' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'role' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'participant' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'InlineFragment',
																		typeCondition: {
																			kind: 'NamedType',
																			name: { kind: 'Name', value: 'Human' },
																		},
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'stageName' },
																				},
																			],
																		},
																	},
																],
															},
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'properties' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
													],
												},
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'statistics' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'FootballCompetitionStageStatistics' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'shotsTotal' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'shotsOngoal' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'shotsOffgoal' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'shotsBlocked' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'corners' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'freeKick' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'offsides' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'passesPercentage' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'passesTotal' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'possessiontime' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'attacksTotal' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																],
															},
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'attacksDangerous' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'visitor' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'local' } },
																],
															},
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'outcomes' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'FootballGroupStageOutcome' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'localOrVisitor' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'score' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'formation' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'coach' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'competitor' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'owner' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'Organization' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'name' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'shortName' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'photoUrls' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'players' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'shortName' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'position' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'number' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'formationPosition' },
																				},
																			],
																		},
																	},
																],
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: { kind: 'Name', value: 'FootballKnockOutStageOutcome' },
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'localOrVisitor' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'penaltyScore' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'score' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'formation' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'coach' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'competitor' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'owner' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'InlineFragment',
																					typeCondition: {
																						kind: 'NamedType',
																						name: { kind: 'Name', value: 'Organization' },
																					},
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'name' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'shortName' },
																							},
																							{
																								kind: 'Field',
																								name: { kind: 'Name', value: 'photoUrls' },
																							},
																						],
																					},
																				},
																			],
																		},
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'players' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'shortName' },
																				},
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'position' },
																				},
																				{ kind: 'Field', name: { kind: 'Name', value: 'number' } },
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'formationPosition' },
																				},
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
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'links' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'endedAt' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<FetchMatchQuery, FetchMatchQueryVariables>;
export const FetchMatchesDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchMatches' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
					type: {
						kind: 'ListType',
						type: {
							kind: 'NonNullType',
							type: {
								kind: 'NamedType',
								name: { kind: 'Name', value: 'QueryCompetitionStagesOrderByOrderByClause' },
							},
						},
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTimeTz' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'competitionStages' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'competitionSeries' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'competitionSeries' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'orderBy' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'first' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'after' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
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
											{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'competition' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'type' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'competitionSeries' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
																],
															},
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'properties' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'FootballCompetitionStageProperties' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{ kind: 'Field', name: { kind: 'Name', value: 'minutes' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'extraMinute' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'status' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'addedTimeSecondHalf' },
																	},
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'addedTimeFirstHalf' },
																	},
																],
															},
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'outcomes' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'FootballGroupStageOutcome' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'localOrVisitor' },
																	},
																	{ kind: 'Field', name: { kind: 'Name', value: 'score' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'competitor' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'owner' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'InlineFragment',
																								typeCondition: {
																									kind: 'NamedType',
																									name: { kind: 'Name', value: 'Organization' },
																								},
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'name' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'shortName' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'photoUrls' },
																										},
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
															},
														},
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'FootballKnockOutStageOutcome' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'localOrVisitor' },
																	},
																	{ kind: 'Field', name: { kind: 'Name', value: 'penaltyScore' } },
																	{ kind: 'Field', name: { kind: 'Name', value: 'score' } },
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'competitor' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'owner' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'InlineFragment',
																								typeCondition: {
																									kind: 'NamedType',
																									name: { kind: 'Name', value: 'Organization' },
																								},
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'name' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'shortName' },
																										},
																										{
																											kind: 'Field',
																											name: { kind: 'Name', value: 'photoUrls' },
																										},
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
															},
														},
													],
												},
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'links' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
													],
												},
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'endedAt' } },
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
} as unknown as DocumentNode<FetchMatchesQuery, FetchMatchesQueryVariables>;
export const FetchMediaItemDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchMediaItem' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'mediaItem' },
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
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<FetchMediaItemQuery, FetchMediaItemQueryVariables>;
export const FetchPartnerDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchPartner' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'Mixed' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'partner' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'column' },
											value: { kind: 'EnumValue', value: 'SLUG' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'operator' },
											value: { kind: 'EnumValue', value: 'IN' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'value' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<FetchPartnerQuery, FetchPartnerQueryVariables>;
export const RecommendationDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'recommendation' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'bucket' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QueryRecommendationFromBucketWhereHasConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'recommendation' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'bucket' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'take' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'order' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<RecommendationQuery, RecommendationQueryVariables>;
export const FetchStreamDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchStream' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'except' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'StreamExcepts' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'stream' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'except' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'except' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'articles' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ContentAbstract' } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ContentAbstract' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'featuredImage' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'authors' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tags' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'collections' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'counters' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'options' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'partners' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<FetchStreamQuery, FetchStreamQueryVariables>;
export const FetchTagDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'fetchTag' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'Mixed' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tag' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'column' },
											value: { kind: 'EnumValue', value: 'SLUG' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'operator' },
											value: { kind: 'EnumValue', value: 'IN' },
										},
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'value' },
											value: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<FetchTagQuery, FetchTagQueryVariables>;
export const GetContentInviteTokenDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getContentInviteToken' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'contentInviteToken' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [{ kind: 'Field', name: { kind: 'Name', value: 'inviteToken' } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetContentInviteTokenQuery, GetContentInviteTokenQueryVariables>;
export const SearchDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'search' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'QuerySearchFromBucketWhereHasConditions' },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'search' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'type' },
								value: { kind: 'ListValue', values: [{ kind: 'EnumValue', value: 'ARTICLE' }] },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'query' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'fromBucket' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'buckets' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'after' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'after' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'pageInfo' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PageInfoFields' } },
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{
															kind: 'InlineFragment',
															typeCondition: {
																kind: 'NamedType',
																name: { kind: 'Name', value: 'Article' },
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'FragmentSpread',
																		name: { kind: 'Name', value: 'ContentAbstract' },
																	},
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
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'BucketFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Bucket' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'MediaItemFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'MediaItem' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'caption' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'author' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'creditType' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'sourceLink' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ImageFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Image' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'variations' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'size' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Author' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TaxonomyFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Taxonomy' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PartnerFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Partner' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'colors' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PageInfoFields' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageInfo' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'count' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'currentPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ContentAbstract' },
			typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Content' } },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'featuredImage' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'MediaItemFields' } },
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ImageFields' } },
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'authors' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'AuthorFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'tags' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'collections' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TaxonomyFields' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'picture' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'bucket' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BucketFields' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'counters' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'options' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'key' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'value' } },
							],
						},
					},
					{
						kind: 'InlineFragment',
						typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Article' } },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'partners' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PartnerFields' } },
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'url' } },
				],
			},
		},
	],
} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;
