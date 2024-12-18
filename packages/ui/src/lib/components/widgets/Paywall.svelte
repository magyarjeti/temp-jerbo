<script lang="ts">
	interface Props {
		params?: {
			access?: string;
		} | null;
	}

	let { params }: Props = $props();
</script>

<div class="bg-primary-container p-4 text-on-primary-container">
	<h2>Ez itt a paywall, innentol nem olvashatsz.</h2>
</div>
