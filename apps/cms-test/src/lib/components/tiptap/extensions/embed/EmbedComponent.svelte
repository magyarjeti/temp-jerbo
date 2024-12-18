<script lang="ts">
	import { urlRegExp } from '@packages/toolbox/string/url';
	import { Embedly } from '@packages/ui/components';
	import type { NodeViewProps } from '@tiptap/core';
	import { NodeViewWrapper } from 'svelte-tiptap';

	interface Props {
		node: NodeViewProps['node'];
		selected?: NodeViewProps['selected'];
	}

	let { node, selected = false }: Props = $props();
	let isSrcValid = $derived(
		node.attrs.src && node.attrs.src.startsWith('https') && urlRegExp.test(node.attrs.src),
	);
</script>

<NodeViewWrapper data-selected={selected} data-drag-handle>
	{#if isSrcValid}
		<Embedly src={node.attrs.src}>
			<div
				class="typo-display-small mx-auto flex h-100 w-[600px] max-w-full items-center justify-center bg-on-surface/50 text-surface shape-medium"
			>
				Embed betoltes alatt...
			</div>
		</Embedly>
	{:else}
		<div class="container">
			<div class="bg-error-container p-4 text-on-error-container">
				<p><strong>Hibás embed link:</strong></p>
				<p class="text-on-surface"><em>{node.attrs.src}</em></p>
			</div>
		</div>
	{/if}
</NodeViewWrapper>
