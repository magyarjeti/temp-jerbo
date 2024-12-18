import { graphql } from '../__generated__';

export const CREATE_CONTENT = graphql(`
	mutation createContent($input: CreateContentInput!) {
		createContent(input: $input) {
			id
			updatedAt
		}
	}
`);
