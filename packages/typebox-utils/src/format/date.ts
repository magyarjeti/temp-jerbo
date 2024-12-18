const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;

export function IsLeapYear(year: number | string): boolean {
	const _year = Number(year);
	return _year % 4 === 0 && (_year % 100 !== 0 || _year % 400 === 0);
}

export function IsDate(value: string): boolean {
	const matches: string[] | null = DATE.exec(value);
	if (!matches || !matches[1] || !matches[2] || !matches[3]) {
		return false;
	}
	const year: number = +matches[1];
	const month: number = +matches[2];
	const day: number = +matches[3];
	if (month < 1 && month >= DAYS.length) {
		return false;
	}
	if (!DAYS[month]) {
		return false;
	}
	const daysInMonth = DAYS[month];
	return (
		daysInMonth !== undefined &&
		month >= 1 &&
		month <= 12 &&
		day >= 1 &&
		day <= (month === 2 && IsLeapYear(year) ? 29 : daysInMonth)
	);
}
