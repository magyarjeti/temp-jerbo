import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import type { MediaItem as MediaItemType } from '@packages/api/sdk/v1/schema';

import MediaItem from './MediaItem.svelte';

test('MediaItem with src', () => {
	const { container } = render(MediaItem, {
		props: { src: 'http://example.com' },
	});
	expect(container).toMatchSnapshot();
});

const mediaItem: MediaItemType = {
	id: 'test-id',
	url: 'http://example.com',
	caption: 'test caption',
	author: 'test-author',
	creditType: 'credit type',
	sourceLink: 'http://example.com/source',
	bucket: {
		id: 'test-bucket-id',
		name: 'Test Bucket Name',
		slug: 'test-bucket-slug',
	},
	width: 3456,
	height: 1234,
	variations: [
		{
			url: 'http://example.com/xxs',
			size: 'xxs',
			width: 123,
			height: 45,
		},
		{
			url: 'http://example.com/xs',
			size: 'xs',
			width: 234,
			height: 56,
		},
		{
			url: 'http://example.com/sm',
			size: 'sm',
			width: 456,
			height: 123,
		},
		{
			url: 'http://example.com/md',
			size: 'md',
			width: 567,
			height: 234,
		},
		{
			url: 'http://example.com/lg',
			size: 'lg',
			width: 1234,
			height: 567,
		},
		{
			url: 'http://example.com/xl',
			size: 'xl',
			width: 2345,
			height: 678,
		},
		{
			url: 'http://example.com/xxl',
			size: 'xl',
			width: 4578,
			height: 2345,
		},
	],
};

test('MediaItem with mediaItem', () => {
	const { container } = render(MediaItem, {
		props: { mediaItem },
	});
	expect(container).toMatchSnapshot();
});
