import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

export const isAnchorAttrs = (
	attrs: HTMLAnchorAttributes | HTMLButtonAttributes,
): attrs is HTMLAnchorAttributes => {
	return 'href' in attrs;
};
export const isButtonAttrs = (
	attrs: HTMLAnchorAttributes | HTMLButtonAttributes,
): attrs is HTMLButtonAttributes => {
	return !isAnchorAttrs(attrs);
};
