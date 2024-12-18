<script lang="ts">
	interface Props {
		url: string;
		aspectRatio?: `${string}/${string}`;
	}

	let { url, aspectRatio = '16/9' }: Props = $props();

	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	let videoId = $derived(() => {
		const match = url.match(regExp);
		return match && match[2].length === 11 ? match[2] : null;
	});
</script>

<iframe
	class="w-full"
	style={`aspect-ratio:${aspectRatio};`}
	src={`https://www.youtube.com/embed/${videoId()}`}
	title="YouTube video player"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
></iframe>
