import { Type, type StaticDecode } from '@sinclair/typebox/type';

export type TBucketSchema = typeof BucketSchema;
export type Bucket = StaticDecode<TBucketSchema>;
export const BucketSchema = Type.Object({
	id: Type.String(),
	name: Type.String(),
	slug: Type.String(),
});
