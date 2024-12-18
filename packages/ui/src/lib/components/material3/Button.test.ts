import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Button from './Button.svelte';

test('Elevated Button snapshot', () => {
	const { container } = render(Button, { props: { variant: 'elevated' } });
	expect(container).toMatchSnapshot();
});

test('Outlined Button snapshot', () => {
	const { container } = render(Button, { props: { variant: 'outlined' } });
	expect(container).toMatchSnapshot();
});

test('Filled Button snapshot', () => {
	const { container } = render(Button, { props: { variant: 'filled' } });
	expect(container).toMatchSnapshot();
});

test('Text Button snapshot', () => {
	const { container } = render(Button, { props: { variant: 'text' } });
	expect(container).toMatchSnapshot();
});
