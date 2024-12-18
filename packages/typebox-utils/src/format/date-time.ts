import { IsDate } from './date';

const DATE_TIME_SEPARATOR = /t|\s/i;
const TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;

export function IsTime(value: string, strictTimeZone?: boolean): boolean {
	const matches: string[] | null = TIME.exec(value);
	if (!matches || !matches[1] || !matches[2] || !matches[3]) return false;
	const hr: number = +matches[1];
	const min: number = +matches[2];
	const sec: number = +matches[3];
	const tz: string | undefined = matches[4];
	const tzSign: number = matches[5] === '-' ? -1 : 1;
	const tzH: number = +(matches[6] || 0);
	const tzM: number = +(matches[7] || 0);
	if (tzH > 23 || tzM > 59 || (strictTimeZone && !tz)) return false;
	if (hr <= 23 && min <= 59 && sec < 60) return true;
	const utcMin = min - tzM * tzSign;
	const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
	return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
}

export function IsDateTime(value: string, strictTimeZone?: boolean): boolean {
	const dateTime = value.split(DATE_TIME_SEPARATOR);
	const date = dateTime[0];
	const time = dateTime[1];
	return (
		date !== undefined &&
		time !== undefined &&
		dateTime.length === 2 &&
		IsDate(date) &&
		IsTime(time, strictTimeZone)
	);
}
