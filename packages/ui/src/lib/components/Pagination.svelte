<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import { Button, IconButton } from '@packages/ui/components/material3';

	interface Props {
		pageKey?: string;
		currentPage: number;
		totalPages: number;
		currentUrl: URL;
	}

	let { pageKey = 'page', currentPage, totalPages, currentUrl }: Props = $props();
	const clonedUrl = $state(new URL(currentUrl));
	const getPaginationQuery = (pageNumber: number) => {
		clonedUrl.searchParams.set(pageKey, pageNumber.toString());
		return clonedUrl.search;
	};

	let next = $derived(getPaginationQuery(currentPage + 1));
	let previous = $derived(getPaginationQuery(currentPage - 1));
	let first = $derived(getPaginationQuery(1));
	let last = $derived(getPaginationQuery(totalPages));
	let isFirst = $derived(currentPage === 1);
	let isLast = $derived(currentPage === totalPages);
	let numbers = $derived(() => {
		const range = 5;
		const distance = Math.floor(range / 2);
		let max = range;
		const numbers: number[] = [];
		if (totalPages < 5) {
			max = totalPages;
		}
		if (currentPage <= distance) {
			for (let i = 1; i <= max; i++) {
				numbers.push(i);
			}
		} else if (currentPage + distance > totalPages) {
			for (let i = totalPages - range + 1; i <= totalPages; i++) {
				numbers.push(i);
			}
		} else {
			for (let i = currentPage - distance; i <= currentPage + distance; i++) {
				numbers.push(i);
			}
		}
		return numbers;
	});
	let numberHref = $derived((number: number) => {
		return getPaginationQuery(number);
	});
</script>

{#if totalPages > 1}
	<ul class="flex items-center justify-center gap-3">
		<li>
			<Button href={first} disabled={isFirst}>Legelső oldal</Button>
		</li>
		<li>
			<IconButton aria-label="Előző oldal" disabled={isFirst} href={previous} icon="chevron_left" />
		</li>
		{#each numbers() as number (number)}
			<li>
				<Button
					variant="text"
					href={numberHref(number)}
					class={concatClasses(
						'max-md:hidden',
						currentPage === number && 'pointer-events-none font-bold',
					)}>{number}</Button
				>
			</li>
		{/each}
		<li>
			<IconButton aria-label="Következő oldal" href={next} disabled={isLast} icon="chevron_right" />
		</li>
		<li>
			<Button href={last} disabled={isLast}>Utolsó oldal</Button>
		</li>
	</ul>
{/if}
