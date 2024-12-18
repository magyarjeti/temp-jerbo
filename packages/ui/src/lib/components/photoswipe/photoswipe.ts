import type { SlideData } from 'photoswipe';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import 'photoswipe/style.css';

const photoswipeContextKey = Symbol('photoswipe');

type Gallery = SlideData[];
type PhotoswipeContext = { gallery: Gallery; openPswp?: (index: number) => void };

export const setPhotoswipeContext = (gallery: Gallery = []) => {
	const photoswipeStore = writable<PhotoswipeContext>({
		gallery,
	});
	setContext(photoswipeContextKey, photoswipeStore);
	return photoswipeStore;
};

export const getPhotoswipeContext = () => {
	return getContext<Writable<PhotoswipeContext> | undefined>(photoswipeContextKey);
};
