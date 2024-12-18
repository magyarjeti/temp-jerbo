import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import Link from './Link.svelte';

test('link snapshot', () => {
	const { container } = render(Link, { props: { href: 'http://example.com' } });
	expect(container).toMatchSnapshot();
});

test('link is external', () => {
	render(Link, { props: { href: 'http://example.com' } });
	const anchor = screen.getByRole('link');
	expect(anchor.getAttribute('href')).toBe('http://example.com');
	expect(anchor.getAttribute('target')).toBe('_blank');
	expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
});

test('link is internal', () => {
	render(Link, {
		props: { href: '/test' },
	});
	const anchor = screen.getByRole('link');
	expect(anchor.getAttribute('href')).toBe('/test');
});
