import { graphql } from '../__generated__';

export const FETCH_MATCHES = graphql(`
	query fetchMatches(
		$competitionSeries: [String!]
		$first: Int
		$orderBy: [QueryCompetitionStagesOrderByOrderByClause!]
		$after: DateTimeTz
	) {
		competitionStages(
			competitionSeries: $competitionSeries
			orderBy: $orderBy
			first: $first
			after: $after
		) {
			data {
				id
				name
				slug
				description
				competition {
					name
					type
					description
					competitionSeries {
						id
						slug
					}
				}
				properties {
					... on FootballCompetitionStageProperties {
						minutes
						extraMinute
						status
						addedTimeSecondHalf
						addedTimeFirstHalf
					}
				}
				outcomes {
					... on FootballGroupStageOutcome {
						localOrVisitor
						score
						competitor {
							owner {
								... on Organization {
									name
									shortName
									photoUrls
								}
							}
						}
					}
					... on FootballKnockOutStageOutcome {
						localOrVisitor
						penaltyScore
						score
						competitor {
							owner {
								... on Organization {
									name
									shortName
									photoUrls
								}
							}
						}
					}
				}
				links {
					link
					name
				}
				startedAt
				endedAt
			}
		}
	}
`);
