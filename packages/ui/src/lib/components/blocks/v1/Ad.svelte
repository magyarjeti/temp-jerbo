<script lang="ts">
	import type { AdBlock } from '@packages/api/sdk/v1/schema';
	import Ad from '../../Ad.svelte';

	interface Props {
		data?: AdBlock;
	}

	let { data }: Props = $props();
</script>

<Ad id={data?.params?.id || ''} adIndicator={!!data?.params?.adIndicator || false}></Ad>
