import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Snackbar from './Snackbar.svelte';

// TODO: test behavior
test('Snackbar snapshot', () => {
	const { container } = render(Snackbar);
	expect(container).toMatchSnapshot();
});
