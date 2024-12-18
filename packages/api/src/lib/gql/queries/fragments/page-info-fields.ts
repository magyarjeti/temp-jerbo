import { graphql } from '../../__generated__';

export const PAGE_INFO_FIELDS = graphql(`
	fragment PageInfoFields on PageInfo {
		count
		currentPage
		hasPreviousPage
		hasNextPage
		startCursor
		endCursor
	}
`);

export const CURSOR_PAGINATION_INFO_FIELDS = graphql(`
	fragment CursorPaginationInfoFields on CursorPaginationInfo {
		count
		endCursor
		hasNextPage
		hasPreviousPage
		startCursor
		total
	}
`);
