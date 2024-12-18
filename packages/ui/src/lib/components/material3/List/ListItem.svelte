<script lang="ts">
	import Link from '../../Link.svelte';
	import StateLayer from '../StateLayer.svelte';
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import type { Snippet } from 'svelte';
	import JetiIcon from '../../JetiIcon.svelte';

	type Props = {
		leadingIcon?: string | null;
		trailingIcon?: string | null;
		supportingText?: string | null;
		href?: string | null;
		onClick?: (() => void) | null;
		children?: Snippet;
		class?: string | null;
	};

	let { leadingIcon, trailingIcon, supportingText, href, onClick, children, ...props }: Props =
		$props();
	let isInteractive = $derived(!!(href || onClick));
	const classes = $derived(
		concatClasses(
			props.class,
			'relative w-full text-left items-center min-h-14 py-2 px-4 flex gap-4 typo-body-large',
		),
	);
</script>

{#snippet inside()}
	{#if leadingIcon}
		<JetiIcon>{leadingIcon}</JetiIcon>
	{/if}
	<div class="w-full">
		{@render children?.()}
		{#if supportingText}
			<p class="typo-body-medium">{supportingText}</p>
		{/if}
	</div>
	{#if trailingIcon}
		<JetiIcon>{trailingIcon}</JetiIcon>
	{/if}
{/snippet}

<li class="bg-surface-container">
	{#if isInteractive}
		{#if href}
			<Link {href} onclick={onClick} class={classes}>
				<StateLayer class="bg-on-surface" />
				{@render inside()}
			</Link>
		{:else}
			<button onclick={onClick} class={classes}>
				<StateLayer class="bg-on-surface" />
				{@render inside()}
			</button>
		{/if}
	{:else}
		<div class={classes}>
			{@render inside()}
		</div>
	{/if}
</li>
