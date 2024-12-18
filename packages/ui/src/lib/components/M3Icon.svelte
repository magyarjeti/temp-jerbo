<script lang="ts">
	import { default as undo } from '@material-symbols/svg-400/outlined/undo.svg?raw';
	import { default as redo } from '@material-symbols/svg-400/outlined/redo.svg?raw';
	import { default as format_bold } from '@material-symbols/svg-400/outlined/format_bold.svg?raw';
	import { default as format_paragraph } from '@material-symbols/svg-400/outlined/format_paragraph.svg?raw';
	import { default as format_h1 } from '@material-symbols/svg-400/outlined/format_h1.svg?raw';
	import { default as format_h2 } from '@material-symbols/svg-400/outlined/format_h2.svg?raw';
	import { default as format_h3 } from '@material-symbols/svg-400/outlined/format_h3.svg?raw';
	import { default as format_quote } from '@material-symbols/svg-400/outlined/format_quote.svg?raw';
	import { default as format_italic } from '@material-symbols/svg-400/outlined/format_italic.svg?raw';
	import { default as format_strikethrough } from '@material-symbols/svg-400/outlined/format_strikethrough.svg?raw';
	import { default as format_ink_highlighter } from '@material-symbols/svg-400/outlined/format_ink_highlighter.svg?raw';
	import { default as format_clear } from '@material-symbols/svg-400/outlined/format_clear.svg?raw';
	import { default as superscript } from '@material-symbols/svg-400/outlined/superscript.svg?raw';
	import { default as subscript } from '@material-symbols/svg-400/outlined/subscript.svg?raw';
	import { default as format_align_left } from '@material-symbols/svg-400/outlined/format_align_left.svg?raw';
	import { default as format_align_center } from '@material-symbols/svg-400/outlined/format_align_center.svg?raw';
	import { default as format_align_right } from '@material-symbols/svg-400/outlined/format_align_right.svg?raw';
	import { default as format_align_justify } from '@material-symbols/svg-400/outlined/format_align_justify.svg?raw';
	import { default as link } from '@material-symbols/svg-400/outlined/link.svg?raw';
	import { default as link_off } from '@material-symbols/svg-400/outlined/link_off.svg?raw';
	import { default as cancel } from '@material-symbols/svg-400/outlined/cancel.svg?raw';
	import { default as deleteIcon } from '@material-symbols/svg-400/outlined/delete.svg?raw';
	import { default as edit } from '@material-symbols/svg-400/outlined/edit.svg?raw';
	import { default as check } from '@material-symbols/svg-400/outlined/check.svg?raw';
	import { default as rss_feed } from '@material-symbols/svg-400/outlined/rss_feed.svg?raw';
	import { default as lock } from '@material-symbols/svg-400/outlined/lock.svg?raw';
	import { default as widgets } from '@material-symbols/svg-400/outlined/widgets.svg?raw';
	import { default as drag_indicator } from '@material-symbols/svg-400/outlined/drag_indicator.svg?raw';
	import { default as view_column } from '@material-symbols/svg-400/outlined/view_column.svg?raw';
	import { default as lists } from '@material-symbols/svg-400/outlined/lists.svg?raw';

	import { concatClasses } from '@packages/toolbox/concatClasses';

	const icons: Record<string, string> = {
		undo,
		redo,
		format_bold,
		format_italic,
		format_strikethrough,
		format_ink_highlighter,
		format_clear,
		superscript,
		subscript,
		format_align_left,
		format_align_center,
		format_align_right,
		format_align_justify,
		link,
		cancel,
		delete: deleteIcon,
		edit,
		check,
		rss_feed,
		link_off,
		lock,
		widgets,
		drag_indicator,
		format_paragraph,
		format_h1,
		format_h2,
		format_h3,
		format_quote,
		view_column,
		lists,
	};

	interface Props {
		icon: string | undefined | null;
		class?: string | null;
	}

	let { icon, ...props }: Props = $props();
</script>

{#if icon}
	<span class={concatClasses(props.class, 'icon-wrapper')}>
		{@html icons[icon]}
	</span>
{/if}

<style lang="postcss">
	.icon-wrapper {
		font-size: var(--icon-size, 20px);
	}
	.icon-wrapper > :global(svg) > :global(image) {
		@apply h-full w-full object-contain;
	}
	.icon-wrapper > :global(svg) {
		@apply h-[1em] w-[1em] fill-current;
	}
</style>
