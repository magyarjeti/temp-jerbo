import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import NavigationDrawerHeadline from './NavigationDrawerHeadline.svelte';

test('NavigationDrawerHeadline snapshot', () => {
	const { container } = render(NavigationDrawerHeadline);
	expect(container).toMatchSnapshot();
});
