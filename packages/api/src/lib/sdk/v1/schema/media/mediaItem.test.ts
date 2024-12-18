import { expect, test } from 'vitest';
import { MediaItemSchema } from './mediaItem';
import { Parse, initTypeBox } from '@packages/typebox-utils';

initTypeBox();

test.each([
	[
		{
			bucket: { id: 'asdf', name: 'asdf', slug: 'asdf' },
			height: 123,
			width: 123,
			id: 'asdf',
			url: 'http://example.com',
			variations: [{ height: 321, size: 'lg', width: 123, url: 'http://example.com' }],
		},
		{
			bucket: { id: 'asdf', name: 'asdf', slug: 'asdf' },
			height: 123,
			width: 123,
			id: 'asdf',
			url: 'http://example.com',
			variations: [{ height: 321, size: 'lg', width: 123, url: 'http://example.com' }],
		},
	],
])('schema parses', (input, output) => {
	const parsed = Parse(MediaItemSchema, input);
	expect(parsed).toStrictEqual(output);
});
