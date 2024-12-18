<script lang="ts">
	import type { CoreParagraphBlock } from '@packages/api/sdk/v1/schema';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	interface Props {
		data?: CoreParagraphBlock;
		class?: string | null;
	}

	let { data, ...props }: Props = $props();
</script>

<p class={concatClasses(props.class, data?.params?.class, 'jerbo-core-paragraph')}>
	{@html data?.content}
</p>

<style lang="postcss">
	.jerbo-core-paragraph :global(a) {
		@apply underline hover:no-underline;
	}
</style>
