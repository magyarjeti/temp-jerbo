import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import IconButton from './IconButton.svelte';

test('Standard IconButton snapshot', () => {
	const { container } = render(IconButton, { props: { variant: 'standard' } });
	expect(container).toMatchSnapshot();
});

test('Outlined IconButton snapshot', () => {
	const { container } = render(IconButton, { props: { variant: 'outlined' } });
	expect(container).toMatchSnapshot();
});

test('Filled IconButton snapshot', () => {
	const { container } = render(IconButton, { props: { variant: 'filled' } });
	expect(container).toMatchSnapshot();
});
