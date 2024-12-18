<script lang="ts">
	import type { CoreBlockquoteBlock } from '@packages/api/sdk/v1/schema';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	interface Props {
		data?: CoreBlockquoteBlock;
		class?: string | null;
	}

	let { data, ...props }: Props = $props();
</script>

<blockquote class={concatClasses(props.class, data?.params?.class, 'jerbo-core-blockquote')}>
	{@html data?.content}
</blockquote>

<style lang="postcss">
	:global(.jerbo-core-blockquote) > :global(*) {
		@apply inline bg-primary box-decoration-clone p-2 leading-[calc(100%+theme(spacing.4))] text-on-primary;
	}

	.jerbo-core-blockquote :global(a) {
		@apply underline hover:no-underline;
	}
</style>
