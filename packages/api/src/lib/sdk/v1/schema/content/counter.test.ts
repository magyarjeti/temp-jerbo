import { expect, test } from 'vitest';
import { CounterSchema } from './counter';
import { Parse } from '../utils';

test.each([
	[
		{ name: 'a', value: 5 },
		{ name: 'a', value: 5 },
	],
	[{ name: 'b' }, { name: 'b' }],
])('schema parses', (input, output) => {
	const parsed = Parse(CounterSchema, input);
	expect(parsed).toStrictEqual(output);
});
