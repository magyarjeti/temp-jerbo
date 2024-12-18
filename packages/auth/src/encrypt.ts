import crypto from 'crypto';
import { hash } from './hash';

export const encrypt = (value: string, secretKey: string) => {
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
	let encrypted = cipher.update(value, 'utf8', 'base64');
	encrypted += cipher.final('base64');
	const ivBase64 = iv.toString('base64');
	const mac = hash(ivBase64, encrypted, secretKey);
	const payload = JSON.stringify({ iv: ivBase64, value: encrypted, mac });

	if (!payload) {
		throw new Error('Could not encrypt the data.');
	}

	return Buffer.from(payload).toString('base64');
};
