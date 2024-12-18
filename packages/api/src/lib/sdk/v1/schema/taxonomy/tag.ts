import { Type, type StaticDecode } from '@sinclair/typebox/type';
import { NullishUnion } from '@packages/typebox-utils';

export type TTagSchema = typeof TagSchema;
export type Tag = StaticDecode<TTagSchema>;
export const TagSchema = Type.Transform(
	Type.Object({
		id: Type.String(),
		name: Type.String(),
		slug: Type.String(),
		description: NullishUnion(Type.String()),
		url: NullishUnion(Type.String({ format: 'url' })),
	}),
)
	.Decode((val) => ({ ...val, url: `/tag/${val.slug}` }))
	.Encode((val) => ({ ...val }));
