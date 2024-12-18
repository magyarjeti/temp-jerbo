<script lang="ts">
	import CircularProgressIndeterminate from './material3/CircularProgressIndeterminate.svelte';

	export let show = false;
</script>

{#if show}
	<div class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-scrim/50">
		<div class="relative flex h-20 w-20 bg-surface-container-highest p-6 shape-extra-large">
			<CircularProgressIndeterminate />
		</div>
	</div>
{/if}
