import { graphql } from '../__generated__';

export const MAINPAGE_CONTENT_ABSTRACT_FIELDS = graphql(`
	fragment MainpageContentAbstractFields on Content {
		id
		... on Article {
			...ContentAbstract
		}
		... on LiveArticle {
			reports(orderBy: { column: PUBLISHED_AT, order: DESC }) {
				edges {
					node {
						id
						url
						title
						link
					}
				}
			}
		}
	}
`);

export const FETCH_MAINPAGE = graphql(`
	query fetchMainpage($id: ID, $slug: String, $blog: QueryMainpageFromBlogWhereHasConditions) {
		mainpage(id: $id, slug: $slug, fromBlog: $blog) {
			id
			slug
			layout {
				id
				name
				sections {
					id
					name
				}
			}
			items {
				id
				__typename
				position
				layoutSection {
					id
					name
				}
				display {
					id
					slug
				}
				options {
					key
					value
				}
				... on MainpageItemWithContent {
					featuredImage {
						...MediaItemFields
						...ImageFields
					}
					content {
						...MainpageContentAbstractFields
					}
				}
			}
		}
	}
`);
