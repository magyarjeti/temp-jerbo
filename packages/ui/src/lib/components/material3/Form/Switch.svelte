<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = {
		group?: string[];
		children?: Snippet;
	} & Pick<HTMLInputAttributes, 'value' | 'name' | 'disabled' | 'checked' | 'onchange'>;

	let {
		checked = $bindable(false),
		value = $bindable(),
		group = $bindable(),
		children,
		...attrs
	}: Props = $props();
</script>

<label>
	{@render children?.()}
	<span
		class="relative inline-flex h-8 w-13 min-w-13 cursor-pointer items-center justify-center rounded-full"
	>
		<input
			bind:checked
			bind:group
			bind:value
			type="checkbox"
			class="absolute h-0 w-0 appearance-none opacity-0"
			{...attrs}
		/>
		<span
			class="absolute bottom-0 left-0 right-0 top-0 rounded-full border-2 border-outline bg-surface-container-highest transition-all"
		></span>
		<span
			class="absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 transform rounded-full bg-outline transition-all"
		></span>
	</span>
</label>
