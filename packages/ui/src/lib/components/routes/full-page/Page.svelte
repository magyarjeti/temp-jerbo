<script lang="ts">
	import { getPageMetaContext } from '../../../../../../page-meta/src/index.svelte';
	import { Ad, Blocks } from '../..';
	import type { FetchContentQuery } from '@packages/api/sdk/v1/schema';
	import type { ProcessedBlocks } from '@packages/api/processBlocks';
	import PhotoswipeAlbum from '../../photoswipe/PhotoswipeAlbum.svelte';
	import Share from '../../Share.svelte';

	interface Props {
		data: {
			content: FetchContentQuery;
			blocks: ProcessedBlocks;
		};
	}

	let { data }: Props = $props();
	const pageMeta = getPageMetaContext();
	Object.assign(pageMeta, {
		title: data.content.title,
		canonicalUrl: data.content.url,
		categories: data.content.categories.map((val) => val.slug),
		keywords: data.content.tags.map((val) => val.slug),
		pageType: 'article',
	});
</script>

<div class="container-wide">
	<Ad id="top" adIndicator={false}></Ad>
	<h1 class="sr-only">{data.content.title}</h1>
	<div class="grid grid-cols-1 gap-8">
		<PhotoswipeAlbum>
			<Blocks blocks={data.blocks}></Blocks>
		</PhotoswipeAlbum>
	</div>
	<div class="mt-8">
		<Share url={data.content.url} title={data.content.title} />
	</div>
</div>
