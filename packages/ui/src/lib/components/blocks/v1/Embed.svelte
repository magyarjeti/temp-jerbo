<script lang="ts">
	import type { EmbedBlock } from '@packages/api/sdk/v1/schema';
	import Embedly from '../../Embedly.svelte';

	interface Props {
		data?: EmbedBlock;
	}

	let { data }: Props = $props();
</script>

<Embedly src={data?.params?.src} />
