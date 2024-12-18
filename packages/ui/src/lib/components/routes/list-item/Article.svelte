<script lang="ts">
	import { Link, MediaItem, Skeleton } from '../../';
	import Byline from '../../Byline.svelte';
	import type { Content } from '@packages/api/sdk/v1/schema';

	interface Props {
		// TODO: img alt
		data?: Content | null;
		isLoading?: boolean;
	}

	let { data, isLoading = false }: Props = $props();
</script>

<div class="flex gap-1/2 gap-3 sm:gap-8">
	{#if isLoading}
		<Skeleton class="aspect-3/2 basis-[132px] max-sm:order-1 sm:basis-[288px]" />
		<div class="flex grow flex-col items-start">
			<Skeleton class="typo-title-large h-7 w-full" />
			<Skeleton class="mt-2 inline-flex h-4 w-60" />
			{#each { length: 5 } as _}
				<Skeleton class="mt-3 h-4 w-full" />
			{/each}
		</div>
	{:else if data}
		{#if data.featuredImage}
			<Link
				class="shrink-0 basis-[132px] max-sm:order-1 max-sm:h-full sm:basis-[288px]"
				href={data.url}
			>
				<MediaItem
					mediaItem={data.featuredImage}
					preferSize="sm"
					class="h-full w-full object-cover sm:aspect-3/2"
					wrapperClass="h-full w-full"
					enableCaption={false}
				/>
			</Link>
		{/if}
		<div class="min-w-1 grow max-sm:py-6">
			<h1 class="typo-title-large break-words">
				<Link href={data.url}>{data.title}</Link>
			</h1>
			<div class="mt-2">
				<Byline
					authors={data.authors}
					categories={data.categories}
					date={data.createdAt}
					locked={false}
				/>
			</div>
			{#if data.excerpt}
				<p class="mt-3 max-sm:hidden">{data.excerpt}</p>
			{/if}
		</div>
	{/if}
</div>
