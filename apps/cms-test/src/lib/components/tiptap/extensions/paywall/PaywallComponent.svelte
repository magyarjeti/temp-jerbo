<script lang="ts">
	import { Paywall } from '@packages/ui/components';
	import type { NodeViewProps } from '@tiptap/core';
	import { NodeViewWrapper } from 'svelte-tiptap';

	interface Props {
		selected?: NodeViewProps['selected'];
	}

	let { selected = false }: Props = $props();
</script>

<NodeViewWrapper data-selected={selected} data-drag-handle>
	<Paywall />
</NodeViewWrapper>
