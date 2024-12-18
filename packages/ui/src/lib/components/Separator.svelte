<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		separator?: Component | null;
	}

	let { separator }: Props = $props();
</script>

{#if separator}
	<separator></separator>
{:else}
	<span aria-hidden="true" class="h-[0.5rem] w-[0.5rem] rounded-full bg-on-surface last:hidden"
	></span>
{/if}
