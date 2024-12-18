import { graphql } from '../__generated__';

export const FETCH_AREA = graphql(`
	query fetchArea(
		$slug: String
		$competitionSeries: [String!]
		$competitionStageType: [CompetitionStageType!]
	) {
		area(slug: $slug) {
			...AreaFields
			competitionStages(type: $competitionStageType, competitionSeriesSlug: $competitionSeries) {
				data {
					id
					name
					type
					startedAt
					endedAt
					outcomes {
						competitor {
							id
							owner {
								... on Human {
									id
									slug
									name
									stageName
									photoUrls
								}
								... on Organization {
									id
									slug
									name
									shortName
									photoUrls
									color
								}
							}
							markerTeams {
								id
								name
								shortName
								color
							}
						}
						... on ElectionOutcome {
							isWinner
							percent
							votes
						}
						... on ListElectionOutcome {
							mandate
							mandatePercent
							votes
							percent
						}
					}
					statistics {
						... on ElectionCompetitionStageStatistics {
							voters
							votersAppeared
							votersAppearedPercentage
							votersAppearedPercentageTime
							ballotPapers
							validVotes
							invalidVotes
							processingPercentage
							processingPercentageTime
						}
					}
				}
			}
		}
	}
`);
