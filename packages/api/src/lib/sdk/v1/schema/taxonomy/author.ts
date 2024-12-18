import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

export type TAuthorSchema = typeof AuthorSchema;
export type Author = StaticDecode<TAuthorSchema>;
export const AuthorSchema = Type.Transform(
	Type.Object({
		id: Type.String(),
		name: Type.String(),
		avatar: NullishUnion(Type.String()),
		slug: Type.String(),
	}),
)
	.Decode((val) => {
		return { ...val, url: `/author/${val.slug}` };
	})
	.Encode((val) => {
		return { ...val, url: null };
	});
