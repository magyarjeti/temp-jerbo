import { graphql } from '../__generated__';

export const FETCH_MANDATES = graphql(`
	query FetchMandates($competitionSeries: [String!], $competitionStage: [CompetitionStageType!]) {
		list: competitions(
			type: ELECTION
			area: { slug: "magyarorszag" }
			competitionSeriesSlug: $competitionSeries
		) {
			data {
				competitionStages(type: $competitionStage) {
					data {
						id
						name
						type
						startedAt
						endedAt
						statistics {
							... on ElectionCompetitionStageStatistics {
								voters
								votersAppeared
								votersAppearedPercentage
								votersAppearedPercentageTime
								validVotes
								validVotesPercentage
								invalidVotes
								invalidVotesPercentage
								processingPercentage
								processingPercentageTime
								ballotPapers
							}
						}
						outcomes {
							competitor {
								id
								owner {
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
									shortName
								}
							}
							... on ListElectionOutcome {
								votes
								mandate
								listMandate
								percent
							}
						}
					}
				}
			}
		}
	}
`);
