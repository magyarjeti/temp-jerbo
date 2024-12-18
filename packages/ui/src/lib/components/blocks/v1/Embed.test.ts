import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Embed from './Embed.svelte';

test('Embed snapshot', () => {
	const { container } = render(Embed);
	expect(container).toMatchSnapshot();
});
