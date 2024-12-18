<script lang="ts">
	import { Button, IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';
	import { M3Icon } from '@packages/ui/components';

	const { editor } = $derived(getEditorContext());

	let showMenu = $state(false);

	const handleClick = () => {
		showMenu = true;
	};
</script>

{#if $editor}
	<IconButton onclick={handleClick}>
		<M3Icon icon="widgets" />
	</IconButton>
	{#if showMenu}
		<div class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-scrim/50">
			<div class="grid grid-cols-1 gap-2 bg-surface-container-highest p-6 shape-extra-large">
				<Button
					type="button"
					onclick={() => {
						$editor.chain().focus().setPaywall({ access: '' }).run();
						showMenu = false;
					}}
					>{#snippet icon()}
						<M3Icon icon="lock" />
					{/snippet}Paywall</Button
				>
				<Button
					type="button"
					onclick={() => {
						$editor.chain().focus().setContentList().run();
						showMenu = false;
					}}
					>{#snippet icon()}
						<M3Icon icon="lists" />
					{/snippet}Content List</Button
				>
			</div>
		</div>
	{/if}
{/if}
