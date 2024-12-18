import crypto from 'crypto';

export const hash = (iv: string, value: string, key: string) => {
	const hmac = crypto.createHmac('sha256', key);
	hmac.update(iv + value);
	return hmac.digest('hex');
};
