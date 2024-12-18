<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Balra"
		selected={$editor.isActive({ textAlign: 'left' })}
		onclick={() => $editor.chain().focus().setTextAlign('left').run()}
	>
		<M3Icon icon="format_align_left" />
	</IconButton>
{/if}
