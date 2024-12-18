<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Formazas torlese"
		onclick={() => $editor.chain().focus().unsetAllMarks().run()}
	>
		<M3Icon icon="format_clear" />
	</IconButton>
{/if}
