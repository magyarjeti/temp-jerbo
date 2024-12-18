<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Dolt"
		onclick={() => $editor.chain().focus().toggleItalic().run()}
		selected={$editor.isActive('italic')}
	>
		<M3Icon icon="format_italic" />
	</IconButton>
{/if}
