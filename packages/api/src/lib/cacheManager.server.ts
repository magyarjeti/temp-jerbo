import { md5Hash } from '@packages/toolbox/md5Hash';
import { getRedisClient } from './redis.server';
import { text } from '@sveltejs/kit';

type Options = {
	redisUrl: string;
	redisPrefix?: string;
};

export const cacheManager = async (
	request: Request,
	options: Options,
	requestHandler: () => Promise<Response>,
): Promise<Response> => {
	const redis = await getRedisClient(options.redisUrl);
	const body = await request.clone().text();
	const key = md5Hash(body);

	const cachedResponse = await redis?.get(key);
	if (cachedResponse) {
		return text(cachedResponse);
	}

	// Run the handler
	const res = await requestHandler();

	const data = await res.clone().text();
	if (!res.ok) {
		console.error(res.status, res.statusText);
		throw new Error('An error occured while fetching.');
	}
	await redis?.set(key, data, { EX: 60 * 5 });

	return text(data);
};
