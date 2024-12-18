import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import NavigationDrawerItem from './NavigationDrawerItem.svelte';

test('NavigationDrawerItem snapshot', () => {
	const { container } = render(NavigationDrawerItem);
	expect(container).toMatchSnapshot();
});
