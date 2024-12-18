# Page Meta package

## Setup

- Set pageMeta context in `+layout.svelte` and add `PageMeta` component to the template

  ```svelte
  <script lang="ts">
  	import { PageMeta, setPageMetaContext } from '@packages/page-meta';

  	const pageMeta = setPageMetaContext({ siteUrl: 'http://example.com' });
  </script>

  <PageMeta />
  ```
