import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import CoreParagraph from './CoreParagraph.svelte';

test('CoreParagraph snapshot', () => {
	const { container } = render(CoreParagraph);
	expect(container).toMatchSnapshot();
});
