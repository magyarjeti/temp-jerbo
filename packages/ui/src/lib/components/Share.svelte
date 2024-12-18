<script lang="ts">
	import { Button, IconButton } from './material3';

	interface Props {
		url: string;
		title: string;
	}

	let { url, title }: Props = $props();

	function share(url: string, title: string): void {
		navigator?.share({ url, title });
	}

	const nativeShare = typeof window !== 'undefined' && !!window?.navigator?.share;
	let copyClicked = $state(false);

	const providers = [
		{
			name: 'Facebook',
			icon: 'facebook',
			href: `https://www.facebook.com/share.php?u=${url}&title=${title}`,
		},
		{
			name: 'Twitter',
			icon: 'twitter',
			href: `https://twitter.com/intent/tweet?text=${title}+${url}`,
		},
		{
			name: 'Tumblr',
			icon: 'tumblr',
			href: `https://www.tumblr.com/share?v=3&u=${url}&t=${title}`,
		},
		{
			name: 'LinkedIn',
			icon: 'linkedin',
			href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
		},
	];

	const copyToClipboard = (url: string) => {
		navigator.clipboard.writeText(
			url.startsWith(window.location.host) ? url : `${window.location.host}${url}`,
		);
		copyClicked = true;
	};
</script>

<div class="flex flex-wrap gap-3">
	{#if nativeShare}
		<Button variant="text" icon="share" onclick={() => share(url, title)}>Megosztás</Button>
	{:else}
		{#each providers as provider}
			<IconButton
				variant="standard"
				icon={provider.icon}
				href={provider.href}
				title={provider.name}
			/>
		{/each}
		<IconButton
			variant="standard"
			icon={copyClicked ? 'done' : 'link_copy'}
			onclick={() => copyToClipboard(url)}
			title="Link másolása"
		/>
	{/if}
</div>
