<script lang="ts">
	import { TaxonomyPage } from '@packages/ui/components/routes';

	let { data } = $props();
</script>

<TaxonomyPage taxonomyType="categories" {data} />
