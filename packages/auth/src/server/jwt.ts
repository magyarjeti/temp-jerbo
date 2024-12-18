import { Parse } from '@packages/typebox-utils';
import { Type } from '@sinclair/typebox/type';
import { EncryptJWT, jwtDecrypt, jwtVerify, SignJWT, type JWTPayload } from 'jose';

const createJWT = (secret: Uint8Array) => async (payload: JWTPayload, expiration: string) => {
	const signedJWT = await new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime(expiration)
		.sign(secret);
	const jwt = await new EncryptJWT({ jwt: signedJWT })
		.setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
		.setIssuedAt()
		.setExpirationTime(expiration)
		.encrypt(secret);
	return jwt;
};

const payloadSchema = Type.Object({
	payload: Type.Object({
		jwt: Type.String(),
		iat: Type.Number(),
		exp: Type.Number(),
	}),
});

const verifyJWT = (secret: Uint8Array) => async (token: string | Uint8Array) => {
	try {
		const decrypted = await jwtDecrypt(token, secret);
		const parsed = Parse(payloadSchema, decrypted);
		const jwt = parsed.payload.jwt;
		const { payload } = await jwtVerify(jwt, secret);
		return payload;
	} catch (error) {
		console.error('JWT verification failed:', error);
		return null;
	}
};

export const getJwtClient = (secret: string) => {
	const encodedSecret = new TextEncoder().encode(secret);
	return {
		createJWT: createJWT(encodedSecret),
		verifyJWT: verifyJWT(encodedSecret),
	};
};
