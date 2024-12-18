<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';

	interface Props {
		show?: boolean;
		title?: string | null | undefined;
		actions?: { onClick?: () => void; label: string }[];
		children?: Snippet;
	}

	let { show = $bindable(false), title, actions = [], children }: Props = $props();

	function closeDialog() {
		show = false;
	}

	function actionWrapper(cb?: () => void) {
		if (cb) {
			cb();
		}
		closeDialog();
	}
</script>

{#if show}
	<dialog
		class="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-scrim/50"
	>
		<div class="bg-surface-container-high p-6 text-on-surface elevation-3 shape-extra-large">
			<h1 class="typo-headline-small mb-4">{title}</h1>
			{@render children?.()}
			{#if actions.length > 0}
				<div class="mt-6 flex justify-end gap-2">
					{#each actions as action}
						<Button variant="outlined" onclick={() => actionWrapper(action.onClick)}
							>{action.label}</Button
						>
					{/each}
				</div>
			{/if}
		</div>
	</dialog>
{/if}
