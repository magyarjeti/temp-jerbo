<script lang="ts">
	import type { CoreOrderedlistBlock } from '@packages/api/sdk/v1/schema';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	interface Props {
		data?: CoreOrderedlistBlock;
		class?: string | null;
	}

	let { data, ...props }: Props = $props();
</script>

<ol
	class={concatClasses(
		props.class,
		data?.params?.class,
		'jerbo-core-orderedlist list-none space-y-4 pl-[1.1em]',
	)}
>
	{@html data?.content}
</ol>

<style lang="postcss">
	.jerbo-core-orderedlist {
		counter-reset: section;
	}

	.jerbo-core-orderedlist :global(a) {
		@apply underline hover:no-underline;
	}
	.jerbo-core-orderedlist :global(li) {
		counter-increment: section;
	}
	.jerbo-core-orderedlist :global(li)::marker {
		@apply text-[1em];
		content: counters(section, '.') '. ';
	}
</style>
