import { type GraphQLResponseResolver, HttpResponse } from 'msw';
import { fakeContent } from './fakes';

// query fetchContents {
//   Contents {
//     docs {
//       id
//       slug
//       title
//       featuredImage
//       excerpt
//       publishedAt
//       createdAt
//       updatedAt
//       blocks
//       categories {
//         id
//         name
//         slug
//       }
//       tags {
//         id
//         name
//         slug
//       }
//       authors {
//         id
//         name
//         slug
//       }
//     }
//     hasNextPage
//     hasPrevPage
//     limit
//     nextPage
//     offset
//     page
//     pagingCounter
//     prevPage
//     totalDocs
//     totalPages
//   }
// }

// TODO: use graphql-tools mock with backend schema for mocking?
const fetchContents: GraphQLResponseResolver = ({ query, variables }) => {
	console.log("Intercepted 'fetchContent' gql query");
	const data = {
		data: {
			Content: fakeContent(),
		},
	};
	return HttpResponse.json(data);
};

export default fetchContents;
