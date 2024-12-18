import { test, expect } from 'vitest';
import { IsDateTime, IsTime } from './date-time';

const timeInput: string[] = ['17:07:15.839Z'];
test('is time', () => {
	for (const time of timeInput) {
		expect(IsTime(time)).toBe(true);
	}
});

const dateTimeInput: string[] = [
	'2024-06-20T17:07:15.839Z',
	'2024-02-29T17:07:15.839Z',
	'2023-02-28T17:07:15.839Z',
	'2024-01-01T17:07:15.839Z',
	'2024-12-31T17:07:15.839Z',
];
test('is date-time', () => {
	for (const dateTime of dateTimeInput) {
		expect(IsDateTime(dateTime)).toBe(true);
	}
});
