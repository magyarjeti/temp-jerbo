import { graphql } from '../__generated__';

export const FETCH_STREAM = graphql(`
	query fetchStream($except: StreamExcepts) {
		stream(except: $except) {
			articles {
				...ContentAbstract
			}
		}
	}
`);
