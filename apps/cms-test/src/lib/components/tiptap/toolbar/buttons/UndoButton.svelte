<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Vissza"
		onclick={() => $editor.chain().focus().undo().run()}
		disabled={!$editor.can().undo()}
	>
		<M3Icon icon="undo" />
	</IconButton>
{/if}
