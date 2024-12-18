import { PUBLIC_JERBO_CRM_URL, PUBLIC_JERBO_SITE_URL } from '$env/static/public';
import { JERBO_GATEWAY_SECRET } from '$env/static/private';
import { JWT_COOKIE_NAME, JWT_REFRESH_COOKIE_NAME } from '$lib/constants';
import { getAuthActions } from '@packages/api/serverLoad/auth';

export const actions = getAuthActions({
	crmBaseUrl: PUBLIC_JERBO_CRM_URL,
	siteUrl: PUBLIC_JERBO_SITE_URL,
	jwtCookieName: JWT_COOKIE_NAME,
	jwtRefreshCookieName: JWT_REFRESH_COOKIE_NAME,
	jwtSecret: JERBO_GATEWAY_SECRET,
});
