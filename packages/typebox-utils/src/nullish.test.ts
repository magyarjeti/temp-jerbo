import { test, expect } from 'vitest';
import { NullishUnion } from './nullish';
import { Type } from '@sinclair/typebox/type';
import { Value } from '@sinclair/typebox/value';

test.each([
	Type.Number(),
	Type.String(),
	Type.Array(Type.String()),
	Type.Object({ foo: Type.String() }),
	Type.Transform(Type.Object({ foo: Type.String() }))
		.Decode((val) => val)
		.Encode((val) => val),
	Type.Recursive((This) => Type.Object({ foo: This })),
	Type.Intersect([Type.Object({ foo: Type.String() }), Type.Object({ bar: Type.Number() })]),
	Type.Union([Type.String(), Type.Number()]),
])('values are parsed and validated as nullish', (input) => {
	const schema = NullishUnion(input);
	const nil = Value.Check(schema, null);
	expect(nil).toBe(true);
	Value.Decode(schema, null);
	const undef = Value.Check(schema, undefined);
	expect(undef).toBe(true);
	Value.Decode(schema, undefined);
});
