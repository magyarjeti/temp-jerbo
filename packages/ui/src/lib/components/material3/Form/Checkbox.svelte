<script lang="ts">
	import type { Snippet } from 'svelte';
	import JetiIcon from '../../JetiIcon.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	type Props = {
		errors?: string[] | null | undefined;
		children?: Snippet;
	} & Pick<HTMLInputAttributes, 'value' | 'name' | 'disabled' | 'checked' | 'onchange'>;

	let {
		checked = $bindable(false),
		value = $bindable(),
		name,
		errors,
		disabled,
		children,
		...attrs
	}: Props = $props();

	let hasErrors = $derived(errors && errors.length > 0);
</script>

<label
	class="inline-flex cursor-pointer items-baseline justify-center"
	class:pointer-events-none={disabled}
>
	<span class="relative">
		<input
			bind:checked
			bind:value
			type="checkbox"
			class="absolute h-0 w-0 appearance-none opacity-0"
			{...attrs}
		/>
		<span
			class="inline-flex size-10 items-center justify-center border-2 border-on-surface-variant shape-extra-small peer-checked:border-primary"
		></span>
		<JetiIcon
			class={concatClasses(
				'peer-checked:opacity-100',
				hasErrors ? 'text-error' : 'text-primary',
				disabled ? 'opacity-38' : 'opacity-0',
			)}>done</JetiIcon
		>
	</span>
	{@render children?.()}
</label>
