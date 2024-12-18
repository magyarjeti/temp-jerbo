<script lang="ts">
	import '$lib/styles/index.css';
	import {
		NavigationDrawer,
		NavigationDrawerHeadline,
		NavigationDrawerItem,
		TopAppBar,
		IconButton,
		setNavigationDrawerContext,
	} from '@packages/ui/components/material3';
	import { showAds } from '@packages/ads';
	import { Link, M3Icon, Separator } from '@packages/ui/components';
	import { afterNavigate } from '$app/navigation';
	import { PageMeta, setPageMetaContext } from '@packages/page-meta';
	import { setGatewayContext } from '@packages/api/components';
	import { setThemeContext } from '@packages/ui/contexts';
	import { page } from '$app/stores';

	let { data, children } = $props();
	const themeContext = setThemeContext(data.theme);
	let currentTheme = $derived(themeContext.getTheme());

	setPageMetaContext({ siteUrl: data.BLOG_SITE_URL });
	setGatewayContext({ buckets: data.config.buckets });
	afterNavigate(() => {
		showAds({
			remp: {
				scriptUrl: 'https://campaign-remp.444test.hu/assets/lib/js/remplib.js',
				url: 'https://campaign-remp.444test.hu',
				token: '64f0f5c7-d525-4800-bf08-65ed6ed64621',
				targetSite: '444',
			},
		});
	});
	const navigationDrawerContext = setNavigationDrawerContext();
	function handleNavigationDrawerToggle() {
		navigationDrawerContext.showNavigationDrawer = !navigationDrawerContext.showNavigationDrawer;
	}
</script>

<PageMeta />

<TopAppBar>
	<div class="h-full">
		<div class="flex h-full items-center justify-between gap-4">
			<div><IconButton onclick={handleNavigationDrawerToggle} icon="menu" /></div>
			<a href="/" class="typo-display-small absolute left-1/2 -translate-x-1/2"
				>{data.config.displayName}</a
			>
		</div>
	</div>
</TopAppBar>
<NavigationDrawer>
	<NavigationDrawerItem icon="search" href="/kereses">Keresés</NavigationDrawerItem>
	<NavigationDrawerHeadline>{data.config.displayName}</NavigationDrawerHeadline>
	<NavigationDrawerItem href="/">Főoldal</NavigationDrawerItem>
	{#if data.config.navigation}
		{#each data.config.navigation as navItem}
			<NavigationDrawerItem href={navItem.href}>{navItem.text}</NavigationDrawerItem>
		{/each}
	{/if}
	<NavigationDrawerHeadline>Lapcsalád</NavigationDrawerHeadline>
	<NavigationDrawerItem rel="noopener" target="_blank" href="https://444.hu" icon="444"
		>444</NavigationDrawerItem
	>
	<NavigationDrawerItem rel="noopener" target="_blank" href="https://qubit.hu" icon="qubit"
		>Qubit</NavigationDrawerItem
	>
	<NavigationDrawerItem rel="noopener" target="_blank" href="https://lakmusz.hu" icon="lakmusz"
		>Lakmusz</NavigationDrawerItem
	>
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
<div class="grid min-h-dvh grid-rows-[1fr_auto]">
	<div>
		{#if data.config.featuredImage && !$page.data.disableHeaderImg}
			<div class="py-6">
				<div class="container-wide">
					<Link href="/">
						<img src={data.config.featuredImage} alt="{data.config.displayName} kiemelt kép" />
					</Link>
				</div>
			</div>
		{/if}
		<main>
			{@render children?.()}
		</main>
	</div>
	<footer class="mt-8 py-4">
		<div class="container-wide gap-2">
			{#if data.config.footerText}
				<div class="text-center">{@html data.config.footerText}</div>
			{/if}
			{#if data.config.footerNavigation && data.config.footerNavigation.length > 0}
				<ul class="mx-auto flex flex-wrap items-center gap-2">
					{#each data.config.footerNavigation as item, index}
						<li>
							<Link class="hover:underline" href={item.href}>{item.text}</Link>
						</li>
						<Separator />
					{/each}
				</ul>
			{/if}
			<ul class="mx-auto flex items-center gap-2">
				{#if data.config.socialLinks?.facebook}
					<li>
						<IconButton
							icon="facebook"
							rel="noopener noreferrer"
							href={data.config.socialLinks.facebook}
							title="Facebook"
						></IconButton>
					</li>
				{/if}
				{#if data.config.socialLinks?.twitter}
					<li>
						<IconButton
							icon="twitter"
							rel="noopener noreferrer"
							href={data.config.socialLinks.twitter}
							title="X"
						></IconButton>
					</li>
				{/if}
				{#if data.config.socialLinks?.instagram}
					<li>
						<IconButton
							icon="instagram"
							rel="noopener noreferrer"
							href={data.config.socialLinks.instagram}
							title="Instagram"
						></IconButton>
					</li>
				{/if}
				<li>
					<IconButton title="RSS" rel="noopener noreferrer" href="/feed"
						><M3Icon icon="rss_feed" /></IconButton
					>
				</li>
			</ul>
			<div class="text-center">
				<Link class="hover:underline" href="https://magyarjeti.hu/adatvedelmi-nyilatkozat"
					>A Magyar Jeti Zrt. adatvédelmi tájékoztatója</Link
				>
			</div>
			<div class="text-center">
				&copy; {new Date().getFullYear()}
				{data.config.displayName} - Magyar Jeti Zrt.
			</div>
		</div>
	</footer>
</div>
