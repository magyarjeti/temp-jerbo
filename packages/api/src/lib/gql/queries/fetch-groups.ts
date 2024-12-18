import { graphql } from '../__generated__';

export const FETCH_GROUPS = graphql(`
	query fetchGroups($type: [CompetitionType!], $competitionSeries: [String!]) {
		competitions(type: $type, competitionSeriesSlug: $competitionSeries) {
			data {
				id
				name
				type
				statistics {
					... on FootballCompetitionStatistics {
						standings {
							draw
							goalDifference
							goalsAgainst
							goalsScored
							lost
							matches
							points
							position
							recentForm
							won
							team {
								name
							}
							won
						}
					}
				}
			}
		}
	}
`);
