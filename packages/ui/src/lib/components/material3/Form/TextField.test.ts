import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TextField from './TextField.svelte';

// TODO: test behavior
test('TextField snapshot', () => {
	const { container } = render(TextField, { props: { label: 'Test Label', value: '' } });
	expect(container).toMatchSnapshot();
});
