<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';

	type Props = {
		params: { color?: 'primary' | 'secondary'; text?: string };
		class?: string | null;
	};

	let { params, ...props }: Props = $props();
	const classes = $derived(
		concatClasses(
			props.class,
			"grid after:h-6 h-6 items-center gap-4 uppercase after:bg-current after:content-[''] grid-cols-[auto_1fr] font-['League_Gothic'] leading-[22px] text-[26px]",
			params.color === 'primary' && 'text-primary',
			params.color === 'secondary' && 'text-secondary',
		),
	);
</script>

{#if params.text}
	<div class={classes}>
		{params.text}
	</div>
{/if}
