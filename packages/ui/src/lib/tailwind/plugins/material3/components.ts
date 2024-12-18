import type { M3Module } from './types';

const m3Module: M3Module = () => {
	return {
		setCss(api) {
			api.addBase({
				':root': {
					'--m3-component-button-shape': 'var(--m3-style-shape-full)',
				},
			});
		},
	};
};

export default m3Module;
