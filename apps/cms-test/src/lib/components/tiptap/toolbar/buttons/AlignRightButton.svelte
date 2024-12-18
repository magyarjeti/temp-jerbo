<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Jobbra"
		selected={$editor.isActive({ textAlign: 'right' })}
		onclick={() => $editor.chain().focus().setTextAlign('right').run()}
	>
		<M3Icon icon="format_align_right" />
	</IconButton>
{/if}
