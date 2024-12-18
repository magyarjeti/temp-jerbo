import { graphql } from '../../__generated__';

export const AUTHOR_FIELDS = graphql(`
	fragment AuthorFields on Author {
		id
		name
		avatar
		# description
		slug
		# email
		# state
		# url
	}
`);
