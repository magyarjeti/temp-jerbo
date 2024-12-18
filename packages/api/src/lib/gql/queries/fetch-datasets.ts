import { graphql } from '../__generated__';

export const FETCH_DATASETS = graphql(`
	query fetchDatasets($slug: String, $postProcessors: [String]) {
		datasets(slug: $slug) {
			title
			body(postProcessor: $postProcessors)
			id
			updated_at
		}
	}
`);
