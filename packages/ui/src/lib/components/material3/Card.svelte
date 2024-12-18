<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import StateLayer from './StateLayer.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'filled' | 'outlined' | 'elevated';
		disabled?: boolean;
		href?: string | null;
		onclick?: (() => void) | null;
		children?: Snippet;
		class?: string | null;
	}

	let { variant = 'filled', href, onclick, children, disabled = false, ...props }: Props = $props();
	let isInteractive = $derived(!!(href || onclick));

	const cardTypeClassMap: Record<typeof variant, string> = {
		filled: 'bg-surface-container-highest',
		elevated: 'bg-surface-container-low elevation-1',
		outlined: 'bg-surface border border-outline-variant',
	};
	const interactiveCardTypeClassMap: Record<typeof variant, string> = {
		filled: 'hover:elevation-1',
		elevated: 'transition hover:elevation-2',
		// TODO
		outlined: '',
	};
	const shapeClass = 'shape-medium';
	const classes = $derived(
		concatClasses(
			props.class,
			'relative overflow-hidden',
			shapeClass,
			cardTypeClassMap[variant],
			isInteractive && interactiveCardTypeClassMap[variant],
			disabled && 'opacity-38',
		),
	);
</script>

{#snippet inside()}
	<StateLayer class={concatClasses('bg-on-surface', shapeClass)} />
	{@render children?.()}
{/snippet}

{#if isInteractive}
	{#if href}
		<a {href} {onclick} class={classes}>
			{@render inside()}
		</a>
	{:else}
		<button {onclick} class={classes}>
			{@render inside()}
		</button>
	{/if}
{:else}
	<div class={classes}>
		{@render children?.()}
	</div>
{/if}
