import type { ColorOptions, ColorThemes, CustomColorThemes, M3Module } from './types';
import defaultThemes from './tokens/sys/color';
import type { CSSRuleObject } from 'tailwindcss/types/config';
import hexToRgb from './utils/hexToRgb';
import { toKebabCase } from '@packages/toolbox/string/toKebabCase';

function toRgbWithToken(tokenName: string) {
	// This check is needed for plugin development, state-layers don't work otherwise
	return (extras: any) => {
		if (extras && extras.opacityValue !== undefined) {
			return `rgb(var(--m3-color-${tokenName}) / ${extras.opacityValue})`;
		}
		return `rgb(var(--m3-color-${tokenName}))`;
	};
}

// Record<string, any> is the type used by Tailwind.
function transformTokensToColorValues(materialColors: Record<string, any>, currentToken: string) {
	const token = toKebabCase(currentToken);
	materialColors[token] = toRgbWithToken(token);
	return materialColors;
}

function getThemeColorsCss(themes: ColorThemes, themeName: string, colorScheme: 'light' | 'dark') {
	const colors: CSSRuleObject = {};
	Object.keys(defaultThemes[colorScheme]).forEach((token) => {
		colors[`--m3-color-${toKebabCase(token)}`] = hexToRgb(
			themes[themeName]?.[colorScheme]?.[token] || defaultThemes[colorScheme][token] || '#ffffff',
		);
	});
	return colors;
}

const PREFERS_LIGHT = '@media (prefers-color-scheme: light)';
const PREFERS_DARK = '@media (prefers-color-scheme: dark)';

const getCustomColorsCss = (
	customColors: CustomColorThemes = {},
	scheme: 'light' | 'dark' = 'light',
) => {
	const customColorsCss: Record<string, any> = {};
	for (const [customColor, customColorTheme] of Object.entries(customColors || {})) {
		const _customColor = toKebabCase(customColor);
		customColorsCss[`--m3-custom-color-${_customColor}`] = hexToRgb(
			customColorTheme[scheme]?.color || '#ffffff',
		);
		customColorsCss[`--m3-custom-color-${_customColor}-container`] = hexToRgb(
			customColorTheme[scheme]?.colorContainer || '#ffffff',
		);
		customColorsCss[`--m3-custom-color-on-${_customColor}`] = hexToRgb(
			customColorTheme[scheme]?.onColor || '#ffffff',
		);
		customColorsCss[`--m3-custom-color-on-${_customColor}-container`] = hexToRgb(
			customColorTheme[scheme]?.onColorContainer || '#ffffff',
		);
	}
	return customColorsCss;
};

function toThemeCss(colorOptions: ColorOptions) {
	const themesCss: CSSRuleObject = {
		[PREFERS_LIGHT]: {},
		[PREFERS_DARK]: {},
	};

	for (const themeName of Object.keys(colorOptions.themes)) {
		const lightTheme = getThemeColorsCss(colorOptions.themes, themeName, 'light');
		const darkTheme = getThemeColorsCss(colorOptions.themes, themeName, 'dark');
		const lightCustomColors = getCustomColorsCss(colorOptions.customColors, 'light');
		const darkCustomColors = getCustomColorsCss(colorOptions.customColors, 'dark');
		(themesCss[PREFERS_LIGHT] as CSSRuleObject)[`.m3-theme-${themeName}`] = {
			...lightTheme,
			...lightCustomColors,
		};
		(themesCss[PREFERS_DARK] as CSSRuleObject)[`.m3-theme-${themeName}`] = {
			...darkTheme,
			...darkCustomColors,
		};
		themesCss[`.m3-theme-${themeName}-light`] = { ...lightTheme, ...lightCustomColors };
		themesCss[`.m3-theme-${themeName}-dark`] = { ...darkTheme, ...darkCustomColors };
	}
	return themesCss;
}

const m3Module: M3Module = (options) => {
	return {
		setCss(api) {
			if (options) {
				api.addBase(toThemeCss(options?.colors));
			}
		},
		config() {
			const colorExtend = {
				theme: {
					extend: {
						colors: Object.keys(defaultThemes.light).reduce(transformTokensToColorValues, {}),
						opacity: {
							8: '0.08',
							12: '0.12',
							15: '0.15',
							16: '0.16',
							38: '0.18',
						},
					},
				},
			};
			if (options?.colors?.customColors) {
				Object.keys(options.colors.customColors).forEach((colorName) => {
					const _colorName = toKebabCase(colorName);
					colorExtend.theme.extend.colors[_colorName] = toRgbWithToken(_colorName);
					colorExtend.theme.extend.colors[`${_colorName}-container`] = toRgbWithToken(
						`${_colorName}-container`,
					);
					colorExtend.theme.extend.colors[`on-${_colorName}`] = toRgbWithToken(`on-${_colorName}`);
					colorExtend.theme.extend.colors[`on-${_colorName}-container`] = toRgbWithToken(
						`on-${_colorName}-container`,
					);
				});
			}
			return colorExtend;
		},
	};
};

export default m3Module;
