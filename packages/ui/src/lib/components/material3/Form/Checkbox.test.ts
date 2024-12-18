import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Checkbox from './Checkbox.svelte';

test('Checkbox snapshot', () => {
	const { container } = render(Checkbox);
	expect(container).toMatchSnapshot();
});
