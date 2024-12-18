import { expect, test } from 'vitest';
import { AuthorSchema } from './author';
import { Parse } from '../utils';

test.each([
	[
		{ id: 'asdf', name: 'asdf', slug: 'asdf' },
		{ id: 'asdf', name: 'asdf', slug: 'asdf', url: '/author/asdf' },
	],
])('schema parses', (input, output) => {
	const parsed = Parse(AuthorSchema, input);
	expect(parsed).toStrictEqual(output);
});
