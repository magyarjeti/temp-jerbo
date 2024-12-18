<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<IconButton
		title="Link torlese"
		onclick={() => $editor.chain().focus().unsetLink().run()}
		disabled={!$editor.isActive('link')}
	>
		<M3Icon icon="link_off" />
	</IconButton>
{/if}
