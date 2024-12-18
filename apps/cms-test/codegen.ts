import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
	schema: [process.env.PUBLIC_JERBO_GATEWAY_URL || ''],
	documents: ['src/lib/gql/queries/**/*.ts'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'src/lib/gql/__generated__/': {
			preset: 'client',
			config: {
				useTypeImports: true,
			},
			presetConfig: {
				fragmentMasking: false,
			},
		},
		'src/lib/gql/__generated__/graphql.schema.json': {
			plugins: ['introspection'],
			config: {
				minify: true,
			},
		},
	},
};

export default config;
