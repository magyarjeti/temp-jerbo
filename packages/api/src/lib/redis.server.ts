import { createClient } from 'redis';

let redisClient: ReturnType<typeof createClient>;
let redisAvailable = true;

export const getRedisClient = async (url: string) => {
	if (typeof window !== 'undefined') {
		console.log('RedisClient is not available in the browser.');
		return null;
	}
	if (!redisAvailable) {
		return null;
	}

	if (!redisClient) {
		try {
			redisClient = createClient({
				url,
				disableOfflineQueue: true,
				socket: {
					reconnectStrategy: function (retries) {
						if (retries > 5) {
							console.log('Too many attempts to reconnect. Redis connection was terminated');
							return new Error('Too many retries.');
						} else {
							return 500;
						}
					},
				},
			});

			redisClient.on('error', (err) => {
				console.error('Redis Client Error', err);
			});
			await redisClient.connect();
			console.log('Connected to Redis.');
		} catch (err) {
			console.error('Failed to connect to Redis:', err);
			redisAvailable = false;
			return null;
		}
	}

	return redisClient;
};
