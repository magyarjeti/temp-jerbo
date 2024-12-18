<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Kozepre"
		selected={$editor.isActive({ textAlign: 'center' })}
		onclick={() => $editor.chain().focus().setTextAlign('center').run()}
	>
		<M3Icon icon="format_align_center" />
	</IconButton>
{/if}
