<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Athuzas"
		onclick={() => $editor.chain().focus().toggleStrike().run()}
		selected={$editor.isActive('strike')}
	>
		<M3Icon icon="format_strikethrough" />
	</IconButton>
{/if}
