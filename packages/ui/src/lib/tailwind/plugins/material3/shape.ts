import type { M3Module, ShapeScales } from './types';
import type { PluginAPI } from 'tailwindcss/types/config';
import { toKebabCase } from '@packages/toolbox/string/toKebabCase';

const defaultOptions = (api: PluginAPI): ShapeScales => {
	return {
		none: '0',
		extraSmall: api.theme('spacing.1'),
		small: api.theme('spacing.2'),
		medium: api.theme('spacing.3'),
		large: api.theme('spacing.4'),
		extraLarge: api.theme('spacing.7'),
		full: '9999px',
	};
};

const m3Module: M3Module = (options) => {
	return {
		setCss(api) {
			const shapeScales = { ...defaultOptions(api), ...options?.shape };
			// CSSRuleObject type doesn't work properly.
			const shapeUtils: Record<string, any> = {};
			const shapeBase: Record<string, any> = {
				':root': {},
			};
			for (const [scaleName, scaleValue] of Object.entries(shapeScales)) {
				const _scaleName = toKebabCase(scaleName);
				const cssPropName = `--m3-style-shape-${_scaleName}`;
				shapeBase[':root'][cssPropName] = scaleValue;
				const cssProp = `var(${cssPropName})`;
				shapeUtils[`.shape-${_scaleName}`] = { borderRadius: cssProp };
				shapeUtils[`.shape-${_scaleName}-top`] = {
					borderRadius: `${cssProp} ${cssProp} 0 0`,
				};
				shapeUtils[`.shape-${_scaleName}-bottom`] = {
					borderRadius: `0 0 ${cssProp} ${cssProp}`,
				};
				shapeUtils[`.shape-${_scaleName}-start`] = {
					borderRadius: `${cssProp} 0 0 ${cssProp}`,
				};
				shapeUtils[`.shape-${_scaleName}-end`] = {
					borderRadius: `0 ${cssProp} ${cssProp} 0`,
				};
			}
			api.addBase(shapeBase);
			api.addUtilities(shapeUtils);
		},
	};
};

export default m3Module;
