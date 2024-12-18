import { graphql } from '../__generated__';

export const GET_CONTENTS = graphql(`
	query getContents(
		$page: Int
		$search: String
		$first: Int
		$byType: [ContentType!]
		$byStatus: [ContentStatus!]
	) {
		contents(page: $page, search: $search, byType: $byType, byStatus: $byStatus, first: $first) {
			data {
				id
				status
				title {
					key
					value
				}
			}
			paginatorInfo {
				count
				currentPage
				firstItem
				hasMorePages
				lastItem
				lastPage
				perPage
				total
			}
		}
	}
`);
