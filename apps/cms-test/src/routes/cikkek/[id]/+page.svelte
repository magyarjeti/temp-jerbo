<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Editor from '$lib/components/tiptap/Editor.svelte';
	import { FullscreenLoadingIndicator } from '@packages/ui/components';
	import { Button, TextField } from '@packages/ui/components/material3';
	import { page } from '$app/stores';

	let { data } = $props();
	let loading = $state(false);
	let title = $state(data.content?.title?.[0].value || '');
	let json = $state(data.content?.body);
	let updatedAt = $state(data.content?.updatedAt);
	let updatedAtDisplay = $derived(
		new Date(updatedAt).toLocaleDateString('hu-HU', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}),
	);
	let text = '';
	let keywords = $state('');

	const onClick = async () => {
		loading = true;
		const res = await fetch('/api/keywords', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				text,
			}),
		});
		loading = false;
		const resJson = await res.json();
		keywords = resJson.keywords.join(', ');
	};

	const DEBOUNCE_TIME = 1000;
	let timer: NodeJS.Timeout | undefined = undefined;

	const updateContent = async () => {
		const jsonBody = JSON.stringify({ title, body: json, id: $page.params.id });
		clearTimeout(timer);
		timer = setTimeout(async () => {
			try {
				const res = await fetch('/api/content', {
					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: jsonBody,
				});
				if (!res.ok) {
					console.error(res.status, res.statusText);
				}
				const resJson = await res.json();
				updatedAt = resJson.updatedAt;
			} catch (err) {
				loading = false;
				console.error(err);
			}
		}, DEBOUNCE_TIME);
	};

	const handleInput = (event: Event) => {
		const tar = event.target as HTMLInputElement;
		title = tar.value;
		updateContent();
	};

	const setRichText = (data: { text: string; json: string }) => {
		text = data.text;
		json = data.json;
		updateContent();
	};
</script>

<FullscreenLoadingIndicator show={loading} />
<div class="container-wide">
	<div class="mb-2">Utoljára mentve: {updatedAtDisplay}</div>
	<form
		method="post"
		class="grid grid-cols-1 gap-8"
		use:enhance={() => {
			loading = true;
			return async ({ result, update }) => {
				loading = false;
				if (result.type === 'redirect') {
					goto(result.location);
				} else {
					await applyAction(result);
				}
			};
		}}
	>
		<TextField class="w-full" oninput={handleInput} value={title} label="Cím" name="title"
		></TextField>

		<div class="flex items-center gap-2">
			<div class="flex-1">
				<TextField class="w-full" bind:value={keywords} label="Kulcsszavak" />
			</div>
			<Button onclick={onClick}>AI POWER!!444!!!</Button>
		</div>
		<input type="hidden" bind:value={json} name="body" />
		<input type="hidden" value={data.content?.id || 'new'} name="id" />
		<div class="grid grid-cols-1 gap-4">
			<Editor initialJson={data.content?.body} onchange={setRichText} />
		</div>
		<div class="flex items-center justify-end gap-2">
			<Button href="/cikkek" variant="outlined">Mégsem</Button>
			<Button type="submit" variant="filled">Mentés</Button>
		</div>
	</form>
</div>

<div class="container-wide mt-6">
	<div class="bg-inverse-surface p-6 font-mono text-inverse-on-surface">
		{json}
	</div>
</div>
