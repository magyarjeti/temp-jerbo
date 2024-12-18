<script lang="ts">
	import { onMount } from 'svelte';
	import JetiIcon from '../../JetiIcon.svelte';
	import InputFieldContainer from './InputFieldContainer.svelte';
	import type { FieldVariant } from '../types';
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = {
		label: string;
		variant?: FieldVariant;
		type?: 'text' | 'email' | 'password';
		errors?: string[];
		leadingIcon?: string | null;
		trailingIcon?: string | null;
		mounted?: (el: HTMLInputElement | undefined) => void;
	} & Pick<
		HTMLInputAttributes,
		'oninput' | 'onclick' | 'onkeyup' | 'onkeydown' | 'name' | 'value' | 'disabled' | 'class'
	>;

	let {
		label,
		variant = 'outlined',
		type = 'text',
		value = $bindable(),
		errors = [],
		leadingIcon,
		trailingIcon,
		mounted,
		...attrs
	}: Props = $props();

	let inputRef: HTMLInputElement | undefined = $state();

	onMount(() => {
		mounted?.(inputRef);
	});
	let hasErrors = $derived(errors && errors.length > 0);
	const classes = $derived(
		concatClasses(
			'max-w-full w-full h-full shape-extra-small bg-transparent',
			leadingIcon ? 'pl-13' : 'pl-4',
			trailingIcon || hasErrors ? 'pr-13' : 'pr-4',
		),
	);
</script>

<InputFieldContainer {variant} {errors} class={attrs.class}>
	{#if leadingIcon}
		<span class="absolute left-3 inline-flex items-center justify-center">
			<JetiIcon>{leadingIcon}</JetiIcon>
		</span>
	{/if}
	{#if type === 'email'}
		<input
			type="email"
			placeholder={label}
			{...attrs}
			bind:this={inputRef}
			bind:value
			class={classes}
		/>
	{:else if type === 'password'}
		<input
			type="password"
			placeholder={label}
			{...attrs}
			bind:this={inputRef}
			bind:value
			class={classes}
		/>
	{:else}
		<input
			type="text"
			placeholder={label}
			{...attrs}
			bind:this={inputRef}
			bind:value
			class={classes}
		/>
	{/if}
	{#if hasErrors}
		<span class="m3-text-field-trailing-icon text-error">
			<JetiIcon>error</JetiIcon>
		</span>
	{:else if trailingIcon}
		<span class="absolute right-3 inline-flex items-center justify-center">
			<JetiIcon>{trailingIcon}</JetiIcon>
		</span>
	{/if}
</InputFieldContainer>
