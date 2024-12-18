import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Image from './Image.svelte';

test('Image snapshot', () => {
	const { container } = render(Image);
	expect(container).toMatchSnapshot();
});
