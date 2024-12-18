import { test, expect } from 'vitest';
import { IsEmail } from './email';

const inputs: string[] = ['asdf@example.com', 'lol@444.hu'];

test('is email', () => {
	for (const input of inputs) {
		expect(IsEmail(input)).toBe(true);
	}
});
