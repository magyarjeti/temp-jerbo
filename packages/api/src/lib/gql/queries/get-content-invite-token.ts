import { graphql } from '../__generated__';

export const GET_CONTENT_INVITE_TOKEN = graphql(`
	query getContentInviteToken($id: ID!) {
		contentInviteToken(id: $id) {
			inviteToken
		}
	}
`);
