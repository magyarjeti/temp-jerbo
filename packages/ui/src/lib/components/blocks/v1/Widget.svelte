<script lang="ts">
	import type { WidgetBlock } from '@packages/api/sdk/v1/schema';
	import { getWidgetsContext } from './widget';
	import { toPascalCase } from '@packages/toolbox/string';

	interface Props {
		data?: WidgetBlock;
	}

	let { data }: Props = $props();

	const components = getWidgetsContext();

	function getComponent(type?: string) {
		if (!type) {
			return null;
		}
		const componentName = toPascalCase(type) as keyof typeof $components;
		if (!$components[componentName]) {
			console.warn('widget not implemented:', type);
		}
		return $components[componentName];
	}

	const Widget = $derived(getComponent(data?.params?.type));
</script>

<Widget params={data?.params?.params} />
