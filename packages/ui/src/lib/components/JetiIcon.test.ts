import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import JetiIcon from './JetiIcon.svelte';

test('JetiIcon snapshot', () => {
	const { container } = render(JetiIcon);
	expect(container).toMatchSnapshot();
});
