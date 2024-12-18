<script lang="ts">
	import type { SearchQuery } from '@packages/api/sdk/v1/schema';
	import { Button, TextField } from '../../material3';
	import { ArticleListItem } from '..';

	interface Props {
		data: {
			contents?: SearchQuery;
			search: string;
		};
	}

	let { data }: Props = $props();
	let value = $state(data.search);
</script>

<div class="container-wide">
	<form>
		<div class="mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
			<TextField class="min-w-full" label="" bind:value name="search"></TextField>
			<Button type="submit" variant="filled">Keres</Button>
		</div>
	</form>
	{#if data.contents}
		<div class="mt-8 grid gap-4">
			{#each data.contents.edges as edge}
				<ArticleListItem data={edge}></ArticleListItem>
			{/each}
		</div>
	{/if}
</div>
