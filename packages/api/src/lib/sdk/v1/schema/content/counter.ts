import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

export type TCounterSchema = typeof CounterSchema;
export type Counter = StaticDecode<TCounterSchema>;
export const CounterSchema = Type.Object({
	name: Type.String(),
	value: NullishUnion(Type.Number()),
});
