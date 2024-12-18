<script lang="ts">
	import { type Snippet } from 'svelte';
	import JetiIcon from '../../JetiIcon.svelte';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	interface Props {
		ariaLabel?: string | null;
		active?: string | null;
		value: string;
		onclick?: () => void;
		class?: string | null;
		children?: Snippet;
	}

	let { ariaLabel, active = $bindable(), value, onclick, children, ...props }: Props = $props();
	let isActive = $derived(active === value);

	const activeClasses =
		'bg-secondary-container border-secondary-container elevation-1 hover:state-layer-hover-secondary-container focus:state-layer-focus-secondary-container text-on-secondary-container';
	const inactiveClasses =
		'bg-surface-container-low border-outline elevation-0 hover:state-layer-hover-surface-variant focus:state-layer-focus-surface-variant text-on-surface-variant';
	const classes = $derived(
		concatClasses(
			props.class,
			'transition hover:elevation-2 border border-outline typo-label-large py-1/2 inline-flex min-h-8 items-center justify-center gap-2 pr-4 shape-small cursor-pointer pl-2',
			isActive ? activeClasses : inactiveClasses,
		),
	);

	function handleClick() {
		if (isActive) {
			active = '';
		} else {
			active = value;
		}
		onclick?.();
	}
</script>

<button aria-label={ariaLabel} onclick={handleClick} class={classes}>
	{#if isActive}
		<JetiIcon>done</JetiIcon>
	{/if}
	<span>{@render children?.()}</span>
</button>
