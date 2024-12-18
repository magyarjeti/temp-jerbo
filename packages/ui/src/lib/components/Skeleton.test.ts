import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Skeleton from './Skeleton.svelte';

test('Skeleton snapshot', () => {
	const { container } = render(Skeleton);
	expect(container).toMatchSnapshot();
});
