import { PUBLIC_JERBO_GATEWAY_URL, PUBLIC_JERBO_REDIS_DB } from '$env/static/public';
import { JERBO_REDIS_URL } from '$env/static/private';
import type { RequestHandler } from './$types';
import { handleGqlRequest } from '@packages/api/proxy';

export const POST: RequestHandler = async (event) => {
	return handleGqlRequest(event.request, {
		redisUrl: `${JERBO_REDIS_URL}/${PUBLIC_JERBO_REDIS_DB}`,
		gatewayUrl: PUBLIC_JERBO_GATEWAY_URL,
		fetch: event.fetch,
	});
};
