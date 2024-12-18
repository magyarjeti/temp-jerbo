<script lang="ts">
	import { loadScript } from '@packages/toolbox/loadScript';
	import { onMount, type Snippet } from 'svelte';
	import { getThemeContext } from '../contexts/theme.svelte';
	import { urlRegExp } from '@packages/toolbox/string/url';

	const EMBEDLY_SCRIPT_SRC = 'https://cdn.embedly.com/widgets/platform.js';
	const themeContext = getThemeContext();

	interface Props {
		src?: string | null;
		children?: Snippet;
	}

	let { src, children }: Props = $props();
	let localTheme = $state(themeContext.getPreferredTheme());

	$effect(() => {
		localTheme = themeContext.getPreferredTheme();
	});

	onMount(() => {
		loadScript(EMBEDLY_SCRIPT_SRC);
	});
</script>

{#key localTheme}
	<div>
		<a
			href={src}
			class="embedly-card"
			data-card-via=""
			data-card-chrome="1"
			data-card-analytics="1"
			data-card-theme={localTheme}
			data-card-controls="0"
			data-card-width=""
			data-card-recommend="0"
		>
			{@render children?.()}
		</a>
	</div>
{/key}
