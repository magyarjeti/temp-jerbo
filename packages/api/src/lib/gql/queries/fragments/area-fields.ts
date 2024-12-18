import { graphql } from '../../__generated__';

export const AREA_FIELDS = graphql(`
	fragment AreaFields on Area {
		id
		type
		slug
		shortName
		longName
		properties {
			key
			value
		}
	}
`);
