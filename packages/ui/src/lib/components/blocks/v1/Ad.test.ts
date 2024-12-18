import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Ad from './Ad.svelte';
import '../../../tests/mocks';

test('Ad snapshot', () => {
	const { container } = render(Ad);
	expect(container).toMatchSnapshot();
});
