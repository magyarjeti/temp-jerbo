<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		onclick={() => $editor.chain().focus().toggleSubscript().run()}
		selected={$editor.isActive('subscript')}
	>
		<M3Icon icon="subscript" />
	</IconButton>
{/if}
