<script lang="ts">
	import type { HtmlBlock } from '@packages/api/sdk/v1/schema';

	interface Props {
		data?: HtmlBlock;
	}

	let { data }: Props = $props();
</script>

{#if data?.content}
	<div class="jerbo-html">{@html data.content}</div>
{/if}

<style lang="postcss">
	.jerbo-html {
		:global(.jeti-image) {
			max-width: 100%;
		}
	}
</style>
