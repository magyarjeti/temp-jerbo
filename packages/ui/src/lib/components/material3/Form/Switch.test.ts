import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Switch from './Switch.svelte';

// TODO: test behavior
test('Switch snapshot', () => {
	const { container } = render(Switch);
	expect(container).toMatchSnapshot();
});
