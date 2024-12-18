import { FormatRegistry } from '@sinclair/typebox/type';
import { IsEmail } from './format/email';
import { IsDate } from '@sinclair/typebox/value';
import { IsDateTime } from './format/date-time';
import { IsUrl } from './format/url';

export const initTypeBox = () => {
	FormatRegistry.Set('email', IsEmail);
	FormatRegistry.Set('date', IsDate);
	FormatRegistry.Set('date-time', IsDateTime);
	FormatRegistry.Set('url', IsUrl);
};
