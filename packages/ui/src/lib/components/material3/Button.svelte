<script lang="ts">
	import type { Snippet } from 'svelte';
	import JetiIcon from '../JetiIcon.svelte';
	import StateLayer from './StateLayer.svelte';
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
	import { isAnchorAttrs, isButtonAttrs } from '../../utils/components';

	type Props = {
		variant?: 'filled' | 'outlined' | 'elevated' | 'text';
		disabled?: boolean | null;
		icon?: string | null | Snippet;
		selected?: boolean;
		children?: Snippet;
	} & (HTMLButtonAttributes | HTMLAnchorAttributes);

	let {
		variant = 'outlined',
		disabled,
		icon,
		selected = false,
		children,
		...attrs
	}: Props = $props();

	const variantClassMap: Record<typeof variant, string> = {
		filled: concatClasses(
			'bg-primary text-on-primary hover:elevation-1',
			selected && ' elevation-1',
		),
		elevated: concatClasses(
			'bg-surface-container text-primary elevation-1 hover:elevation-2',
			selected && ' elevation-2',
		),
		outlined: concatClasses(
			'border-outline-variant border bg-transparent focus:border-primary',
			selected && ' border-primary',
		),
		text: concatClasses(
			'text-primary',
			icon ? 'pl-3 pr-4' : 'px-3',
			selected && ' bg-primary text-on-primary',
		),
	};
	const stateLayerClasses: Record<typeof variant, string> = {
		filled: 'bg-on-primary',
		elevated: 'bg-primary',
		outlined: 'bg-primary',
		text: 'bg-primary',
	};
	const baseClasses = concatClasses(
		'relative typo-label-large shape-full min-h-10 gap-2 py-1 inline-flex cursor-pointer max-w-full items-center justify-center disabled:text-on-surface/38',
	);
	const nonTextVariantBaseClasses = concatClasses(
		'disabled:bg-on-surface/12',
		icon ? 'pl-4 pr-6' : 'px-6',
	);
	const classes = $derived(
		concatClasses(
			attrs.class,
			baseClasses,
			variantClassMap[variant],
			variant !== 'text' && nonTextVariantBaseClasses,
		),
	);
</script>

{#snippet inside()}
	<StateLayer class="{stateLayerClasses[variant]} shape-full" />
	{#if typeof icon === 'string'}
		<JetiIcon>{icon}</JetiIcon>
	{:else if icon}
		{@render icon()}
	{/if}
	<span class="min-w-0 {'href' in attrs ? 'truncate' : 'block'}">{@render children?.()}</span>
{/snippet}

{#if isAnchorAttrs(attrs)}
	<a
		aria-disabled={disabled}
		{...attrs}
		class={concatClasses(
			classes,
			disabled && 'pointer-events-none cursor-not-allowed text-on-surface/38',
			disabled && variant !== 'text' && 'bg-on-surface/12',
		)}
	>
		{@render inside()}
	</a>
{:else if isButtonAttrs(attrs)}
	<button
		aria-disabled={disabled}
		type={attrs.type || 'button'}
		{disabled}
		{...attrs}
		class={classes}
	>
		{@render inside()}
	</button>
{/if}
