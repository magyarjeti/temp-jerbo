import { graphql } from '../__generated__';

export const FETCH_CUP = graphql(`
	query fetchCup($cupId: ID, $slug: String) {
		cup(id: $cupId, slug: $slug) {
			id
			name
		}
	}
`);
