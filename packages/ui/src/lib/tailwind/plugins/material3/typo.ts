import plugin from 'tailwindcss/plugin';
import type { M3Module, TypoOptions } from './types';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { CSSRuleObject } from 'tailwindcss/types/config';
import { deepMerge } from '@packages/toolbox/deepMerge';
import { toKebabCase } from '@packages/toolbox/string/toKebabCase';

const sansFonts = defaultTheme.fontFamily.sans.join(',');
const serifFonts = defaultTheme.fontFamily.serif.join(',');
const defaults: TypoOptions = {
	displayLarge: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '40px',
		lineHeight: '120%',
	},
	displayMedium: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '32px',
		lineHeight: '120%',
	},
	displaySmall: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '120%',
	},
	headlineLarge: {
		fontFamily: sansFonts,
		fontWeight: '700',
		fontSize: '60px',
		lineHeight: '120%',
	},
	headlineMedium: {
		fontFamily: sansFonts,
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '120%',
	},
	headlineSmall: {
		fontFamily: sansFonts,
		fontWeight: '700',
		fontSize: '28px',
		lineHeight: '120%',
	},
	titleLarge: {
		fontFamily: sansFonts,
		fontWeight: '700',
		fontSize: '22px',
		lineHeight: '120%',
	},
	titleMedium: {
		fontFamily: sansFonts,
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '120%',
		letterSpacing: '0.1px',
	},
	titleSmall: {
		fontFamily: sansFonts,
		fontWeight: '700',
		fontSize: '16px',
		lineHeight: '120%',
		letterSpacing: '0.2px',
	},
	labelLarge: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '140%',
		letterSpacing: '0.1px',
	},
	labelMedium: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '13px',
		lineHeight: '140%',
		letterSpacing: '0.5px',
	},
	labelSmall: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '12px',
		lineHeight: '140%',
		letterSpacing: '0.5px',
	},
	bodyLarge: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '160%',
		letterSpacing: '0.15px',
	},
	bodyMedium: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '17px',
		lineHeight: '160%',
	},
	bodySmall: {
		fontFamily: sansFonts,
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '160%',
	},
	bodySerifLarge: {
		fontFamily: `'Noto Serif',${serifFonts}`,
		fontWeight: '400',
		fontSize: '21px',
		lineHeight: '150%',
	},
	bodySerifMedium: {
		fontFamily: `'Noto Serif',${serifFonts}`,
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '150%',
	},
	bodySerifSmall: {
		fontFamily: `'Noto Serif',${serifFonts}`,
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '160%',
	},
};

const m3Module: M3Module = (options) => {
	return {
		setCss(api) {
			const typo = deepMerge(defaults, options?.typo || {});
			api.addComponents(
				Object.entries(typo).reduce((css: CSSRuleObject, [typo, typoDefinition]) => {
					// CSSRuleObject can't contain undefined but can contain null properties, this conflicts with TypoDefinition
					css[`.typo-${toKebabCase(typo)}`] = typoDefinition as unknown as CSSRuleObject;
					return css;
				}, {}),
			);
		},
	};
};

export default m3Module;
