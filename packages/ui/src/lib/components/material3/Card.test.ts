import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Card from './Card.svelte';

test('Elevated Card snapshot', () => {
	const { container } = render(Card, { props: { variant: 'elevated' } });
	expect(container).toMatchSnapshot();
});

test('Outlined Card snapshot', () => {
	const { container } = render(Card, { props: { variant: 'outlined' } });
	expect(container).toMatchSnapshot();
});

test('Filled Card snapshot', () => {
	const { container } = render(Card, { props: { variant: 'filled' } });
	expect(container).toMatchSnapshot();
});
