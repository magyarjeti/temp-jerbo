<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { setPhotoswipeContext } from './photoswipe';
	import PhotoSwipe from 'photoswipe';
	import { derived } from 'svelte/store';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	const photoswipeContext = setPhotoswipeContext();
	const gallery = derived(photoswipeContext, (_photoswipeContext) => _photoswipeContext.gallery);
	const customGoTo = (pswp: PhotoSwipe, index: number) => {
		pswp.mainScroll.moveIndexBy(pswp.getLoopedIndex(index) - pswp.potentialIndex, true);
	};
	onMount(() => {
		$photoswipeContext.openPswp = (index = 0) => {
			const pswp = new PhotoSwipe({
				dataSource: $gallery,
				index,
			});
			pswp.on('uiRegister', () => {
				pswp.next = () => customGoTo(pswp, pswp.potentialIndex + 1);
				pswp.prev = () => customGoTo(pswp, pswp.potentialIndex - 1);
				pswp.ui?.registerElement({
					name: 'jerbo-caption',
					order: 9,
					isButton: false,
					appendTo: 'root',
					html: 'Caption text',
					onInit: (el, pswp) => {
						pswp.on('change', () => {
							const currSlideElement = pswp.currSlide?.data.element;
							let captionHTML = '';
							if (currSlideElement) {
								const caption = currSlideElement.querySelector('figcaption');
								if (caption) {
									// get caption from element with class hidden-caption-content
									captionHTML = caption.outerHTML;
								}
							}
							if (captionHTML) {
								el.innerHTML = captionHTML;
							} else {
								el.outerHTML = '';
							}
						});
					},
				});
			});
			pswp.init();
		};
	});
</script>

{@render children?.()}

<style lang="postcss">
	:global(.pswp__jerbo-caption) {
		@apply absolute bottom-4 left-1/2 max-h-[20dvh] max-w-[calc(100%-theme(spacing.8))] -translate-x-1/2 overflow-auto bg-inverse-surface px-2 py-1 text-inverse-on-surface elevation-3 max-lg:w-full;
	}
</style>
