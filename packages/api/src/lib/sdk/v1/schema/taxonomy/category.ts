import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

export type TCategorySchema = typeof CategorySchema;
export type Category = StaticDecode<TCategorySchema>;
export const CategorySchema = Type.Transform(
	Type.Object({
		id: Type.String(),
		name: Type.String(),
		slug: Type.String(),
		description: NullishUnion(Type.String()),
		url: NullishUnion(Type.String({ format: 'url' })),
	}),
)
	.Decode((val) => {
		return { ...val, url: `/category/${val.slug}` };
	})
	.Encode((val) => {
		return { ...val, url: null };
	});
