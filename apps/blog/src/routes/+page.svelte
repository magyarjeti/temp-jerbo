<script lang="ts">
	import { ContentsLoader } from '@packages/api/components';
	import { getPageMetaContext } from '../../../../packages/page-meta/src/index.svelte.js';
	import { Button } from '@packages/ui/components/material3';
	import { ArticleListItem } from '@packages/ui/components/routes';

	let { data } = $props();

	const pageMeta = getPageMetaContext();
	Object.assign(pageMeta, { title: data.config.displayName });
</script>

<div class="container-wide grid gap-6">
	{#await data.contents}
		{#each { length: 5 } as _}
			<ArticleListItem isLoading={true}></ArticleListItem>
		{/each}
	{:then contents}
		{#if contents}
			<ContentsLoader initialContents={contents}>
				{#snippet children(fetchMore, hasNext, contents)}
					{#each contents?.edges || [] as edge}
						<ArticleListItem data={edge}></ArticleListItem>
					{/each}
					<div class="mt-6 text-center">
						<Button
							onmouseover={() => fetchMore(true)}
							onclick={() => fetchMore()}
							disabled={!hasNext}>Korábbi cikkek</Button
						>
					</div>
				{/snippet}
			</ContentsLoader>
		{/if}
	{/await}
</div>
