import { graphql } from '../../__generated__';

export const CONTENT_ABSTRACT = graphql(`
	fragment ContentAbstract on Content {
		id
		title
		slug
		featuredImage {
			...MediaItemFields
			...ImageFields
		}
		excerpt
		publishedAt
		createdAt
		authors {
			...AuthorFields
		}
		categories {
			...TaxonomyFields
		}
		# Ez csak a content_type számolás miatt kell, ha az jön a backendtől, nem
		# kell majd elkérni az összes taget
		tags {
			...TaxonomyFields
		}
		collections {
			...TaxonomyFields
			picture
		}
		bucket {
			...BucketFields
		}
		counters {
			name
			value
		}
		options {
			key
			value
		}
		... on Article {
			partners {
				...PartnerFields
			}
		}
		url
	}
`);
