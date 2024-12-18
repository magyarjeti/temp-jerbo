import { graphql } from '../../__generated__';

export const PARTNER_FIELDS = graphql(`
	fragment PartnerFields on Partner {
		id
		colors
		description
		picture
		name
		slug
		tagline
		url
	}
`);
