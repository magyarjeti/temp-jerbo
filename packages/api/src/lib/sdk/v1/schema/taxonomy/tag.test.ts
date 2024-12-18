import { expect, test } from 'vitest';
import { TagSchema } from './tag';
import { Parse } from '../utils';

test.each([
	[
		{ id: 'asdf', name: 'asdf', slug: 'asdf' },
		{ id: 'asdf', name: 'asdf', slug: 'asdf', url: '/tag/asdf' },
	],
])('schema parses', (input, output) => {
	const parsed = Parse(TagSchema, input);
	expect(parsed).toStrictEqual(output);
});
