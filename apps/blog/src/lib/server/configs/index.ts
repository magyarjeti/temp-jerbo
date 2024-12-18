import type { SiteConfig } from '$lib/types';
import { Parse } from '@packages/typebox-utils';
import { Type, type Static } from '@sinclair/typebox/type';
import fs from 'fs';
import path from 'path';

const schemesSchema = Type.Object({
	schemes: Type.Object({
		light: Type.Record(Type.String(), Type.String()),
		'light-medium-contrast': Type.Record(Type.String(), Type.String()),
		'light-high-contrast': Type.Record(Type.String(), Type.String()),
		dark: Type.Record(Type.String(), Type.String()),
		'dark-medium-contrast': Type.Record(Type.String(), Type.String()),
		'dark-high-contrast': Type.Record(Type.String(), Type.String()),
	}),
});

export async function getConfig(slug: string): Promise<SiteConfig> {
	try {
		const module = await import(`./blogs/${slug}.ts`);
		return module.default;
	} catch (err) {
		throw new Error(`'${slug}' doesn't exist.`);
	}
}

export function getThemes() {
	const dirPath = path.join(__dirname, './blogs/themes');
	const files = fs.readdirSync(dirPath);
	const themes: Record<string, Static<typeof schemesSchema>['schemes']> = {};
	for (const file of files) {
		const slug = path.basename(file, '.json');
		const content = JSON.parse(fs.readFileSync(path.join(dirPath, file)).toString());
		const parsed = Parse(schemesSchema, content);
		themes[slug] = parsed.schemes;
	}
	return themes;
}
