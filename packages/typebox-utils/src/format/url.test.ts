import { test, expect } from 'vitest';
import { IsUrl } from './url';

const inputs: string[] = ['http://example.com', 'https://example.com'];

test('is url', () => {
	for (const input of inputs) {
		expect(IsUrl(input)).toBe(true);
	}
});
