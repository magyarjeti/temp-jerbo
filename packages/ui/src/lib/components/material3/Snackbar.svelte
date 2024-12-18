<script lang="ts">
	import JetiIcon from '../JetiIcon.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		message?: string | null;
	}

	let { message = $bindable() }: Props = $props();

	function clear() {
		message = undefined;
	}

	$effect(() => {
		setTimeout(() => {
			clear();
		}, 10000);
	});
</script>

{#if message}
	<div class="fixed bottom-[4dvh] w-full">
		<div class="container flex justify-center">
			<div
				transition:fade
				class="typo-body-medium flex min-h-12 w-fit items-center bg-inverse-surface py-2 pl-4 pr-3 text-inverse-on-surface elevation-3 shape-small"
			>
				<p>{message}</p>
				<button onclick={clear} aria-label="bezárás" class="ml-3 h-6 w-6 cursor-pointer"
					><JetiIcon>close</JetiIcon></button
				>
			</div>
		</div>
	</div>
{/if}
