import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import Ad from './blocks/v1/Ad.svelte';
import CoreParagraph from './blocks/v1/core/CoreParagraph.svelte';
import CoreHeading from './blocks/v1/core/CoreHeading.svelte';
import Image from './blocks/v1/Image.svelte';
import Embed from './blocks/v1/Embed.svelte';
import Widget from './blocks/v1/Widget.svelte';
import CoreBlockquote from './blocks/v1/core/CoreBlockquote.svelte';
import CoreUnorderedlist from './blocks/v1/core/CoreUnorderedlist.svelte';
import Html from './blocks/v1/Html.svelte';
import CoreOrderedlist from './blocks/v1/core/CoreOrderedlist.svelte';

const components = {
	Ad,
	CoreParagraph,
	CoreHeading,
	Image,
	Embed,
	Widget,
	CoreBlockquote,
	CoreUnorderedlist,
	CoreOrderedlist,
	Html,
};

const blocksStore = writable({ ...components });

const blocksContextKey = Symbol('blocks');

export const setBlocksContext = (overrides: Partial<typeof components>) => {
	const overridden = { ...components, ...overrides };
	blocksStore.set(overridden);
	return setContext(blocksContextKey, blocksStore);
};

export const getBlocksContext = () => {
	return getContext<typeof blocksStore>(blocksContextKey) || blocksStore;
};
