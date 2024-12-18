<script lang="ts">
	import Byline from '../../Byline.svelte';
	import { getPageMetaContext } from '../../../../../../page-meta/src/index.svelte';
	import { Blocks } from '../../';
	import type { FetchContentQuery, MediaItem as TMediaItem } from '@packages/api/sdk/v1/schema';
	import type { ProcessedBlocks } from '@packages/api/processBlocks';
	import PhotoswipeAlbum from '../../photoswipe/PhotoswipeAlbum.svelte';
	import Share from '../../Share.svelte';
	import Tag from '../../Tag.svelte';
	import MediaItem from '../../MediaItem.svelte';
	import Embedly from '../../Embedly.svelte';
	import YoutubeEmbed from '../../YoutubeEmbed.svelte';

	interface Props {
		data: {
			content: FetchContentQuery;
			blocks: ProcessedBlocks;
			jumbotron?: { image?: TMediaItem; youtube?: string; html?: string };
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

<div class="container-wide mt-8">
	{#if data.jumbotron?.image}
		<MediaItem
			class="max-h-[66dvh] w-full object-cover object-center"
			mediaItem={data.jumbotron.image}
		/>
	{:else if data.jumbotron?.youtube}
		<YoutubeEmbed url={data.jumbotron.youtube} />
	{:else if data.jumbotron?.html}
		{@html data.jumbotron.html}
	{/if}
	<h1 class="typo-display-large mt-4">{data.content.title}</h1>
</div>
<div class="container">
	<!-- BYLINE -->
	<div class="mt-4">
		<Byline
			authors={data.content.authors}
			categories={data.content.categories}
			date={data.content.createdAt}
		/>
	</div>
	<div class="mt-8">
		<Share url={data.content.url} title={data.content.title} />
	</div>
	<div class="mt-8 grid grid-cols-1 gap-8">
		<PhotoswipeAlbum>
			<Blocks blocks={data.blocks}></Blocks>
		</PhotoswipeAlbum>
	</div>
	<div class="mt-8">
		<div class="flex flex-wrap gap-2">
			{#each data.content.tags as tag}
				<Tag href={tag.url}>{tag.name}</Tag>
			{/each}
		</div>
	</div>
</div>
