# Jerbo API for data querying

## Setup

### Graphql server endpoint

1. Create a server route in your app, e.g. `src/routes/graphql/+server.ts`
2. Add the following, edit as needed:

   ```ts
   import { PUBLIC_JERBO_GATEWAY_URL, PUBLIC_JERBO_REDIS_URL } from '$env/static/public';
   import type { RequestHandler } from './$types';
   import { handleGqlRequest } from '@packages/api/proxy';

   export const POST: RequestHandler = async (event) => {
   	return handleGqlRequest(event.request, {
   		redisUrl: PUBLIC_JERBO_REDIS_URL,
   		gatewayUrl: PUBLIC_JERBO_GATEWAY_URL,
   		fetch: event.fetch,
   	});
   };
   ```

### ContentsLoader component

1. Use `setGatewayContext` in `+layout.svelte` or your preferred location, e.g.:

   ```ts
   import { setGatewayContext } from '@packages/api/components';

   setGatewayContext({ buckets: ['444'] });
   ```
