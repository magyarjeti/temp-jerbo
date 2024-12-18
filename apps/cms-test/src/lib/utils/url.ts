/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { urlRegExp } from '@packages/toolbox/string/url';

const SUPPORTED_URL_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'sms:', 'tel:']);

export function sanitizeUrl(url: string): string {
	try {
		const parsedUrl = new URL(url);
		// eslint-disable-next-line no-script-url
		if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
			return 'about:blank';
		}
	} catch {
		return url;
	}
	return url;
}

export function validateUrl(url: string): boolean {
	// TODO Fix UI for link insertion; it should never default to an invalid URL such as https://.
	// Maybe show a dialog where they user can type the URL before inserting it.
	return url === 'https://' || urlRegExp.test(url);
}
