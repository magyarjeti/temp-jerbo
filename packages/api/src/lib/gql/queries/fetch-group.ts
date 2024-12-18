import { graphql } from '../__generated__';

export const FETCH_GROUP = graphql(`
	query fetchGroup($id: ID!) {
		competition(id: $id) {
			__typename
			id
			name
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
						team {
							name
							__typename
						}
						won
						__typename
					}
					__typename
				}
				__typename
			}
		}
	}
`);
