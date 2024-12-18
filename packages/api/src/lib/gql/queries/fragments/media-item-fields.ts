import { graphql } from '../../__generated__';

export const MEDIA_ITEM_FIELDS = graphql(`
	fragment MediaItemFields on MediaItem {
		id
		caption
		author
		# uploader
		url
		creditType
		sourceLink
		bucket {
			...BucketFields
		}
	}
`);

export const IMAGE_FIELDS = graphql(`
	fragment ImageFields on Image {
		url
		width
		height
		variations {
			url
			size
			width
			height
		}
	}
`);
