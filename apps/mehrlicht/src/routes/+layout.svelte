<script lang="ts">
	import '$lib/styles/index.css';
	import {
		IconButton,
		NavigationDrawer,
		NavigationDrawerHeadline,
		NavigationDrawerItem,
		setNavigationDrawerContext,
		TopAppBar,
	} from '@packages/ui/components/material3';
	import { showAds } from '@packages/ads';
	import { Ad, Link, User } from '@packages/ui/components';
	import { afterNavigate } from '$app/navigation';
	import { PageMeta, setPageMetaContext } from '../../../../packages/page-meta/src/index.svelte.js';
	import { PUBLIC_JERBO_SITE_URL } from '$env/static/public';
	import { setThemeContext } from '@packages/ui/contexts';
	import { page } from '$app/stores';
	import { setGatewayContext } from '@packages/api/components';
	import { BUCKETS } from '$lib/constants';

	let { data, children } = $props();
	const themeContext = setThemeContext(data.theme);
	let currentTheme = $derived(themeContext.getTheme());
	setGatewayContext({ buckets: BUCKETS });

	const pageMetaContext = setPageMetaContext({ siteUrl: PUBLIC_JERBO_SITE_URL });
	afterNavigate(() => {
		showAds({
			remp: {
				scriptUrl: 'https://campaign-remp.444test.hu/assets/lib/js/remplib.js',
				url: 'https://campaign-remp.444test.hu',
				token: '64f0f5c7-d525-4800-bf08-65ed6ed64621',
				targetSite: '444',
			},
			adme: {
				scriptUrl: 'https://link.adaptivemedia.hu/adme/extra/adme.min.js',
				data: {
					category: pageMetaContext.categories[0],
					url: pageMetaContext.canonicalUrl,
					pageType: pageMetaContext.pageType,
					keywords: pageMetaContext.keywords,
				},
			},
		});
	});
	const navigationDrawerContext = setNavigationDrawerContext();
	function handleNavigationDrawerToggle() {
		navigationDrawerContext.showNavigationDrawer = !navigationDrawerContext.showNavigationDrawer;
	}
</script>

<PageMeta />

<div class="grid min-h-dvh grid-rows-[auto_auto_auto_1fr_auto] bg-background text-on-surface">
	<TopAppBar>
		<div class="h-full">
			<div class="flex h-full items-center justify-between gap-4">
				<div><IconButton onclick={handleNavigationDrawerToggle} icon="menu" /></div>
				<a href="/" class="typo-display-small absolute left-1/2 -translate-x-1/2">Mehr Licht</a>
				<div class="flex items-center gap-1">
					<Ad id="site-header" adIndicator={false}></Ad>
					<User user={data.user} />
				</div>
			</div>
		</div>
	</TopAppBar>

	<NavigationDrawer>
		<NavigationDrawerItem icon="search" href="/kereses">Keresés</NavigationDrawerItem>
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

	{#if !$page.data.disableHeaderImg}
		<div class="py-6">
			<div class="container-wide">
				<Link href="/">
					<img
						src="https://assets.4cdn.hu/kraken/7ugiRsgxxLguIi5Us.jpeg"
						alt="Mehr Licht kiemelt kép"
					/>
				</Link>
			</div>
		</div>
	{/if}
	<div class="container-wide">
		<Ad id="top"></Ad>
	</div>
	<div>
		<main>
			{@render children?.()}
		</main>
	</div>
	<footer class="bg-surface py-8">
		<div class="container-wide"></div>
	</footer>
</div>
