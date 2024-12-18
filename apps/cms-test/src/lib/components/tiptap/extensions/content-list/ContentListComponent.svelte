<script lang="ts">
	import { ContentsLoader } from '@packages/api/components';
	import { ArticleListItem } from '@packages/ui/components/routes';
	import type { NodeViewProps } from '@tiptap/core';
	import { NodeViewWrapper } from 'svelte-tiptap';

	interface Props {
		selected?: NodeViewProps['selected'];
		node?: NodeViewProps['node'];
	}

	let { selected = false, node }: Props = $props();
</script>

<NodeViewWrapper data-selected={selected} data-drag-handle>
	<ContentsLoader params={{ buckets: node?.attrs.buckets, limit: 5 }}>
		{#snippet children(fetchMore, hasNext, contents)}
			<div class="pointer-events-none">
				{#each contents?.edges || [] as edge}
					<ArticleListItem data={edge}></ArticleListItem>
				{/each}
				<div class="mt-6 text-center">...Korábbi cikkek</div>
			</div>
		{/snippet}
	</ContentsLoader>
</NodeViewWrapper>
