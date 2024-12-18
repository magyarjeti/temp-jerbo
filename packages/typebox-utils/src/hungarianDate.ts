import { Type } from '@sinclair/typebox/type';

export function HungarianDate(isoDateString: string, time?: boolean) {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'Europe/Budapest',
	};
	if (time) {
		options.hour = '2-digit';
		options.minute = '2-digit';
	}
	// TODO: this could be the site's current locale
	const dateTimeFormat = new Intl.DateTimeFormat('hu-HU', options);
	return dateTimeFormat.format(new Date(isoDateString));
}

export const HungarianDateTimeSchemaBuilder = (time?: boolean) =>
	Type.Transform(Type.String({ format: 'date-time' }))
		.Decode((val) => HungarianDate(val, time))
		.Encode((val) => new Date(val).toISOString());
