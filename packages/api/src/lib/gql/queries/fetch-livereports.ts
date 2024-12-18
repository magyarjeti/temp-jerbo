import { graphql } from '../__generated__';

export const FETCH_LIVEREPORTS = graphql(`
	query fetchLivereportsStats($id: ID, $buckets: Mixed!, $after: String) {
		content(id: $id, fromBucket: { column: SLUG, operator: IN, value: $buckets }) {
			id
			... on LiveArticle {
				reports(
					after: $after
					orderBy: [{ column: PUBLISHED_AT, order: DESC }]
					cursorInclusive: true
				) @connection(key: "reportsStats") {
					pageInfo {
						total
					}
					liveReportsStats {
						highlighted
						latestReport
						postsBehindTheCursor
					}
				}
			}
		}
	}
`);
