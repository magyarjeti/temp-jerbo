<script lang="ts">
	import { Button, List, ListItem } from '@packages/ui/components/material3';
	import { Pagination } from '@packages/ui/components';
	import { page } from '$app/stores';

	let { data } = $props();
</script>

<div class="container-wide">
	<div class="mb-8">
		<Button href="/cikkek/new" icon="add">Új cikk létrehozása</Button>
	</div>
	{#if data.contents}
		<List>
			{#each data.contents.data as content}
				<ListItem leadingIcon="edit" href="/cikkek/{content.id}"
					>{content.title?.[0].value}</ListItem
				>
			{/each}
		</List>
		<div class="mt-8">
			<Pagination currentUrl={$page.url} totalPages={data.totalPages} currentPage={data.page}
			></Pagination>
		</div>
	{/if}
</div>
