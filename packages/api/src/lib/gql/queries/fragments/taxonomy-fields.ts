import { graphql } from '../../__generated__';

export const TAXONOMY_FIELDS = graphql(`
	fragment TaxonomyFields on Taxonomy {
		id
		slug
		name
		description
		url
	}
`);
