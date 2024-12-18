<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { initSDK } from '../sdk/v1';
	import type { FetchContentsQuery } from '../sdk/v1/schema';
	import { getGatewayContext } from './gateway.svelte';

	interface Props {
		params?: Parameters<typeof sdk.content.getContents>[0];
		initialContents?: FetchContentsQuery;
		children?: Snippet<[typeof fetchMore, typeof hasNext, FetchContentsQuery | undefined]>;
	}

	let { params, initialContents = $bindable(undefined), children }: Props = $props();
	let _params = $state(params || {});
	let contents = $state(initialContents);
	let nextCursor = $state(initialContents?.pageInfo?.endCursor);
	let hasNext: boolean = $state(initialContents?.pageInfo?.hasNextPage || false);
	let nextBatch: Promise<FetchContentsQuery | undefined> | null = null;

	const gateway = getGatewayContext();

	if (!params?.buckets && gateway.buckets) {
		_params.buckets = gateway.buckets;
	}

	const sdk = initSDK();

	const setNext = (res?: FetchContentsQuery) => {
		nextCursor = res?.pageInfo?.endCursor;
		hasNext = res?.pageInfo?.hasNextPage || false;
	};
	const fetchContents = async () => {
		const res = await sdk.content.getContents(params);
		setNext(res);
		contents = res;
	};
	const fetchMore = async (prefetchOnly = false) => {
		if (!hasNext) {
			return;
		}
		if (prefetchOnly && nextBatch) {
			return;
		}
		if (contents && !prefetchOnly && nextBatch) {
			const _nextBatch = await nextBatch;
			if (_nextBatch) {
				contents.edges = [...contents.edges, ..._nextBatch.edges];
				setNext(_nextBatch);
				nextBatch = null;
			}
			return;
		}
		const req = sdk.content.getContents({ ...params, after: nextCursor });
		if (prefetchOnly) {
			nextBatch = req;
			return;
		}
		const res = await req;
		setNext(res);
		if (contents) {
			contents.edges = [...contents.edges, ...(res?.edges || [])];
		} else {
			contents = res;
		}
	};

	onMount(() => {
		if (!contents) {
			fetchContents();
		}
	});
</script>

{@render children?.(fetchMore, hasNext, contents)}
