import { graphql } from '../__generated__';

export const FETCH_CONTENT = graphql(`
	query fetchContent($id: ID, $slug: String, $buckets: Mixed!, $date: Date) {
		content(
			id: $id
			fromBucket: { column: SLUG, operator: IN, value: $buckets }
			slug: $slug
			publishedAt: $date
		) {
			id
			featuredImage {
				...MediaItemFields
				...ImageFields
			}
			# type
			title
			body
			# bodyType
			slug
			excerpt
			# publisher
			publishedAt
			createdAt
			updatedAt
			authors {
				...AuthorFields
			}
			# meta
			categories {
				...TaxonomyFields
			}
			tags {
				...TaxonomyFields
			}
			... on Article {
				partners {
					...PartnerFields
				}
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
				id
				key
				value
			}
			url
			... on Article {
				relatedArticles {
					...ContentAbstract
				}
			}
			... on LiveReport {
				liveArticle {
					...ContentAbstract
				}
				link
				highlighted
			}
			userHasAccess
		}
	}
`);
