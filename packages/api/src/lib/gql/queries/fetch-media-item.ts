import { graphql } from '../__generated__';

export const FETCH_MEDIA_ITEM = graphql(`
	query fetchMediaItem($id: ID!) {
		mediaItem(id: $id) {
			...MediaItemFields
			...ImageFields
		}
	}
`);
