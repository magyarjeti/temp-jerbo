import type {
	PluginOptions,
	TypoOptions,
	ColorThemes,
} from '@packages/ui/tailwind/plugins/material3';
import defaultTheme from 'tailwindcss/defaultTheme';
import { getThemes } from './server/configs';
import { toCamelCase } from '@packages/toolbox/string/toCamelCase';

const themes: ColorThemes = Object.entries(getThemes()).reduce(
	(colorThemes: ColorThemes, [slug, themes]) => {
		colorThemes[slug] = {};
		for (const [themeName, themeColors] of Object.entries(themes)) {
			colorThemes[slug][toCamelCase(themeName) as keyof ColorThemes[string]] = themeColors;
		}
		return colorThemes;
	},
	{},
);

const sansFonts = defaultTheme.fontFamily.sans.join(',');
const serifFonts = defaultTheme.fontFamily.serif.join(',');
const typo: TypoOptions = {
	displayLarge: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '40px',
		lineHeight: '120%',
	},
	displayMedium: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '32px',
		lineHeight: '120%',
	},
	displaySmall: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '120%',
	},
	headlineLarge: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '700',
		fontSize: '60px',
		lineHeight: '120%',
	},
	headlineMedium: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '120%',
	},
	headlineSmall: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '700',
		fontSize: '28px',
		lineHeight: '120%',
	},
	titleLarge: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '700',
		fontSize: '22px',
		lineHeight: '120%',
	},
	titleMedium: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '120%',
		letterSpacing: '0.1px',
	},
	titleSmall: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '700',
		fontSize: '16px',
		lineHeight: '120%',
		letterSpacing: '0.2px',
	},
	labelLarge: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '140%',
		letterSpacing: '0.1px',
	},
	labelMedium: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '13px',
		lineHeight: '140%',
		letterSpacing: '0.5px',
	},
	labelSmall: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '12px',
		lineHeight: '140%',
		letterSpacing: '0.5px',
	},
	bodyLarge: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '160%',
		letterSpacing: '0.15px',
	},
	bodyMedium: {
		fontFamily: `'Roboto',${sansFonts}`,
		fontWeight: '400',
		fontSize: '17px',
		lineHeight: '160%',
	},
	bodySmall: {
		fontFamily: `'Roboto',${sansFonts}`,
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

const materialPluginOtions: PluginOptions = {
	colors: {
		themes,
	},
	typo,
};

export default materialPluginOtions;
