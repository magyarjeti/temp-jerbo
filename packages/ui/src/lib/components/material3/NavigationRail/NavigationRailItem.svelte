<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import { JetiIcon } from '../..';
	import StateLayer from '../StateLayer.svelte';

	interface Props {
		icon: string;
		href?: string | null;
		title?: string | null;
		onclick?: ((event: MouseEvent | TouchEvent) => void) | null;
	}

	let { icon, href, title, onclick }: Props = $props();
</script>

<li class="typo-label-medium">
	<a
		{onclick}
		{href}
		{title}
		class={concatClasses('group flex flex-col items-center gap-1 text-center')}
	>
		<span class="relative flex h-8 w-14 items-center justify-center shape-large">
			<StateLayer class="bg-on-surface shape-full" />
			<JetiIcon>{icon}</JetiIcon>
		</span>
		<span
			class="text-on-surface-variant transition-all group-hover:font-bold group-hover:text-on-surface"
			>{title}</span
		>
	</a>
</li>
