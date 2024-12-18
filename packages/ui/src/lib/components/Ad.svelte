<script lang="ts">
	import { resize } from 'svelte-resize-observer-action';

	interface Props {
		id: string;
		adIndicator?: boolean | undefined;
	}

	let { id, adIndicator = undefined }: Props = $props();

	let formattedId = $derived(`ap-${id}`);
	let showIndicator = $state(adIndicator ?? false);

	function handleResize(entry: ResizeObserverEntry) {
		showIndicator = adIndicator !== false && entry.contentRect.height > 0;
	}
</script>

<div class="contents">
	<div class="contents" id={formattedId} class:ad={showIndicator} use:resize={handleResize}></div>
</div>

<style>
	.ad {
		text-align: center;
		z-index: 0;
	}

	.ad::after {
		content: 'hirdetés';
		display: 'block';
		font-size: '12px';
		text-transform: uppercase;
		font-family: sans-serif;
		text-align: 'center';
		font-family: 'boxed';
		margin-top: '4px';
		text-shadow: '1px 1px 0px #fff';
	}
</style>
