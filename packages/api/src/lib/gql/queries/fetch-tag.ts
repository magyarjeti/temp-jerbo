import { graphql } from '../__generated__';

export const FETCH_TAG = graphql(`
	query fetchTag($slug: String, $buckets: Mixed!) {
		tag(slug: $slug, fromBucket: { column: SLUG, operator: IN, value: $buckets }) {
			...TaxonomyFields
		}
	}
`);
