import { expect, test } from 'vitest';
import { Parse } from '../utils';
import { ContentSchema } from '..';

test.each([
	[
		{
			authors: [{ id: 'asdf', slug: 'asdf', name: 'asdf', avatar: 'asdf' }],
			bucket: { id: 'asdf', name: 'asdf', slug: 'asdf' },
			categories: [{ id: 'asdf', name: 'asdf', slug: 'asdf' }],
			counters: [{ name: 'asdf', value: 123 }],
			id: 'asdf',
			options: [{ key: 'asdf', value: 1234 }],
			slug: 'asdf',
			tags: [{ id: 'asdf', name: 'asdf', slug: 'asdf' }],
			title: 'asdf',
			url: 'http://example.com',
		},
		{
			authors: [{ id: 'asdf', slug: 'asdf', name: 'asdf', avatar: 'asdf', url: '/author/asdf' }],
			bucket: { id: 'asdf', name: 'asdf', slug: 'asdf' },
			categories: [{ id: 'asdf', name: 'asdf', slug: 'asdf', url: '/category/asdf' }],
			counters: [{ name: 'asdf', value: 123 }],
			id: 'asdf',
			options: { asdf: 1234 },
			slug: 'asdf',
			tags: [{ id: 'asdf', name: 'asdf', slug: 'asdf', url: '/tag/asdf' }],
			title: 'asdf',
			url: '/',
		},
	],
])('schema parsed', (input, output) => {
	const parsed = Parse(ContentSchema, input);
	expect(parsed).toStrictEqual(output);
});
