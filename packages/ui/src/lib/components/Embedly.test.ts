import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Embedly from './Embedly.svelte';

test('Embedly snapshot', () => {
	const { container } = render(Embedly, { props: { src: 'https://444.hu' } });
	expect(container).toMatchSnapshot();
});
