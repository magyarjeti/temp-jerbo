<script lang="ts">
	import type { CoreUnorderedlistBlock } from '@packages/api/sdk/v1/schema';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	interface Props {
		data?: CoreUnorderedlistBlock;
		class?: string | null;
	}

	let { data, ...props }: Props = $props();
</script>

<ul
	class={concatClasses(
		props.class,
		data?.params?.class,
		'jerbo-core-unorderedlist list-[square] space-y-4 pl-[1.5em]',
	)}
>
	{@html data?.content}
</ul>

<style lang="postcss">
	.jerbo-core-unorderedlist :global(a) {
		@apply underline hover:no-underline;
	}
	.jerbo-core-unorderedlist :global(li)::marker {
		@apply float-left clear-both block text-[1.5em] text-on-surface;
	}
</style>
