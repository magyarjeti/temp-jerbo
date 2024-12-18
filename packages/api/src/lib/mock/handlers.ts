import { graphql, http } from 'msw';

import connect from './http/connect.ts';
import signOut from './http/signOut.ts';
import signIn from './http/signIn.ts';
import { HttpResponse } from 'msw';

import fetchContents from './graphql/fetchContents.ts';
import fetchContent from './graphql/fetchContent.ts';

export const handlers = [
	http.get('/connect', () => {
		return connect;
	}),
	http.get('/api/users-sign-out', () => {
		return signOut;
	}),
	http.get('/api/sign-in', () => {
		return signIn;
	}),
	// http.get('https://444.jeti.localhost/ads.txt', () => {
	// 	return new HttpResponse(ads);
	// }),
];
