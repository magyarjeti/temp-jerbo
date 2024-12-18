<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import JetiIcon from '../../JetiIcon.svelte';
	import StateLayer from '../StateLayer.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		selected?: boolean;
		children?: Snippet;
		leadingIcon?: Snippet | string;
		trailingIcon?: Snippet | string;
		onclick?: (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => void;
		class?: string | null;
	}

	let {
		selected = false,
		leadingIcon,
		children,
		trailingIcon,
		onclick,
		...props
	}: Props = $props();
	const classes = $derived(
		concatClasses(
			props.class,
			'relative w-full text-on-secondary-container flex h-12 cursor-pointer items-center gap-3 px-3',
			selected && 'bg-secondary-container',
		),
	);
</script>

{#snippet placeholder(icon: string)}
	<JetiIcon>{icon}</JetiIcon>
{/snippet}

<li>
	<button type="button" {onclick} class={classes}>
		<StateLayer class="bg-on-surface" />
		{#if typeof leadingIcon === 'string'}
			{@render placeholder(leadingIcon)}
		{:else}
			{@render leadingIcon?.()}
		{/if}
		{@render children?.()}
		{#if typeof trailingIcon === 'string'}
			{@render placeholder(trailingIcon)}
		{:else}
			{@render trailingIcon?.()}
		{/if}
	</button>
</li>
