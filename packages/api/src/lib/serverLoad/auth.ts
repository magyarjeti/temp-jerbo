import { redirect, type Actions, type RequestEvent } from '@sveltejs/kit';
import { Parse } from '@packages/typebox-utils';
import { encrypt, userSchema } from '@packages/auth';
import { getJwtClient } from '@packages/auth/jwt';

const crmLoginEndpoint = '/api/v1/users/login/';

type Options = {
	crmBaseUrl: string;
	jwtSecret: string;
	jwtCookieName: string;
	jwtRefreshCookieName: string;
	siteUrl: string;
};

export const setAuthCookie = async (
	event: RequestEvent,
	cookieName: string,
	token: string,
	maxAge: number,
) => {
	event.cookies.set(cookieName, token, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		maxAge,
		path: '/',
	});
};

export const clearCookies = (event: RequestEvent, cookieNames: string[]) => {
	for (const cookie of cookieNames) {
		event.cookies.delete(cookie, { path: '/' });
	}
};

export const getAuthActions = (opts: Options): Actions => {
	return {
		login: async (event) => {
			const data = await event.request.formData();
			const currentUrl = data.get('currentUrl')?.toString();
			const res = await event.fetch(`${opts.crmBaseUrl}${crmLoginEndpoint}`, {
				method: 'post',
				body: data,
			});
			const json = await res.json();
			const userData = Parse(userSchema, json);
			const redirectUrl = new URL(`${opts.crmBaseUrl}/bejelentkezes`);
			redirectUrl.searchParams.set('payload', encrypt(userData.access.token, opts.jwtSecret));
			redirectUrl.searchParams.set('redirect', currentUrl || opts.siteUrl);

			const jwtClient = getJwtClient(opts.jwtSecret);
			setAuthCookie(event, opts.jwtCookieName, await jwtClient.createJWT(userData, '15m'), 60 * 15);
			setAuthCookie(
				event,
				opts.jwtRefreshCookieName,
				await jwtClient.createJWT({ refresh: 'SOROS GYÖRGY!!4!4!4!!' }, '7d'),
				60 * 60 * 24 * 7,
			);

			throw redirect(303, redirectUrl.toString());
		},
		logout: async (event) => {
			const data = await event.request.formData();
			const currentUrl = data.get('currentUrl')?.toString();
			clearCookies(event, [opts.jwtCookieName, opts.jwtRefreshCookieName]);
			throw redirect(
				303,
				`${opts.crmBaseUrl}/kijelentkezes?redirect=${currentUrl || opts.siteUrl}`,
			);
		},
	};
};
