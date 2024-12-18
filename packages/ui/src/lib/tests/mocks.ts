import { vi } from 'vitest';

const ResizeObserver = vi.fn(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
}));
vi.stubGlobal('ResizeObserver', ResizeObserver);
