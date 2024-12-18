<script lang="ts">
	import type { MediaItem, MediaItemSize } from '@packages/api/sdk/v1/schema';
	import JetiIcon from './JetiIcon.svelte';
	import Link from './Link.svelte';
	import { getPhotoswipeContext } from './photoswipe/photoswipe';
	import { onMount } from 'svelte';
	import type { SlideData } from 'photoswipe';

	interface Props {
		wrapperClass?: string | null;
		mediaItem?: MediaItem | string | null;
		enableCaption?: boolean;
		alt?: string | null;
		caption?: string | null;
		showAuthor?: boolean | null;
		preferSize?: MediaItemSize | null;
		enableGalleryView?: boolean;
		class?: string | null;
	}

	let {
		wrapperClass = undefined,
		mediaItem = undefined,
		enableCaption = true,
		alt = undefined,
		caption = undefined,
		showAuthor = false,
		preferSize = undefined,
		enableGalleryView = false,
		...props
	}: Props = $props();

	let mediaSrc = $derived(typeof mediaItem === 'string' ? mediaItem : mediaItem?.url);
	const photoswipeContext = getPhotoswipeContext();
	let el: HTMLElement | undefined = $state();
	let index = $state(0);

	onMount(() => {
		if (enableGalleryView && $photoswipeContext) {
			index = $photoswipeContext.gallery.length;
			const slide: SlideData = {
				alt: alt || '',
				element: el,
			};
			if (typeof mediaItem === 'string') {
				slide.url = mediaItem;
				slide.src = mediaItem;
			} else {
				slide.height = mediaItem?.height;
				slide.width = mediaItem?.width;
				slide.url = mediaItem?.url;
				slide.src = mediaItem?.url;
			}
			$photoswipeContext.gallery = [...$photoswipeContext.gallery, slide];
		}
	});
	const handleImageClick = (ev: Event) => {
		if (enableGalleryView && $photoswipeContext?.openPswp) {
			ev.preventDefault();
			$photoswipeContext.openPswp(index);
		}
	};
	const preferredSize = $derived(
		typeof mediaItem === 'string'
			? null
			: mediaItem?.variations.find((val) => {
					return val.size === preferSize;
				}),
	);
</script>

{#snippet picture()}
	{#if mediaItem}
		{#if typeof mediaItem === 'string'}
			<img class={props.class} src={mediaItem} {alt} />
		{:else if preferSize}
			<img class={props.class} src={preferredSize?.url || mediaItem.url} alt={mediaItem.caption} />
		{:else}
			<picture>
				{#if mediaItem.variations}
					{#each Object.values(mediaItem.variations) as variation}
						<source media="(max-width: {variation.width}px)" srcset={variation.url} />
					{/each}
				{/if}
				<img class={props.class} src={mediaItem.url} alt={mediaItem.caption} />
			</picture>
		{/if}
	{/if}
{/snippet}

<figure bind:this={el} class={wrapperClass}>
	{#if enableGalleryView}
		<Link href={mediaSrc} onclick={handleImageClick}>
			{@render picture()}
		</Link>
	{:else}
		{@render picture()}
	{/if}

	{#if typeof mediaItem !== 'string' && ((mediaItem?.caption && enableCaption) || (mediaItem?.author && showAuthor))}
		<figcaption class="mt-1 flex gap-2">
			<JetiIcon --icon-size={16} class="relative top-[4px] align-top">photo_camera</JetiIcon>
			<div>
				{#if enableCaption}
					<span class="typo-body-small">
						{#if mediaItem?.caption}
							{mediaItem.caption}
						{:else}
							{@html caption}
						{/if}
					</span>
				{/if}
				{#if showAuthor}
					<span class="typo-label-large ml-1">
						<span>Fotó: </span>
						{#if mediaItem.sourceLink}
							<Link class="underline hover:no-underline" href={mediaItem.sourceLink}
								>{mediaItem.author}</Link
							>
						{:else}
							<span>{mediaItem.author}</span>
						{/if}
					</span>
				{/if}
			</div>
		</figcaption>
	{/if}
</figure>
