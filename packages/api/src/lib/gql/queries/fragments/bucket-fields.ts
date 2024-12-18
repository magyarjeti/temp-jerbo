import { graphql } from '../../__generated__';

export const BUCKET_FIELDS = graphql(`
	fragment BucketFields on Bucket {
		id
		slug
		name
	}
`);
