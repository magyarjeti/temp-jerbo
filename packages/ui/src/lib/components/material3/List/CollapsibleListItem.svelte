<script lang="ts">
	import type { Snippet } from 'svelte';
	import JetiIcon from '../../JetiIcon.svelte';
	import StateLayer from '../StateLayer.svelte';
	import { getListContext } from './list.svelte';
	import collapse from 'svelte-collapse';

	interface Props {
		disabled?: boolean;
		header?: Snippet;
		children?: Snippet;
	}

	let { disabled = false, header, children }: Props = $props();
	const listContext = getListContext();
	const key = listContext.counter;
	listContext.counter += 1;
	let open = $derived(listContext.open === key);

	function handleClick() {
		if (listContext.open === key) {
			listContext.open = null;
		} else {
			listContext.open = key;
		}
	}

	const openClasses = 'pl-4 sm:pl-8 pr-4 py-2 h-auto';
	const closedClasses = 'pl-4 sm:pl-8 py-2';
</script>

<li class="bg-surface-container">
	<button
		{disabled}
		type="button"
		class="state-layers typo-body-large relative flex min-h-14 w-full items-center justify-between gap-4 px-4 py-2 text-left disabled:text-on-surface/38"
		aria-expanded={open}
		onclick={handleClick}
	>
		<StateLayer class="bg-on-surface" />
		<div>
			{@render header?.()}
		</div>
		<JetiIcon class={`transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
			>chevron_down</JetiIcon
		>
	</button>

	<div use:collapse={{ open, duration: 0.15 }} class="h-0 overflow-hidden">
		<div class={open ? openClasses : closedClasses}>
			{@render children?.()}
		</div>
	</div>
</li>
