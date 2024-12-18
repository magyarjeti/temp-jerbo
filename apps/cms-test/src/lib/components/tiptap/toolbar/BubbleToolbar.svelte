<script lang="ts">
	import { BubbleMenu } from 'svelte-tiptap';
	import BoldButton from './buttons/BoldButton.svelte';
	import ItalicButton from './buttons/ItalicButton.svelte';
	import LinkButton from './buttons/LinkButton.svelte';
	import UnlinkButton from './buttons/UnlinkButton.svelte';
	import { getEditorContext } from '../editor.svelte';
	import { isTextSelection } from '@tiptap/core';
	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<BubbleMenu
		editor={$editor}
		class="bg-surface-container-highest p-4"
		shouldShow={({ editor, view, state, from, to }) => {
			// Reworked from the default, because we only want the selection
			// menu for text selections where a mark change will be visible.
			// https://github.com/ueberdosis/tiptap/blob/063ced27ca55f331960b01ee6aea5623eee0ba49/packages/extension-bubble-menu/src/bubble-menu-plugin.ts#L43
			if (!view.hasFocus()) return false;
			const { doc, selection } = state;
			const isText = isTextSelection(selection);
			if (!isText) return false;
			const isEmpty = selection.empty || (isText && doc.textBetween(from, to).length === 0);
			if (isEmpty) return false;
			if (editor.isActive('codeBlock')) return false;
			return true;
		}}
	>
		<BoldButton />
		<ItalicButton />
		<LinkButton />
		<UnlinkButton />
	</BubbleMenu>
{/if}
