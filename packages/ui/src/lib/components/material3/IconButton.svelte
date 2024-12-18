<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import JetiIcon from '../JetiIcon.svelte';
	import StateLayer from './StateLayer.svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { isAnchorAttrs, isButtonAttrs } from '../../utils/components';

	type Props = {
		variant?: 'standard' | 'outlined' | 'filled';
		disabled?: boolean | undefined;
		icon?: string | undefined | null;
		selected?: boolean;
		children?: Snippet;
	} & (HTMLButtonAttributes | HTMLAnchorAttributes);

	let {
		variant = 'standard',
		disabled,
		icon,
		selected = false,
		children,
		...attrs
	}: Props = $props();

	const variantClassMap: Record<typeof variant, string> = $derived({
		standard: concatClasses('text-primary', selected && 'bg-on-surface-variant/12'),
		outlined: concatClasses(
			'border border-outline disabled:border-on-surface/12',
			selected && 'bg-on-surface-variant/12',
		),
		filled: concatClasses(
			'text-primary bg-surface-container-highest disabled:border-on-surface/12',
			selected && 'bg-primary text-on-primary',
		),
	});
	const stateLayerClasses: Record<typeof variant, string> = {
		standard: 'bg-on-surface-variant',
		outlined: 'bg-on-surface-variant',
		filled: 'bg-primary',
	};
	const baseClasses =
		'relative shape-full typo-label-medium h-10 w-10 text-[1em] disabled:text-on-surface/38 inline-flex max-w-full cursor-pointer items-center justify-center';
	const classes = $derived(concatClasses(attrs.class, baseClasses, variantClassMap[variant]));
</script>

{#snippet inside()}
	<StateLayer class={concatClasses(stateLayerClasses[variant], 'shape-full')} />
	{#if children}
		{@render children()}
	{:else}
		<JetiIcon>{icon}</JetiIcon>
	{/if}
{/snippet}

{#if isAnchorAttrs(attrs)}
	<a
		aria-disabled={disabled}
		{...attrs}
		class={concatClasses(
			classes,
			disabled && 'text-on-surface/38',
			disabled && variant !== 'standard' && 'border-on-surface/12',
		)}
	>
		{@render inside()}
	</a>
{:else if isButtonAttrs(attrs)}
	<button
		class={classes}
		aria-disabled={disabled}
		{disabled}
		type={attrs.type || 'button'}
		{...attrs}
	>
		{@render inside()}
	</button>
{/if}
