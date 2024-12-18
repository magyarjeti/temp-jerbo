<script lang="ts">
	import type { ImageBlock } from '@packages/api/sdk/v1/schema';
	import MediaItem from '../../MediaItem.svelte';

	interface Props {
		data?: ImageBlock;
	}

	let { data }: Props = $props();
</script>

<div>
	<MediaItem
		mediaItem={data?.mediaItem}
		alt={data?.params?.alt}
		caption={data?.content}
		showAuthor={data?.params?.showauthor}
		enableGalleryView
	></MediaItem>
</div>
