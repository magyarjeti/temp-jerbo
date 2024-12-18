<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import type { FieldVariant } from '../types';
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: FieldVariant;
		errors?: string[];
		class?: string | null;
		children?: Snippet;
	}

	let { variant = 'outlined', errors = [], children, ...props }: Props = $props();

	const textFieldVariantClassMap: Record<FieldVariant, string> = {
		filled: ' bg-primary text-on-primary',
		outlined: 'border-outline border',
	};

	const textFieldWrapperBaseClasses =
		'inline-flex items-center relative typo-label-large shape-extra-small disabled:bg-on-surface/12 disabled:text-on-surface/38 h-14 disabled:pointer-events-none';
	const classes = $derived(
		concatClasses(props.class, textFieldWrapperBaseClasses, textFieldVariantClassMap[variant]),
	);
</script>

<div>
	<div class={classes}>
		{@render children?.()}
	</div>
	{#if errors && errors.length > 0}
		<ul class="space-y-1 px-4 py-1">
			{#each errors as error}
				<li class="typo-body-medium text-error">{error}</li>
			{/each}
		</ul>
	{/if}
	<!-- TODO: Supporting Text -->
</div>
