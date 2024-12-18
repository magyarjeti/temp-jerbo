import { expect, test } from 'vitest';
import { BucketSchema } from './bucket';
import { Parse } from '../utils';

test.each([
	[
		{ id: 'asdf', name: 'asdf', slug: 'asdf' },
		{ id: 'asdf', name: 'asdf', slug: 'asdf' },
	],
])('schema parses', (input, output) => {
	const parsed = Parse(BucketSchema, input);
	expect(parsed).toStrictEqual(output);
});
