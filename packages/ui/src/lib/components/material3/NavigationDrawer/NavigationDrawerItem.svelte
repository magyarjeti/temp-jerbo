<script lang="ts">
	import JetiIcon from '../../JetiIcon.svelte';
	import { type Snippet } from 'svelte';
	import { getNavigationDrawerContext } from './navigationDrawer.svelte';
	import StateLayer from '../StateLayer.svelte';
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { isAnchorAttrs, isButtonAttrs } from '../../../utils/components';

	type Props = {
		icon?: string | null;
		active?: boolean;
		children?: Snippet;
	} & (HTMLAnchorAttributes | HTMLButtonAttributes);

	let { icon, active = false, children, ...attrs }: Props = $props();
	const navigationDrawerContext = getNavigationDrawerContext();

	const handleAnchorClick = (
		event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement },
	) => {
		if (isAnchorAttrs(attrs) && attrs.href) {
			navigationDrawerContext.showNavigationDrawer = false;
			attrs.onclick?.(event);
		}
	};
	const baseClasses =
		'relative typo-label-large text-on-surface-variant shape-full flex w-full items-center gap-3 py-3 pl-4 pr-6';
	let classes = $derived(concatClasses(attrs.class, baseClasses));
</script>

{#snippet inside()}
	<StateLayer class={concatClasses('bg-on-surface shape-full', active && ' opacity-12')} />
	{#if icon}
		<JetiIcon>{icon}</JetiIcon>
	{:else}
		<span class="inline-flex h-[24px] w-[24px] items-center justify-center">
			<span class="h-[12px] w-[12px] rounded-full bg-outline-variant"></span>
		</span>
	{/if}
	{@render children?.()}
{/snippet}

{#if isAnchorAttrs(attrs)}
	<a class={classes} role="link" tabindex="0" {...attrs} onclick={handleAnchorClick}>
		{@render inside()}
	</a>
{:else if isButtonAttrs(attrs)}
	<button class={classes} {...attrs}>
		{@render inside()}
	</button>
{/if}
