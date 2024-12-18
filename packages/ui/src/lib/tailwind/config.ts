import type { Config } from 'tailwindcss';

function setSpacing(size = 4) {
	const spacing: { [key: string | number]: string } = {
		'0': '0',
		'1/2': `${Math.ceil(size / 2)}px`,
	};
	for (let i = 1; i <= 100; i++) {
		spacing[i] = i * size + 'px';
	}
	return spacing;
}

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		container: false,
	},
	theme: {
		spacing: setSpacing(),
		extend: {
			borderWidth: {
				3: '3px',
			},
			minWidth: ({ theme }) => {
				return { ...theme('spacing') };
			},
			minHeight: ({ theme }) => {
				return { ...theme('spacing') };
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/2': '3 / 2',
			},
		},
	},
};

export default config;
