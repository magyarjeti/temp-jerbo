import { graphql } from '../__generated__';

export const UPDATE_CONTENT = graphql(`
	mutation UpdateContent($input: UpdateContentInput!) {
		updateContent(input: $input) {
			id
			updatedAt
		}
	}
`);
