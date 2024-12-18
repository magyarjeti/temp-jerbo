<script lang="ts">
	import Article from '../list-item/Article.svelte';
	import type { FetchContentsQuery } from '@packages/api/sdk/v1/schema';
	import { getPageMetaContext } from '../../../../../../page-meta/src/index.svelte';
	import { ContentsLoader } from '../../../../../../api/src/lib/components/index.svelte';
	import Button from '../../material3/Button.svelte';

	interface Props {
		taxonomyType: 'categories' | 'tags' | 'partners' | 'authors';
		data: {
			taxonomy: {
				name: string;
				url: string;
				slug: string;
			};
			contents?: FetchContentsQuery;
		};
	}

	let { taxonomyType, data }: Props = $props();
	const pageMeta = getPageMetaContext();
	Object.assign(pageMeta, { title: data.taxonomy.name, canonicalUrl: data.taxonomy.url });
</script>

<div class="container-wide">
	<h1 class="typo-display-large">{data.taxonomy.name}</h1>
	<div class="mt-8 grid gap-4">
		{#if data.contents}
			{#key data.taxonomy.slug}
				<ContentsLoader
					params={{ [taxonomyType]: [data.taxonomy.slug] }}
					initialContents={data.contents}
				>
					{#snippet children(fetchMore, hasNext, contents)}
						{#each contents?.edges || [] as edge}
							<Article data={edge}></Article>
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
			{/key}
		{/if}
	</div>
</div>
