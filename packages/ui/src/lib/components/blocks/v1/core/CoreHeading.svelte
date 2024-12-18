<script lang="ts">
	import type { CoreHeadingBlock } from '@packages/api/sdk/v1/schema';
	import { concatClasses } from '@packages/toolbox/concatClasses';

	interface Props {
		data?: CoreHeadingBlock;
		class?: string | null;
	}

	let { data, ...props }: Props = $props();
</script>

<h2 class={concatClasses(props.class, data?.params?.class, 'typo-headline-small')}>
	{@html data?.content}
</h2>
