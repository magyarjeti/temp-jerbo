import { graphql } from '../__generated__';

export const FETCH_AUTHOR = graphql(`
	query fetchAuthor($slug: String) {
		author(slug: $slug) {
			...AuthorFields
		}
	}
`);
