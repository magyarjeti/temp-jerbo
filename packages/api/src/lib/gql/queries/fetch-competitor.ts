import { graphql } from '../__generated__';

export const FETCH_COMPETITOR = graphql(`
	query fetchCompetitor($owner: String, $competitionSeries: [String!]) {
		competitor(owner: $owner, competitionSeries: $competitionSeries) {
			id
			outcomes {
				... on ListElectionOutcome {
					votes
					percent
					letterVotes
					letterPercent
					mandate
					mandatePercent
					listMandate
					listMandatePercent
					individualMandate
					individualMandatePercent
				}
			}
			owner {
				id
				slug
				color
				shortName
				name
				... on Organization {
					relatedCompetitors {
						id
						owner {
							... on Human {
								id
								name
								photoUrls
							}
						}
						outcomes {
							... on ElectionOutcome {
								isWinner
							}
						}
						markerTeams {
							id
							slug
							color
							shortName
							name
						}
						competitionStages {
							competition {
								area {
									id
									slug
									type
									shortName
									longName
								}
							}
						}
					}
				}
			}
			members {
				id
				name
				photoUrls
				outcome {
					competitor {
						owner {
							... on Organization {
								color
								shortName
							}
						}
					}
					isWinner
				}
			}
			markerTeams {
				id
				slug
				color
				shortName
				name
				# ... on Organization {
				#   markedCompetitors(
				#     type: "person"
				#     competitionSeries: $competitionSeries
				#   ) {
				#     id
				#     order
				#     owner {
				#       ... on Human {
				#         id
				#         name
				#         photoUrls
				#       }
				#     }
				#     outcomes {
				#       ... on PersonListElcetionOutcome {
				#         isWinner
				#       }
				#     }
				#     markerTeams {
				#       id
				#       slug
				#       color
				#       shortName
				#       name
				#     }
				#     competitionStages {
				#       competition {
				#         area {
				#           id
				#           slug
				#           shortName
				#           longName
				#         }
				#       }
				#     }
				#   }
				# }
			}
		}
	}
`);
