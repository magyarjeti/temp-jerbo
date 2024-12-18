import type { FetchMainpageQuery, Option } from '@packages/api/gql/types';

function transformOptions(options?: { key: string; value?: any | null }[]) {
	if (!options) {
		return {};
	}
	if (!Array.isArray(options)) {
		return options;
	}
	return options.reduce((options: Record<string, unknown>, option) => {
		options[option.key] = option.value;
		return options;
	}, {});
}

// TODO: use input parser transformation instead of this function
export default function (data?: FetchMainpageQuery) {
	if (!data) {
		throw new Error('No mainpage data.');
	}
	const mainpage = data.mainpage;
	const layout = mainpage?.layout;
	if (!layout) {
		throw new Error('Layout not defined for mainpage.');
	}
	const items = mainpage?.items || [];
	const body = layout.sections.reduce((body: Record<string, any[]>, section) => {
		body[section.name] = [];
		return body;
	}, {});
	const displays = new Set();
	items.forEach((item) => {
		const sectionName = item.layoutSection.name;
		const displaySlug = item.display?.slug || 'ad';
		if (!displays.has(displaySlug)) {
			displays.add(displaySlug);
		}
		body[sectionName].push({
			id: item.id,
			display: item.display?.slug,
			options: transformOptions(item.options),
			position: item.position,
		});
		const lastIndex = body[sectionName].length - 1;
		if (item.__typename === 'MainpageItemWithContent') {
			body[sectionName][lastIndex].content = item.content;
			if (item.content?.__typename === 'Article') {
				body[sectionName][lastIndex].content.options = transformOptions(item.content?.options);
			}
			body[sectionName][lastIndex].featuredImage = item.featuredImage;
		}
	});
	return { body, displays: [...displays] };
}
