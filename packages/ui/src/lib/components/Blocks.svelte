<script lang="ts">
	import type { Body } from '@packages/api/sdk/v1/schema';
	import { toPascalCase } from '@packages/toolbox/string';
	import { getBlocksContext } from './blocks';

	interface Props {
		blocks: Body;
	}

	let { blocks }: Props = $props();
	const components = getBlocksContext();

	function getComponent(type?: string) {
		if (!type) {
			return null;
		}
		const componentName = toPascalCase(type) as keyof typeof $components;
		if (!$components[componentName]) {
			console.warn('block not implemented:', type);
		}
		return $components[componentName];
	}
</script>

{#each blocks as block}
	{@const Block = getComponent(block.type)}
	{#if Block}
		<Block data={block} />
	{/if}
{/each}
