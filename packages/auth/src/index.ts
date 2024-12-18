import { Type } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

export * from './hash';
export * from './encrypt';

export const userSchema = Type.Object({
	status: Type.String(), // Type.Union([Type.Literal('ok')])
	user: Type.Object({
		id: Type.Number(),
		email: Type.String({ format: 'email' }),
		first_name: NullishUnion(Type.String()),
		last_name: NullishUnion(Type.String()),
		// confirmed_at: null
	}),
	access: Type.Object({
		token: Type.String(),
	}),
});
