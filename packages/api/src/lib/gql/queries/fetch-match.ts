import { graphql } from '../__generated__';

export const FETCH_MATCH = graphql(`
	query fetchMatch($id: ID, $slug: String) {
		competitionStage(id: $id, slug: $slug) {
			id
			name
			slug
			description
			competition {
				name
				type
				description
				competitionSeries {
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
			events {
				type
				participants {
					role
					participant {
						... on Human {
							name
							stageName
						}
					}
				}
				properties {
					key
					value
				}
				title
				# happenedAt
				description
			}
			statistics {
				... on FootballCompetitionStageStatistics {
					shotsTotal {
						local
						visitor
					}
					shotsOngoal {
						local
						visitor
					}
					shotsOffgoal {
						local
						visitor
					}
					shotsBlocked {
						local
						visitor
					}
					corners {
						local
						visitor
					}
					freeKick {
						local
						visitor
					}
					offsides {
						local
						visitor
					}
					passesPercentage {
						local
						visitor
					}
					passesTotal {
						local
						visitor
					}
					possessiontime {
						local
						visitor
					}
					attacksTotal {
						local
						visitor
					}
					attacksDangerous {
						visitor
						local
					}
				}
			}
			outcomes {
				... on FootballGroupStageOutcome {
					localOrVisitor
					score
					formation
					coach
					competitor {
						owner {
							... on Organization {
								name
								shortName
								photoUrls
							}
						}
						players {
							name
							shortName
							position
							number
							formationPosition
						}
					}
				}
				... on FootballKnockOutStageOutcome {
					localOrVisitor
					penaltyScore
					score
					formation
					coach
					competitor {
						owner {
							... on Organization {
								name
								shortName
								photoUrls
							}
						}
						players {
							name
							shortName
							position
							number
							formationPosition
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
`);
