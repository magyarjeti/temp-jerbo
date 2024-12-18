import { expect, test } from 'vitest';
import { CategorySchema } from './category';
import { Parse } from '../utils';

test.each([
	[
		{ id: 'asdf', name: 'asdf', slug: 'asdf' },
		{ id: 'asdf', name: 'asdf', slug: 'asdf', url: '/category/asdf' },
	],
])('schema parses', (input, output) => {
	const parsed = Parse(CategorySchema, input);
	expect(parsed).toStrictEqual(output);
});
