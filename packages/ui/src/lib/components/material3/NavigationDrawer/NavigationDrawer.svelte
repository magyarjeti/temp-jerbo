<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getNavigationDrawerContext } from './navigationDrawer.svelte';

	const navigationDrawerContext = getNavigationDrawerContext();
	function closeNavigationDrawer() {
		navigationDrawerContext.showNavigationDrawer = false;
	}
	function handleKeyUp(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeNavigationDrawer();
		}
	}

	let startX: number;
	let endX: number;
	const minSwipeDistance = 50;

	const handleTouchStart = (e: TouchEvent) => {
		if (!e.touches[0]) {
			return;
		}
		startX = e.touches[0].clientX;
	};

	const handleTouchEnd = (e: TouchEvent) => {
		if (!e.changedTouches[0]) {
			return;
		}
		endX = e.changedTouches[0].clientX;
		const distance = startX - endX;

		if (Math.abs(distance) >= minSwipeDistance && distance > 0) {
			navigationDrawerContext.showNavigationDrawer = false;
		}
	};
</script>

<svelte:window onkeyup={handleKeyUp} />

{#if navigationDrawerContext.showNavigationDrawer}
	<button
		aria-label="Navigációs sáv megjelenítése"
		onclick={closeNavigationDrawer}
		onkeyup={handleKeyUp}
		class="fixed left-0 top-0 z-10 h-full w-full cursor-default bg-scrim/50"
	>
	</button>
	<nav
		ontouchstart={handleTouchStart}
		ontouchend={handleTouchEnd}
		transition:slide={{ delay: 0, duration: 100, axis: 'x' }}
		class="fixed left-0 top-0 z-20 h-full w-[calc(100%-theme('spacing.10'))] max-w-90 bg-surface-container-high p-3 elevation-2 shape-large-end sm:w-90"
	>
		<slot />
	</nav>
{/if}
