import { mergeAttributes, Node } from '@tiptap/core';
import SvelteNodeViewRenderer from '../SvelteNodeViewRenderer.svelte';
import ContentListComponent from './ContentListComponent.svelte';

type ContentListOptions = {
	buckets?: string[];
};
declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		contentlist: {
			setContentList: (options?: ContentListOptions) => ReturnType;
		};
	}
}

export default (context?: Map<any, any>) =>
	Node.create<ContentListOptions>({
		name: 'contentlist',
		group: 'block',
		atom: true,
		draggable: true,
		inline: false,

		parseHTML() {
			return [{ tag: 'contentlist' }];
		},

		renderHTML({ HTMLAttributes }) {
			return ['contentlist', mergeAttributes(HTMLAttributes)];
		},

		addNodeView() {
			return SvelteNodeViewRenderer(ContentListComponent, { context });
		},
		addCommands() {
			return {
				setContentList:
					(options?: ContentListOptions) =>
					({ commands }) => {
						return commands.insertContent({
							type: this.name,
							attrs: options,
						});
					},
			};
		},
	});
