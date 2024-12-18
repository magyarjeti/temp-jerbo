import type { Config, PluginAPI } from 'tailwindcss/types/config';

// export type HexColor = `#${string}`;
export type HexColor = string;

export interface ShapeScales {
	none?: string;
	extraSmall?: string;
	small?: string;
	medium?: string;
	large?: string;
	extraLarge?: string;
	full?: string;
}

export interface BaseColorTheme {
	[key: string]: HexColor;
}

export interface ColorTheme extends BaseColorTheme {
	scrim: HexColor;
	primary: HexColor;
	primaryContainer: HexColor;
	onPrimary: HexColor;
	onPrimaryContainer: HexColor;
	inversePrimary: HexColor;
	primaryFixed: HexColor;
	primaryFixedDim: HexColor;
	onPrimaryFixed: HexColor;
	onPrimaryFixedVariant: HexColor;
	secondary: HexColor;
	secondaryContainer: HexColor;
	onSecondary: HexColor;
	onSecondaryContainer: HexColor;
	secondaryFixed: HexColor;
	secondaryFixedDim: HexColor;
	onSecondaryFixed: HexColor;
	onSecondaryFixedVariant: HexColor;
	tertiary: HexColor;
	onTertiary: HexColor;
	tertiaryContainer: HexColor;
	onTertiaryContainer: HexColor;
	tertiaryFixed: HexColor;
	tertiaryFixedDim: HexColor;
	onTertiaryFixed: HexColor;
	onTertiaryFixedVariant: HexColor;
	surface: HexColor;
	surfaceVariant: HexColor;
	onSurface: HexColor;
	onSurfaceVariant: HexColor;
	inverseSurface: HexColor;
	inverseOnSurface: HexColor;
	surfaceTint: HexColor;
	surfaceDim: HexColor;
	surfaceBright: HexColor;
	surfaceContainerLowest: HexColor;
	surfaceContainerLow: HexColor;
	surfaceContainer: HexColor;
	surfaceContainerHigh: HexColor;
	surfaceContainerHighest: HexColor;
	background: HexColor;
	onBackground: HexColor;
	outline: HexColor;
	outlineVariant: HexColor;
	error: HexColor;
	onError: HexColor;
	errorContainer: HexColor;
	onErrorContainer: HexColor;
	shadow: HexColor;
}

export interface CustomColorTheme {
	color: HexColor;
	colorContainer: HexColor;
	onColor: HexColor;
	onColorContainer: HexColor;
}

export type ColorThemes = {
	[key: string]: {
		light?: Partial<ColorTheme>;
		dark?: Partial<ColorTheme>;
		lightContrast?: Partial<ColorTheme>;
		darkContrast?: Partial<ColorTheme>;
		lightHighContrast?: Partial<ColorTheme>;
		darkHighContrast?: Partial<ColorTheme>;
	};
};

export type CustomColorThemes = {
	[key: string]: {
		light?: Partial<CustomColorTheme>;
		dark?: Partial<CustomColorTheme>;
		lightContrast?: Partial<CustomColorTheme>;
		darkContrast?: Partial<CustomColorTheme>;
		lightHighContrast?: Partial<CustomColorTheme>;
		darkHighContrast?: Partial<CustomColorTheme>;
	};
};

export interface ColorOptions {
	themes: ColorThemes;
	customColors?: CustomColorThemes;
}

export interface TypoDefinition {
	fontFamily: string;
	fontWeight: string;
	fontSize: string;
	lineHeight?: string;
	letterSpacing?: string;
}

export interface TypoOptions {
	displayLarge: TypoDefinition;
	displayMedium: TypoDefinition;
	displaySmall: TypoDefinition;
	headlineLarge: TypoDefinition;
	headlineMedium: TypoDefinition;
	headlineSmall: TypoDefinition;
	titleLarge: TypoDefinition;
	titleMedium: TypoDefinition;
	titleSmall: TypoDefinition;
	labelLarge: TypoDefinition;
	labelMedium: TypoDefinition;
	labelSmall: TypoDefinition;
	bodyLarge: TypoDefinition;
	bodyMedium: TypoDefinition;
	bodySmall: TypoDefinition;
	bodySerifLarge: TypoDefinition;
	bodySerifMedium: TypoDefinition;
	bodySerifSmall: TypoDefinition;
	[key: string]: TypoDefinition;
}

export interface PluginOptions {
	colors: ColorOptions;
	shape?: ShapeScales;
	typo?: TypoOptions;
}

export interface StateProps {
	color: string;
	opacity?: string;
}

export interface StateToColorMap {
	hover?: StateProps;
	focus?: StateProps;
}

export type M3Module = (options?: PluginOptions) => {
	setCss: (api: PluginAPI) => void;
	config?: () => Partial<Config>;
};
