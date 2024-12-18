import { graphql } from '../__generated__';

export const FETCH_COMPETITION_SERIES = graphql(`
	query fetchCompetitionSeries($slug: String) {
		competitionSeries(slug: $slug) {
			id
			name
			shortName
			season
			slug
			metas {
				key
				value
				__typename
			}
			__typename
		}
	}
`);
