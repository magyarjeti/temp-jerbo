import { expect, test } from 'vitest';
import { Type } from '@sinclair/typebox/type';
import { Parse } from './parse';

test.each([
	[Type.Number(), 123, 123],
	[Type.String(), '123', '123'],
	[Type.Array(Type.String()), ['asdf'], ['asdf']],
	[Type.Object({ foo: Type.String() }), { foo: 'asdf' }, { foo: 'asdf' }],
	[
		Type.Transform(Type.Object({ foo: Type.String() }))
			.Decode((val) => ({ bar: val.foo }))
			.Encode((val) => ({ foo: val.bar })),
		{ foo: 'asdf' },
		{ bar: 'asdf' },
	],
	[
		Type.Recursive((This) => Type.Object({ foo: Type.Optional(This) })),
		{ foo: { foo: {} } },
		{ foo: { foo: {} } },
	],
	[
		Type.Intersect([Type.Object({ foo: Type.String() }), Type.Object({ bar: Type.Number() })]),
		{ foo: 'asf', bar: 123 },
		{ foo: 'asf', bar: 123 },
	],
	[Type.Union([Type.String(), Type.Number()]), 'asdf', 'asdf'],
	[Type.Union([Type.String(), Type.Number()]), 123, 123],
])('values are parsed and validated', (schema, input, output) => {
	const parsed = Parse(schema, input);
	expect(parsed).toStrictEqual(output);
});
