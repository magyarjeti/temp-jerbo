<script lang="ts">
	import JetiIcon from '../JetiIcon.svelte';
	import Link from '../Link.svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
	import { isAnchorAttrs, isButtonAttrs } from '../../utils/components';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	type Props = {
		variant?: 'primary' | 'secondary' | 'tertiary' | 'surface';
		icon: string;
		disabled?: boolean;
	} & (HTMLButtonAttributes | HTMLAnchorAttributes);

	let { variant = 'primary', icon, disabled, ...attrs }: Props = $props();

	const variantClassMap: Record<typeof variant, string> = {
		primary:
			'bg-primary-container text-on-primary-container hover:state-layer-hover-on-primary-container focus:state-layer-focus-on-primary-container',
		secondary:
			'bg-secondary-container text-on-secondary-container hover:state-layer-hover-on-secondary-container focus:state-layer-focus-on-secondary-container',
		tertiary:
			'bg-tertiary-container text-on-tertiary-container hover:state-layer-hover-on-tertiary-container focus:state-layer-focus-on-tertiary-container',
		surface:
			'bg-surface-container text-on-surface-container hover:state-layer-hover-on-surface-container focus:state-layer-focus-on-surface-container',
	};
	let classes = $derived(
		concatClasses(
			attrs.class,
			'cursor-pointer inline-flex items-center justify-center typo-label-medium h-14 w-14 elevation-1 shape-large hover:elevation-2',
			variantClassMap[variant],
		),
	);
</script>

{#if isAnchorAttrs(attrs)}
	<Link class={classes} {disabled} aria-disabled={disabled} {...attrs}>
		<JetiIcon>{icon}</JetiIcon>
	</Link>
{:else if isButtonAttrs(attrs)}
	<button class={classes} aria-disabled={disabled} {disabled} {...attrs}>
		<JetiIcon>{icon}</JetiIcon>
	</button>
{/if}
