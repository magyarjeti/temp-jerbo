import { test, expect } from 'vitest';
import { IsDate, IsLeapYear } from './date';

const leapYearInput: (string | number)[] = ['2024', 2020];
test('is leap year', () => {
	for (const year of leapYearInput) {
		expect(IsLeapYear(year)).toBe(true);
	}
});

const dateInput: string[] = ['2024-06-20', '2024-02-29', '2023-02-28', '2024-01-01', '2024-12-31'];
test('is date', () => {
	for (const date of dateInput) {
		expect(IsDate(date)).toBe(true);
	}
});
