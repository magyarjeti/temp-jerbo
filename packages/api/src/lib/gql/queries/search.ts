import { graphql } from '../__generated__';

export const SEARCH = graphql(`
	query search($query: String!, $buckets: QuerySearchFromBucketWhereHasConditions, $after: String) {
		search(type: [ARTICLE], query: $query, fromBucket: $buckets, after: $after) {
			pageInfo {
				...PageInfoFields
			}
			edges {
				node {
					id
					... on Article {
						...ContentAbstract
					}
				}
			}
		}
	}
`);
