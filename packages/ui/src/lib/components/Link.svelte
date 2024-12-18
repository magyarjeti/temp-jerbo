<script lang="ts">
	import isAbsoluteUrl from '../utils/isAbsoluteUrl';
	import isLocalUrl from '../utils/isLocalUrl';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	type Props = {
		disabled?: boolean | null | undefined;
		allowReferer?: boolean;
		children?: Snippet;
	} & HTMLAnchorAttributes;

	let { disabled, allowReferer = false, children, ...attrs }: Props = $props();

	let isExternalLink = $derived(isAbsoluteUrl(attrs.href) && !isLocalUrl(attrs.href));
	const classes = $derived(concatClasses(attrs.class, disabled && 'disabled opacity-38'));
</script>

{#if attrs.href}
	<a
		target={isExternalLink ? '_blank' : undefined}
		rel={isExternalLink ? ('noopener' + !allowReferer ? ' noreferrer' : '') : undefined}
		aria-disabled={disabled}
		{...attrs}
		class={classes}>{@render children?.()}</a
	>
{:else}
	<span class={classes} aria-disabled={disabled}>{@render children?.()}</span>
{/if}
