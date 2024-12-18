// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module 'svelte/elements' {
	// allows for more granular control over what element to add the typings to
	export interface HTMLAnchorAttributes {
		disabled?: boolean | null;
	}
}

export {};
