<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Kiemeles"
		onclick={() => $editor.chain().focus().toggleHighlight().run()}
		selected={$editor.isActive('highlight')}
	>
		<M3Icon icon="format_ink_highlighter" />
	</IconButton>
{/if}
