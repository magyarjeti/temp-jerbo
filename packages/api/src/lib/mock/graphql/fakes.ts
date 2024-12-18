import { faker } from '@faker-js/faker';

export function fakeTitle() {
	return faker.lorem.words({ min: 2, max: 8 });
}

export function fakeSlug() {
	return faker.lorem.slug({ min: 2, max: 8 });
}

export function fakeTaxonomy() {
	const name = faker.lorem.words({ min: 1, max: 2 });
	return { name, slug: faker.helpers.slugify(name), id: faker.string.uuid() };
}

export function fakeAuthor() {
	const name = faker.person.fullName();
	return { name, slug: faker.lorem.slug({ min: 2, max: 3 }), id: faker.string.uuid() };
}

export function fakeImage() {
	return {
		id: faker.string.uuid(),
		caption: faker.lorem.words({ min: 4, max: 10 }),
		author: faker.person.fullName(),
		url: faker.image.url({ width: 1920, height: 1080 }),
		creditType: 'Fotó',
		sourceLink: null,
		width: 1920,
		height: 1080,
		variations: [],
	};
}
// [
// 	{
// 			"children": [
// 					{
// 							"text": ""
// 					}
// 			],
// 			"relationTo": "media",
// 			"type": "upload",
// 			"value": {
// 					"id": "660c5e5a7060d93bd203746c",
// 					"alt": "zsz",
// 					"filename": "3497853.jpg",
// 					"mimeType": "image/jpeg",
// 					"filesize": 461926,
// 					"width": 2000,
// 					"height": 1500,
// 					"createdAt": "2024-04-02T19:36:58.270Z",
// 					"updatedAt": "2024-04-02T19:36:58.270Z",
// 					"url": "/media/3497853.jpg"
// 			},
// 			"textAlign": "center"
// 	},
// 	{
// 			"children": [
// 					{
// 							"children": [
// 									{
// 											"text": "Itt egy lista"
// 									}
// 							],
// 							"type": "li"
// 					},
// 					{
// 							"type": "li",
// 							"children": [
// 									{
// 											"text": "mindenfele"
// 									}
// 							]
// 					},
// 					{
// 							"type": "li",
// 							"children": [
// 									{
// 											"text": "elemmel"
// 									}
// 							]
// 					}
// 			],
// 			"type": "ul"
// 	},
// ]

export function fakeTextNode() {
	return {
		text: faker.lorem.words({ min: 1, max: 5 }),
		italic: faker.datatype.boolean(0.25),
		bold: faker.datatype.boolean(0.25),
	};
}

export function fakeParagraph() {
	return {
		children: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, fakeTextNode),
		textAlign: faker.helpers.arrayElement(['left', 'center', 'right']),
	};
}

export function fakeLink() {
	return {
		...fakeParagraph(),
		linkType: 'custom',
		newTab: faker.datatype.boolean(0.5),
		type: 'link',
		url: faker.internet.url(),
	};
}

export function fakeParagraphWithLink() {
	return {
		children: Array.from({ length: faker.number.int({ min: 1, max: 6 }) }, () => {
			return faker.helpers.arrayElement([fakeLink, fakeParagraph])();
		}),
	};
}

export function fakeHeading() {
	return {
		...fakeParagraph(),
		type: `h${faker.number.int({ min: 1, max: 6 })}`,
	};
}

export function fakeBlockquote() {
	return {
		...fakeParagraph(),
		type: 'blockquote',
	};
}

export function fakeRichTextBlock() {
	return {
		type: 'richTextBlock',
		richText: Array.from({ length: faker.number.int({ min: 1, max: 6 }) }, () => {
			return faker.helpers.arrayElement([
				fakeHeading,
				fakeParagraph,
				fakeParagraphWithLink,
				fakeLink,
			])();
		}),
	};
}
export function fakeMediaBlock() {
	return {
		type: 'mediaBlock',
		media: fakeImage(),
	};
}

export function fakeBlocks() {
	return Array.from({ length: faker.number.int({ min: 3, max: 8 }) }, () => {
		return faker.helpers.arrayElement([fakeRichTextBlock, fakeMediaBlock])();
	});
}

export function fakeContent() {
	const category = fakeTaxonomy();
	const author = fakeAuthor();
	const date = faker.date.past();
	return {
		id: faker.string.uuid(),
		slug: fakeSlug(),
		title: fakeTitle(),
		excerpt: faker.lorem.paragraph({ min: 2, max: 6 }),
		publishedAt: date,
		createdAt: date,
		updatedAt: date,
		tags: [],
		categories: [
			{
				name: category.name,
				slug: category.slug,
				id: category.id,
			},
		],
		authors: [
			{
				name: author.name,
				slug: author.slug,
				id: author.id,
			},
		],
		featuredImage: fakeImage(),
		blocks: fakeBlocks(),
	};
}

export function fakeContents() {
	// TODO: pager
	const contentCount = faker.number.int({ min: 5, max: 10 });

	return {
		docs: Array.from({ length: contentCount }, fakeContent),
		hasNextPage: false,
		hasPrevPage: false,
		limit: 10,
		nextPage: null,
		offset: null,
		page: 1,
		pagingCounter: 1,
		prevPage: null,
		totalDocs: contentCount,
		totalPages: 1,
	};
}
