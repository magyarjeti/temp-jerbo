import { mergeAttributes, Node } from '@tiptap/core';
import { SvelteNodeViewRenderer } from 'svelte-tiptap';
import PaywallComponent from './PaywallComponent.svelte';

type PaywallOptions = {
	access: string;
};
declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		paywall: {
			setPaywall: (options: PaywallOptions) => ReturnType;
		};
	}
}

export default Node.create<PaywallOptions>({
	name: 'paywall',
	group: 'block',
	atom: true,
	draggable: true,
	inline: false,
	addOptions() {
		return {
			access: '',
		};
	},
	addAttributes() {
		return {
			access: {
				default: '',
			},
		};
	},

	parseHTML() {
		return [{ tag: 'paywall' }];
	},

	renderHTML({ HTMLAttributes }) {
		return ['paywall', mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return SvelteNodeViewRenderer(PaywallComponent);
	},
	addCommands() {
		return {
			setPaywall:
				(options: PaywallOptions) =>
				({ commands }) => {
					return commands.insertContent({
						type: this.name,
						attrs: options,
					});
				},
		};
	},
});
