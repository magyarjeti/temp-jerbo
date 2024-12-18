import { expect, test } from 'vitest';
import { BlockSchema, BodySchema } from './body';
import { Parse } from '../utils';

test.each([
	[
		{
			type: 'asdf',
			content: 'asdf',
			params: {
				a: 'bar',
				b: 123,
				c: [],
				d: {},
				e: null,
				f: undefined,
			},
		},
	],
])('block schema parses', (input) => {
	Parse(BlockSchema, input);
});

test.each([
	[
		[
			[
				{
					type: 'asdf',
					content: 'asdf',
					params: {
						a: 'bar',
						b: 123,
						c: [],
						d: {},
						e: null,
						f: undefined,
					},
				},
				// we expect this to be filtered out
				{
					type: 'html',
				},
			],
		],
	],
])('body schema parses', (input) => {
	const parsed = Parse(BodySchema, input);
	for (const item of parsed) {
		expect(item.type).toBe('asdf');
		expect(item.content).toBe('asdf');
		expect(item.params).toStrictEqual({
			a: 'bar',
			b: 123,
			c: [],
			d: {},
			e: null,
			f: undefined,
		});
	}
});
