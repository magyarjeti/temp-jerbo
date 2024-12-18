import { Type, type TSchema } from '@sinclair/typebox/type';

export const NullishUnion = <T extends TSchema[]>(...schema: T) => {
	return Type.Optional(Type.Union([...schema, Type.Null(), Type.Undefined()]));
};
