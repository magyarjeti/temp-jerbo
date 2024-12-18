import { graphql } from '../__generated__';

export const FETCH_RECOMMENDATION = graphql(`
	query recommendation($bucket: QueryRecommendationFromBucketWhereHasConditions, $take: Int) {
		recommendation(fromBucket: $bucket, take: $take) {
			title
			url
			order
		}
	}
`);
