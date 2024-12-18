<script lang="ts">
	import { setListContext } from './list.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	setListContext();
</script>

<ul class="m3-list">
	{@render children?.()}
</ul>

<style lang="postcss">
	.m3-list > :global(li) + :global(li) {
		@apply border-t border-surface-variant;
	}
</style>
