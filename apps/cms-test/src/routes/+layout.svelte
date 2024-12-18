<script lang="ts">
	import '$lib/styles/index.css';
	import {
		NavigationDrawer,
		NavigationDrawerHeadline,
		NavigationDrawerItem,
		setNavigationDrawerContext,
	} from '@packages/ui/components/material3';
	import { PageMeta, setPageMetaContext } from '../../../../packages/page-meta/src/index.svelte.js';
	import { NavigationRailItem, NavigationRail } from '@packages/ui/components/material3';
	import { setThemeContext } from '@packages/ui/contexts';
	import { setGatewayContext } from '@packages/api/components';

	let { data, children } = $props();
	const themeContext = setThemeContext(data.theme);
	let currentTheme = $derived(themeContext.getTheme());

	setPageMetaContext();
	setNavigationDrawerContext();
	setGatewayContext({ buckets: ['444'] });
</script>

<PageMeta />

<div class="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-background text-on-surface">
	<div>
		<NavigationDrawer>
			<NavigationDrawerHeadline>Zero Test</NavigationDrawerHeadline>
			<NavigationDrawerItem href="/">Főoldal</NavigationDrawerItem>
			<NavigationDrawerItem href="/cikkek">Cikkek</NavigationDrawerItem>
			<NavigationDrawerHeadline>Színséma</NavigationDrawerHeadline>
			<NavigationDrawerItem
				icon="colorscheme_os"
				onclick={() => themeContext.setTheme('system')}
				active={currentTheme === 'system'}>Rendszer</NavigationDrawerItem
			>
			<NavigationDrawerItem
				icon="light_mode"
				onclick={() => themeContext.setTheme('light')}
				active={currentTheme === 'light'}>Világos</NavigationDrawerItem
			>
			<NavigationDrawerItem
				icon="dark_mode"
				onclick={() => themeContext.setTheme('dark')}
				active={currentTheme === 'dark'}>Sötét</NavigationDrawerItem
			>
		</NavigationDrawer>
	</div>
	<div class="sm:grid sm:grid-cols-[auto_1fr] sm:p-6">
		<NavigationRail>
			<NavigationRailItem icon="edit" title="Cikkek" href="/cikkek" />
		</NavigationRail>
		<main>
			{@render children?.()}
		</main>
	</div>
	<footer></footer>
</div>
