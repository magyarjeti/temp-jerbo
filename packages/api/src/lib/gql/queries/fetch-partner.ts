import { graphql } from '../__generated__';

export const FETCH_PARTNER = graphql(`
	query fetchPartner($slug: String, $buckets: Mixed!) {
		partner(slug: $slug, fromBucket: { column: SLUG, operator: IN, value: $buckets }) {
			...PartnerFields
		}
	}
`);
