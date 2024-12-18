import { dev } from '$app/environment';
import { JERBO_GATEWAY_SECRET } from '$env/static/private';
import { JWT_COOKIE_NAME, JWT_REFRESH_COOKIE_NAME } from '$lib/constants';
import { Parse } from '@packages/typebox-utils';
import { userSchema } from '@packages/auth';
import { getJwtClient } from '@packages/auth/jwt';
import type { RequestEvent } from '@sveltejs/kit';
import { clearCookies, setAuthCookie } from '@packages/api/serverLoad/auth';

if (dev) {
	const { server } = await import('@packages/api/mock/node');

	server.listen();
}

const jwtClient = getJwtClient(JERBO_GATEWAY_SECRET);

const refreshToken = async (event: RequestEvent) => {
	const refreshToken = event.cookies.get(JWT_REFRESH_COOKIE_NAME);
	if (!refreshToken) {
		return false;
	}
	const payload = await jwtClient.verifyJWT(refreshToken);
	if (!payload) {
		return false;
	}
	setAuthCookie(event, JWT_COOKIE_NAME, await jwtClient.createJWT(payload, '15m'), 60 * 15);
	return true;
};

// TODO: factor out to be reusable
export async function handle({ event, resolve }) {
	const token = event.cookies.get(JWT_COOKIE_NAME);

	// TODO: de szep iferdo
	if (token) {
		let payload = await jwtClient.verifyJWT(token);
		if (payload) {
			const parsed = Parse(userSchema, payload);
			event.locals.user = {
				firstName: parsed.user.first_name,
				lastName: parsed.user.last_name,
				email: parsed.user.email,
			};
		} else {
			const isRefreshed = await refreshToken(event);
			if (isRefreshed) {
				const newToken = event.cookies.get(JWT_COOKIE_NAME);
				if (newToken) {
					payload = await jwtClient.verifyJWT(newToken);
				}
			} else {
				// TODO: logout not working properly
				clearCookies(event, [JWT_COOKIE_NAME, JWT_REFRESH_COOKIE_NAME]);
				await event.fetch('/auth?/logout', { method: 'post', credentials: 'include' });
			}
		}
	}

	return resolve(event);
}
