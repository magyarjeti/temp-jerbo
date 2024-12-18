import { graphql } from '../__generated__';

export const FETCH_CATEGORY = graphql(`
	query fetchCategory($slug: String, $buckets: Mixed!) {
		category(slug: $slug, fromBucket: { column: SLUG, operator: IN, value: $buckets }) {
			...TaxonomyFields
		}
	}
`);
