<script lang="ts">
	import type { Snippet } from 'svelte';
	import Link from './Link.svelte';
	import StateLayer from './material3/StateLayer.svelte';

	interface Props {
		href: string;
		children?: Snippet;
	}

	let { href, children }: Props = $props();
</script>

<Link
	class="relative inline-flex h-8 items-center justify-center bg-surface-variant px-4 shape-large"
	{href}
>
	<StateLayer class="bg-on-surface-variant" />
	{@render children?.()}
</Link>
