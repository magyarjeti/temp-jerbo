<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';

	type Props = {
		class?: string | null;
	};
	const { ...props }: Props = $props();
</script>

<span
	class={concatClasses(
		'absolute inset-0 opacity-0 transition hover:opacity-8 focus:opacity-10 group-hover:opacity-8 group-focus:opacity-10',
		props.class,
	)}
></span>
