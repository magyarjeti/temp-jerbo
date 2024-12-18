<script lang="ts">
	import { SelectField } from '@packages/ui/components/material3';
	import { getEditorContext } from '../editor.svelte';

	const { editor } = $derived(getEditorContext());
	const blockTypeOptions = [
		{
			name: 'Normal',
			value: 'paragraph',
			icon: 'format_paragraph',
			action: () => $editor?.chain().focus().clearNodes().setParagraph().run(),
		},
		{
			name: 'Heading 1',
			icon: 'format_h1',
			value: 'heading-1',
			action: () => $editor?.chain().focus().clearNodes().setHeading({ level: 1 }).run(),
		},
		{
			name: 'Heading 2',
			icon: 'format_h2',
			value: 'heading-2',
			action: () => $editor?.chain().focus().clearNodes().setHeading({ level: 2 }).run(),
		},
		{
			name: 'Blockquote',
			icon: 'format_quote',
			value: 'blockquote',
			action: () => {
				$editor?.chain().focus().clearNodes().setBlockquote().run();
			},
		},
	];
	let selected = $state(blockTypeOptions[0].value);
	$effect(() => {
		if ($editor?.isActive('blockquote')) {
			selected = 'blockquote';
		} else if ($editor?.isActive('paragraph')) {
			selected = 'paragraph';
		} else if ($editor?.isActive('heading', { level: 1 })) {
			selected = 'heading-1';
		} else if ($editor?.isActive('heading', { level: 2 })) {
			selected = 'heading-2';
		}
	});
</script>

{#if $editor}
	<SelectField bind:selected options={blockTypeOptions} />
{/if}
