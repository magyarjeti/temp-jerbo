<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Ujra"
		onclick={() => $editor.chain().focus().redo().run()}
		disabled={!$editor.can().redo()}
	>
		<M3Icon icon="redo" />
	</IconButton>
{/if}
