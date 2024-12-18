import { graphql } from '../__generated__';

export const FETCH_COMPETITIONS_WITH_RESULTS = graphql(`
	query fetchCompetitionsWithResults(
		$type: [CompetitionType!]
		$area: AreaFilterInput
		$competitionStageType: [CompetitionStageType!]
		$competitionSeries: [String!]
	) {
		competitions(type: $type, area: $area, competitionSeriesSlug: $competitionSeries, first: 106) {
			data {
				id
				name
				shortName
				area {
					id
					slug
					type
					shortName
				}
				competitionStages(type: $competitionStageType) {
					data {
						id
						name
						type
						outcomes {
							competitor {
								id
								owner {
									... on Human {
										id
										slug
										name
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
								processingPercentage
								validVotes
								votersAppeared
								votersAppearedPercentage
								votersAppearedPercentageTime
							}
						}
					}
				}
			}
		}
	}
`);
