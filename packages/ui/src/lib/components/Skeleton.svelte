<script lang="ts">
	import { concatClasses } from '@packages/toolbox/concatClasses';
	let { ...props }: { class: string } = $props();
	const baseClasses = 'pulse bg-surface-container-highest opacity-1';
	const classes = $derived(concatClasses(props.class, baseClasses));
</script>

<div class={classes}><span class="sr-only">Betöltés alatt</span></div>

<style lang="postcss">
	.pulse {
		animation: 1s infinite ease-in pulse;
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0.5;
		}

		100% {
			opacity: 1;
		}
	}
</style>
