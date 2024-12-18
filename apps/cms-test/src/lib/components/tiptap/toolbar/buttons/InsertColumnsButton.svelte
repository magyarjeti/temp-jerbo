<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton title="Oszlopok" onclick={() => $editor.chain().focus().setColumns(2).run()}>
		<M3Icon icon="view_column" />
	</IconButton>
{/if}
