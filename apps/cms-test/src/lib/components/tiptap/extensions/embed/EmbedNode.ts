import { mergeAttributes, Node, nodePasteRule } from '@tiptap/core';
import SvelteNodeViewRenderer from '../SvelteNodeViewRenderer.svelte';
import EmbedComponent from './EmbedComponent.svelte';
import { urlRegExp } from '@packages/toolbox/string';

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		embed: {
			setEmbed: () => ReturnType;
		};
	}
}

export default (context?: Map<any, any>) =>
	Node.create({
		name: 'embed',
		group: 'block',
		atom: true,
		draggable: true,
		inline: false,
		addAttributes() {
			return {
				src: {
					default: '',
				},
			};
		},

		parseHTML() {
			return [{ tag: 'embed' }];
		},

		renderHTML({ HTMLAttributes }) {
			return ['embed', mergeAttributes(HTMLAttributes)];
		},

		addNodeView() {
			return SvelteNodeViewRenderer(EmbedComponent, { context });
		},
		addCommands() {
			return {
				setEmbed:
					() =>
					({ commands }) => {
						return commands.insertContent({
							type: this.name,
						});
					},
			};
		},
		addPasteRules() {
			const pattern = new RegExp(urlRegExp, 'gi');
			return [
				nodePasteRule({
					find: pattern,
					type: this.type,
					getAttributes: (match) => {
						return { src: match[0] };
					},
				}),
			];
		},
	});
