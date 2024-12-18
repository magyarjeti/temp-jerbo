import { graphql } from '../__generated__';

export type {
	FetchCompetitionSeriesListQuery,
	FetchCompetitionSeriesListQueryVariables,
} from '../__generated__/graphql';

export const FETCH_COMPETITION_SERIES_LIST = graphql(`
	query fetchCompetitionSeriesList($type: [CompetitionSeriesType!]) {
		competitionSeriesList(type: $type) {
			data {
				slug
				name
				season
				type
				startedAt
			}
		}
	}
`);
