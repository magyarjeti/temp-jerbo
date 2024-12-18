<script lang="ts">
	import { getAllContexts, onDestroy, onMount } from 'svelte';
	import Highlight from '@tiptap/extension-highlight';
	import { setEditorContext } from './editor.svelte';
	import Toolbar from './toolbar/Toolbar.svelte';
	import Superscript from '@tiptap/extension-superscript';
	import Subscript from '@tiptap/extension-subscript';
	import Text from '@tiptap/extension-text';
	import Paragraph from '@tiptap/extension-paragraph';
	import Blockquote from '@tiptap/extension-blockquote';
	import Heading from '@tiptap/extension-heading';
	import BulletList from '@tiptap/extension-bullet-list';
	import ListItem from '@tiptap/extension-list-item';
	import OrderedList from '@tiptap/extension-ordered-list';
	import Bold from '@tiptap/extension-bold';
	import Italic from '@tiptap/extension-italic';
	import Strike from '@tiptap/extension-strike';
	import Document from '@tiptap/extension-document';
	import Dropcursor from '@tiptap/extension-dropcursor';
	import History from '@tiptap/extension-history';
	import TextAlign from '@tiptap/extension-text-align';
	import Link from '@tiptap/extension-link';
	import HardBreak from '@tiptap/extension-hard-break';
	import BubbleToolbar from './toolbar/BubbleToolbar.svelte';
	import { EditorContent, createEditor } from 'svelte-tiptap';
	import PaywallNode from './extensions/paywall/PaywallNode';
	import EmbedNode from './extensions/embed/EmbedNode';
	import ColumnExtension from './extensions/columns/ColumnsExtension';
	import Gapcursor from '@tiptap/extension-gapcursor';
	import ContentListNode from './extensions/content-list/ContentListNode';

	let editorContext = $derived(setEditorContext());
	const { editor } = $derived(editorContext);

	type EditorData = { text: string; json: string };
	interface Props {
		initialJson?: string;
		onchange?: (data: EditorData) => void;
	}

	let { initialJson = '', onchange }: Props = $props();
	const allContexts = getAllContexts();

	onMount(() => {
		editorContext.editor = createEditor({
			editorProps: {
				attributes: {
					class:
						'border-outline-variant min-h-50 mt-4 border border-dashed py-2 pl-6 pr-2 outline-none space-y-4',
				},
			},
			content: initialJson ? JSON.parse(initialJson) : '',
			extensions: [
				HardBreak,
				ColumnExtension,
				PaywallNode,
				ContentListNode(allContexts),
				EmbedNode(allContexts),
				Heading,
				BulletList,
				ListItem,
				OrderedList,
				Blockquote,
				Paragraph,
				Text,
				Highlight,
				Superscript,
				Subscript,
				Bold,
				Italic,
				Strike,
				Document,
				Gapcursor,
				Dropcursor.configure({
					color: 'rgb(var(--m3-color-outline))',
					width: 2,
				}),
				History,
				TextAlign.configure({
					types: ['heading', 'paragraph'],
				}),
				Link.configure({
					openOnClick: false,
					defaultProtocol: 'https',
					HTMLAttributes: {
						class: 'underline text-primary',
					},
				}),
			],
			onUpdate: ({ editor }) => {
				onchange?.({ json: JSON.stringify(editor.getJSON()), text: editor.getText() });
			},
			injectCSS: false,
		});
		onchange?.({
			json: JSON.stringify($editor?.getJSON()),
			text: $editor?.getText() || '',
		});
	});
	onDestroy(() => {
		$editor?.destroy();
	});
</script>

<div>
	{#if $editor}
		<Toolbar />
		<BubbleToolbar />
		<EditorContent editor={$editor} />
	{/if}
</div>

<style lang="postcss">
	:global(.ProseMirror-selectednode) {
		@apply outline outline-2 outline-primary;
	}
	:global(.ProseMirror-gapcursor) {
		@apply my-2 h-[2px] animate-blink bg-outline caret-transparent;
	}
</style>
