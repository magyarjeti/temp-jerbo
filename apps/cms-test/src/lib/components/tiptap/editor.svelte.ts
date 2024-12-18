import type { Editor } from 'svelte-tiptap';
import { getContext, setContext } from 'svelte';
import { type Readable } from 'svelte/store';

const editorContextKey = Symbol('editor');

type EditorState = {
	editor: Readable<Editor>;
};

export const setEditorContext = (initEditor?: Readable<Editor>) => {
	const editor = $state({ editor: initEditor });
	setContext(editorContextKey, editor);
	return editor;
};

export const getEditorContext = () => {
	const ctx = getContext<EditorState>(editorContextKey);
	if (!ctx.editor) {
		throw new Error("Editor hasn't been initialized");
	}
	return ctx;
};
