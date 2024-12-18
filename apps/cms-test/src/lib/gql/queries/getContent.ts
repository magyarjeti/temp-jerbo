import { graphql } from '../__generated__';

export const GET_CONTENT = graphql(`
	query getContent($id: HashID) {
		content(id: $id) {
			id
			body
			layout
			slug
			status
			updatedAt
			tags {
				id
				name
				slug
			}
			title {
				key
				value
			}
		}
	}
`);
