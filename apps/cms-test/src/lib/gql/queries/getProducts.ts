import { graphql } from '../__generated__';

export const GET_PRODUCTS = graphql(`
	query products($domain: String!) {
		products(domain: $domain) {
			data {
				id
				name
			}
		}
	}
`);
