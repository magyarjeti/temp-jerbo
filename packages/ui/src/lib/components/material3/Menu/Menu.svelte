<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		anchorElement?: HTMLElement;
		show?: boolean;
		children?: Snippet;
		class?: string | null;
	}

	let { anchorElement, show = $bindable(false), children, ...props }: Props = $props();
	let menuElement: HTMLElement | undefined = $state();

	const positionMenu = () => {
		if (!menuElement || !anchorElement) {
			return;
		}
		const menuToggleElementRect = anchorElement.getBoundingClientRect();
		const menuElementRect = menuElement.getBoundingClientRect();
		const windowWidth = window.innerWidth;
		const widowHeight = window.innerHeight;

		if (menuElementRect.width + menuToggleElementRect.left >= windowWidth) {
			if (menuToggleElementRect.right <= menuElementRect.width) {
				menuElement.style.left =
					0 - menuToggleElementRect.left + windowWidth / 2 - menuElementRect.width / 2 + 'px';
			} else {
				menuElement.style.left =
					Math.round(menuToggleElementRect.width - menuElementRect.width) + 'px';
			}
		} else {
			menuElement.style.left = '0';
		}

		if (
			widowHeight <
			menuToggleElementRect.top + menuElementRect.height + menuToggleElementRect.height
		) {
			menuElement.style.top = Math.round(0 - menuElementRect.height) + 'px';
		} else {
			menuElement.style.top = menuToggleElementRect.height + 'px';
		}
	};

	const onWindowClick = (event: Event) => {
		if (
			menuElement &&
			anchorElement &&
			!menuElement.contains(event.target as HTMLElement) &&
			!anchorElement.contains(event.target as HTMLElement) &&
			!event.defaultPrevented
		) {
			show = false;
		}
	};

	onMount(() => {
		positionMenu();
	});

	const classes = $derived(
		concatClasses(
			props.class,
			'bg-surface-container text-on-secondary-container shape-extra-small elevation-2 absolute z-50 min-w-28 overflow-hidden py-2',
		),
	);
</script>

<svelte:window onresize={positionMenu} onclick={onWindowClick} />

<ul bind:this={menuElement} class={classes} class:sr-only={!show}>
	{@render children?.()}
</ul>
