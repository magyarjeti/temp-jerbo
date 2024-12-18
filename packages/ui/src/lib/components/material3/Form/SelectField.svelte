<script lang="ts">
	import type { Snippet } from 'svelte';
	import M3Icon from '../../M3Icon.svelte';
	import Menu from '../Menu/Menu.svelte';
	import MenuItem from '../Menu/MenuItem.svelte';
	import type { FieldVariant } from '../types';
	import InputFieldContainer from './InputFieldContainer.svelte';

	interface Props {
		options: {
			name: string;
			value: string;
			icon?: string;
			action?: () => void;
		}[];
		selected?: string | null | undefined;
		variant?: FieldVariant;
		errors?: string[] | undefined;
		leadingIcon?: Snippet;
	}

	let {
		options,
		selected = $bindable(undefined),
		variant = 'outlined',
		errors = [],
		leadingIcon,
	}: Props = $props();
	let anchorElement: HTMLElement | undefined = $state();
	let showMenu = $state(false);
	let selectedItem = $derived(
		selected ? options.find((option) => option.value === selected) || options[0] : options[0],
	);
</script>

<InputFieldContainer {variant} {errors}>
	<button
		onclick={() => (showMenu = !showMenu)}
		type="button"
		bind:this={anchorElement}
		class="m3-text-field flex min-w-28 items-center gap-2 text-left"
	>
		{#if selectedItem.icon}
			<M3Icon icon={selectedItem.icon} />
		{/if}
		{selectedItem.name}
	</button>
	{#if anchorElement}
		<Menu class="min-w-28" bind:show={showMenu} {anchorElement}>
			{#each options as option}
				<MenuItem
					onclick={() => {
						selected = option.value;
						if (option.action) {
							option.action();
						}
						showMenu = false;
					}}
				>
					{#if leadingIcon}
						{@render leadingIcon()}
					{:else if option.icon}
						<M3Icon icon={option.icon} />
					{/if}
					{option.name}</MenuItem
				>
			{/each}
		</Menu>
	{/if}
</InputFieldContainer>
