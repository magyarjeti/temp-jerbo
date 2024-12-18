import type { Action } from 'svelte/action';

const clickOutside: Action<HTMLElement, undefined, { onclickoutside: (e: CustomEvent) => void }> = (
	node,
) => {
	const handleClick = (event: Event) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click-outside', { detail: node }));
		}
	};

	$effect(() => {
		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	});
};

export default clickOutside;
