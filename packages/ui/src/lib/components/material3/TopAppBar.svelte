<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		onstuck?: (isStuck: boolean) => void;
		class?: string | null;
	}

	let { children, onstuck, ...props }: Props = $props();

	let isStuck = $state(false);
	let el: HTMLElement | undefined = $state();

	function setSticky() {
		if (el) {
			const rect = el.getBoundingClientRect();
			let stuckResult = false;
			if (window.scrollY === 0) {
				stuckResult = false;
			} else if (window.scrollY > 0 && rect.top + window.scrollY <= window.scrollY) {
				stuckResult = true;
			} else {
				stuckResult = false;
			}
			isStuck = stuckResult;
			onstuck?.(stuckResult);
		}
	}
</script>

<svelte:window onscroll={setSticky} />

<nav
	class={props.class ||
		concatClasses(
			'sticky top-0 z-10 h-12 gap-2 bg-surface text-on-surface transition-shadow',
			isStuck && 'elevation-2',
		)}
	bind:this={el}
>
	{@render children?.()}
</nav>
