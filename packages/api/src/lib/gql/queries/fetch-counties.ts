import { graphql } from '../__generated__';

export const FETCH_COUNTIES = graphql(`
	query fetchCounties {
		areas(first: 20, type: [COUNTY]) {
			data {
				...AreaFields
				childs(type: [CONSTITUENCY]) {
					...AreaFields
				}
			}
		}
	}
`);
