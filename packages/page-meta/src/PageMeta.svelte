<script lang="ts">
	import { getPageMetaContext } from './context.svelte';

	const pageMetaCtx = getPageMetaContext();

	let computedCanonicalUrl = $derived(
		pageMetaCtx.canonicalUrl.startsWith(pageMetaCtx.siteUrl)
			? pageMetaCtx.canonicalUrl
			: `${pageMetaCtx.siteUrl}${pageMetaCtx.canonicalUrl}`,
	);
</script>

<svelte:head>
	{#if pageMetaCtx.title}
		<title>{pageMetaCtx.title}</title>
		<meta name="title" content={pageMetaCtx.title} />
		<meta property="og:title" content={pageMetaCtx.title} />
		<meta name="twitter:title" content={pageMetaCtx.title} />
	{/if}
	{#if pageMetaCtx.description}
		<meta name="description" content={pageMetaCtx.description} />
		<meta property="og:description" content={pageMetaCtx.description} />
		<meta name="twitter:description" content={pageMetaCtx.description} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	{#if computedCanonicalUrl}
		<link rel="canonical" href={computedCanonicalUrl} />
		<meta property="og:url" content={computedCanonicalUrl} />
		<meta property="twitter:url" content={computedCanonicalUrl} />
	{/if}
	{#if pageMetaCtx.siteName}
		<meta property="og:site_name" content={pageMetaCtx.siteName} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="hu" />

	<!-- <meta property="og:image" content={img || ogImg} /> -->
	<!-- <meta name="twitter:image" content={img || ogImg} /> -->
	<meta name="robots" content="max-image-preview:large" />
</svelte:head>
