import type { StaticDecode, TSchema } from '@sinclair/typebox/type';
import { Value } from '@sinclair/typebox/value';

export function Parse<T extends TSchema>(schema: T, value: unknown): StaticDecode<T> {
	const cloned = Value.Clone(value);
	if (Value.Check(schema, cloned)) {
		const cleaned = Value.Clean(schema, cloned);
		return Value.Decode(schema, cleaned);
	}
	console.error(
		'Value does not match the Schema',
		'\nSchema: ',
		[...Value.Errors(schema, value)],
		'\nValue: ',
		value,
	);
	console.trace();

	return cloned;
}
