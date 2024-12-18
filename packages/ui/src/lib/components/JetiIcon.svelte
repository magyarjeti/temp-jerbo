<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string | null;
	};
	let { children, ...props }: Props = $props();
</script>

<span class={concatClasses(props.class, 'jeti-icon')}>{@render children?.()}</span>

<style>
	@font-face {
		src: url('https://cdn.444r.cloud/assets/SkanIcons-Regular-EYGT6Q66.de61f1566e9fde96cd5b.ttf');
		font-family: 'JetiIcons';
	}

	.jeti-icon {
		display: inline-block;
		text-transform: none;
		text-rendering: optimizeLegibility;
		line-height: 1;
		font-family: 'JetiIcons';
		font-weight: normal;
		font-style: normal;
		font-feature-settings: liga;
		font-size: calc(var(--icon-size, 24) * 1px);
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;
		user-select: none;
	}
</style>
