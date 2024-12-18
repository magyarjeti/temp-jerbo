// See https://kit.svelte.dev/docs/types#app

import '@packages/ui/themeSwitcher';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: {
				firstName?: string | null;
				lastName?: string | null;
				email?: string | null;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
