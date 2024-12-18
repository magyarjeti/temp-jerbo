<script lang="ts">
	import type { Author } from '@packages/api/sdk/v1/schema';
	import type { Category } from '@packages/api/sdk/v1/schema';
	import { Link } from '@packages/ui/components';
	import type { Component } from 'svelte';
	import Separator from './Separator.svelte';

	interface Props {
		locked?: boolean | null;
		authors?: Author[];
		categories?: Category[];
		date?: string | null;
		separator?: Component | null;
	}

	let { locked, authors = [], categories = [], date, separator }: Props = $props();
</script>

<ul class="typo-label-medium flex flex-wrap items-center gap-2 leading-none">
	{#if locked}
		<li class="w-5">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" role="presentation">
				<title>Zárt</title>
				<circle cx="10" cy="10" r="10" fill="var(--bg-color, #fcf100)" />
				<path
					d="M10,1.5A8.5,8.5,0,1,1,1.5,10,8.51,8.51,0,0,1,10,1.5M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,4.4A5.6,5.6,0,1,1,4.4,10,5.6,5.6,0,0,1,10,4.4M10,3a7,7,0,1,0,7,7,7,7,0,0,0-7-7Zm0,4a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-1a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"
				/>
			</svg>
		</li>
		<Separator {separator} />
	{/if}
	{#if authors.length > 0}
		{#each authors as author, i}
			<li>
				<Link class="hover:underline" href={author.url}>{author.name}</Link>
			</li>
			<Separator {separator} />
		{/each}
	{/if}
	{#if categories.length > 0}
		<li>
			<Link class="uppercase hover:underline" href={categories[0].url}>{categories[0].name}</Link>
		</li>
		<Separator {separator} />
	{/if}
	{#if date}
		<li>
			<span>{date}</span>
		</li>
		<Separator {separator} />
	{/if}
</ul>
