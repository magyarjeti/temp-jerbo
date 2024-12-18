<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Sorkizart"
		selected={$editor.isActive({ textAlign: 'justify' })}
		onclick={() => $editor.chain().focus().setTextAlign('justify').run()}
	>
		<M3Icon icon="format_align_justify" />
	</IconButton>
{/if}
