import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TopAppBar from './TopAppBar.svelte';

test('TopAppBar snapshot', () => {
	const { container } = render(TopAppBar);
	expect(container).toMatchSnapshot();
});
