import type { PageServerLoad } from './$types';
import { getClient } from '$lib/urql.server';
import { GET_CONTENTS } from '$lib/gql/queries/getContents';
import { ContentStatus, ContentType } from '$lib/gql/__generated__/graphql';

export const load: PageServerLoad = async (event) => {
	const client = getClient();
	const page = event.url.searchParams.has('page') ? Number(event.url.searchParams.get('page')) : 1;
	const perPage = 10;
	const contents = await client.query(GET_CONTENTS, {
		byType: [ContentType.Article, ContentType.LiveArticle, ContentType.LiveReport],
		byStatus: [ContentStatus.Draft, ContentStatus.Published],
		first: perPage,
		page: page,
	});
	const totalPages = contents.data?.contents.paginatorInfo.total
		? Math.ceil(contents.data.contents.paginatorInfo.total / perPage)
		: 1;
	return { contents: contents.data?.contents, page, totalPages };
};
