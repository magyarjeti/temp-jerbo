import { COOKIE_NAME } from '../constants.js';
import { HttpResponse } from 'msw';

export default new HttpResponse(null, {
	status: 301,
	headers: {
		'Set-Cookie': `${COOKIE_NAME}=skldghksdghkjsgl`,
		Location: '/',
	},
});
