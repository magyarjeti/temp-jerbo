<script lang="ts">
	import { getEditorContext } from '../editor.svelte';
	import BoldButton from './buttons/BoldButton.svelte';
	import ItalicButton from './buttons/ItalicButton.svelte';
	import SubscriptButton from './buttons/SubscriptButton.svelte';
	import SuperscriptButton from './buttons/SuperscriptButton.svelte';
	import LinkButton from './buttons/LinkButton.svelte';
	import UnlinkButton from './buttons/UnlinkButton.svelte';
	import HighlightButton from './buttons/HighlightButton.svelte.svelte';
	import UndoButton from './buttons/UndoButton.svelte';
	import RedoButton from './buttons/RedoButton.svelte';
	import AlignLeftButton from './buttons/AlignLeftButton.svelte';
	import AlignCenterButton from './buttons/AlignCenterButton.svelte';
	import AlignRightButton from './buttons/AlignRightButton.svelte';
	import AlignJustifyButton from './buttons/AlignJustifyButton.svelte';
	import BlockSelect from './BlockSelect.svelte';
	import InsertWidgetButton from './buttons/InsertWidgetButton.svelte';
	import StrikeButton from './buttons/StrikeButton.svelte';
	import ClearFormattingButton from './buttons/ClearFormattingButton.svelte';
	import InsertColumnsButton from './buttons/InsertColumnsButton.svelte';

	const { editor } = $derived(getEditorContext());
</script>

{#if $editor}
	<div class="flex items-center gap-1 bg-surface-variant p-1 text-on-surface-variant">
		<BlockSelect />
		<UndoButton />
		<RedoButton />
		<HighlightButton />
		<BoldButton />
		<ItalicButton />
		<StrikeButton />
		<SubscriptButton />
		<SuperscriptButton />
		<LinkButton />
		<UnlinkButton />
		<AlignLeftButton />
		<AlignCenterButton />
		<AlignRightButton />
		<AlignJustifyButton />
		<InsertWidgetButton />
		<InsertColumnsButton />
		<ClearFormattingButton />
	</div>
{/if}
