import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import NavigationDrawer from './NavigationDrawer.svelte';

// TODO: test behavior
test('NavigationDrawer snapshot', () => {
	const { container } = render(NavigationDrawer);
	expect(container).toMatchSnapshot();
});
