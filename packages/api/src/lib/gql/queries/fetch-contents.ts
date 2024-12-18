import { graphql } from '../__generated__';

export const FETCH_CONTENTS = graphql(`
	query fetchContents(
		$buckets: QueryContentsFromBucketWhereHasConditions
		$types: [ContentType!]
		$categories: QueryContentsHasCategoryWhereHasConditions
		$tags: QueryContentsHasTagWhereHasConditions
		$partners: QueryContentsHasPartnerWhereHasConditions
		$authors: QueryContentsByAuthorWhereHasConditions
		$option: ByOptionInput
		$date: QueryContentsByDateWhereConditions
		$before: String
		$after: String
		$limit: Int
	) {
		contents(
			before: $before
			after: $after
			fromBucket: $buckets
			byType: $types
			hasCategory: $categories
			hasTag: $tags
			hasPartner: $partners
			byAuthor: $authors
			byDate: $date
			byOption: $option
			orderBy: { column: PUBLISHED_AT, order: DESC }
			first: $limit
		) {
			pageInfo {
				...CursorPaginationInfoFields
			}
			edges {
				node {
					...ContentAbstract
					... on Article {
						partners {
							...PartnerFields
						}
					}
				}
			}
		}
	}
`);
