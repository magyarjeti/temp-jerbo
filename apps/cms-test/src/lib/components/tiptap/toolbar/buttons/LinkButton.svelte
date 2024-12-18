<script>
	import { M3Icon } from '@packages/ui/components';
	import { IconButton } from '@packages/ui/components/material3';
	import { getEditorContext } from '../../editor.svelte';

	const { editor } = $derived(getEditorContext());

	const setLink = () => {
		const previousUrl = $editor?.getAttributes('link').href;
		const url = window.prompt('URL', previousUrl);

		// cancelled
		if (url === null) {
			return;
		}

		// empty
		if (url === '') {
			$editor?.chain().focus().extendMarkRange('link').unsetLink().run();

			return;
		}

		// update link
		$editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	};
</script>

{#if $editor}
	<IconButton title="Link" selected={$editor.isActive('link')} onclick={setLink}>
		<M3Icon icon="link" />
	</IconButton>
{/if}
