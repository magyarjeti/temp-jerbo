import { HttpResponse } from 'msw';
import { COOKIE_NAME } from '../constants.ts';

export default new HttpResponse(
	`
<script>
    window.parent.postMessage({
      status: 'connected',
      user: {
        id: '1',
        email: 'dummy@email.com',
        first_name: 'László',
        last_name: 'Felhasználó',
        subscription_ids: ['1'],
      },
      subscriptions: [
        {
          id: 28,
          start_at: "2021-08-01T00:00:00+02:00",
          end_at: "2030-01-01T00:00:00+01:00",
          code: "444_belso_kor",
          access: ["article","newsletter","disqus","podcast_rss","podcast_player","print","invitation","article_invitation"]
        }
      ],
      verified: true
    });
  </script>`,
	{
		headers: {
			'Content-Type': 'text/html',
			'Set-Cookie': `${COOKIE_NAME}=very_secret_string`,
		},
	},
);
