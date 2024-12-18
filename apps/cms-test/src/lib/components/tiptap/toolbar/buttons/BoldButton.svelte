<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Felkover"
		onclick={() => $editor.chain().focus().toggleBold().run()}
		selected={$editor.isActive('bold')}
	>
		<M3Icon icon="format_bold" />
	</IconButton>
{/if}
