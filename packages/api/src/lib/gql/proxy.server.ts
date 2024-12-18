import { cacheManager } from '../cacheManager.server';

type Options = {
	redisUrl: string;
	// TODO
	redisPrefix?: string;
	gatewayUrl: string;
	fetch?: typeof fetch;
};

export const handleGqlRequest = async (request: Request, options: Options) => {
	return cacheManager(request, { redisUrl: options.redisUrl }, async () => {
		const fetchFn = options.fetch || fetch;
		const body = await request.text();
		return fetchFn(`${options.gatewayUrl}/graphql`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body,
		});
	});
};
