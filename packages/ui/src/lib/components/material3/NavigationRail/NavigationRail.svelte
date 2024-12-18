<script lang="ts">
	import { getNavigationDrawerContext } from '../NavigationDrawer/navigationDrawer.svelte';
	import IconButton from '../IconButton.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		enableNavigationDrawer?: boolean;
		children?: Snippet;
	}

	const navigationDrawerContext = getNavigationDrawerContext();
	let { enableNavigationDrawer = true, children }: Props = $props();

	const handleNavigationDrawerToggle = () => {
		navigationDrawerContext.showNavigationDrawer = !navigationDrawerContext.showNavigationDrawer;
	};
</script>

<aside class="grid w-20 grid-cols-1 grid-rows-[auto_1fr] gap-8 bg-surface px-3">
	{#if enableNavigationDrawer}
		<div class="text-center">
			<IconButton onclick={handleNavigationDrawerToggle} icon="menu" />
		</div>
	{/if}
	<ul class="mx-auto flex flex-col gap-3">
		{@render children?.()}
	</ul>
</aside>
