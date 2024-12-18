<script lang="ts">
	import { ArticleListItem } from '@packages/ui/components/routes';
	import { getPageMetaContext } from '../../../../packages/page-meta/src/index.svelte.js';
	import { ContentsLoader } from '@packages/api/components';
	import { Button } from '@packages/ui/components/material3';

	let { data } = $props();

	const pageMeta = getPageMetaContext();
	Object.assign(pageMeta, { title: 'Mehr Licht' });
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
