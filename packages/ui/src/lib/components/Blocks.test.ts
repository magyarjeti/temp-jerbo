import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Blocks from './Blocks.svelte';

// TODO: Add concrete blocks
test('Blocks snapshot', () => {
	const { container } = render(Blocks, { props: { blocks: [] } });
	expect(container).toMatchSnapshot();
});
