import { awscdk, javascript } from 'projen';
import { ArrowParens, EndOfLine, TrailingComma } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
	eslint: true,
	author: 'Dany Alawwa',
	authorAddress: 'dalawwa@gmail.com',
	repository: 'https://github.com/dalawwa/cdk-construct-appsync-transformer',
	cdkVersion: '2.93.0',
	defaultReleaseBranch: 'main',
	jsiiVersion: '~5.0.0',
	name: 'appsync-transformer',
	minNodeVersion: '18.12.0',
	prettier: true,
	prettierOptions: {
		settings: {
			arrowParens: ArrowParens.ALWAYS,
			bracketSpacing: true,
			endOfLine: EndOfLine.LF,
			singleQuote: true,
			trailingComma: TrailingComma.ALL,
			useTabs: true,
			tabWidth: 2,
		},
	},
	packageManager: javascript.NodePackageManager.YARN2,
	gitignore: [
		'appsync/*',
		'customtest/*',
		'.pnp.*',
		'.yarn/*',
		'.yarn/cache',
		'!.yarn/patches',
		'!.yarn/plugins',
		'!.yarn/releases',
		'!.yarn/sdks',
		'!.yarn/versions',
	],
	npmignore: [
		'appsync/*',
		'customtest/*',
		'.pnp.*',
		'.yarn/*',
		'.yarn/cache',
		'!.yarn/patches',
		'!.yarn/plugins',
		'!.yarn/releases',
		'!.yarn/sdks',
		'!.yarn/versions',
	],
	projenrcTs: true,
	repositoryUrl: 'https://github.com/dany.alawwa/testProjen.git',
	typescriptVersion: '~5.1.0',
	tsconfig: {
		compilerOptions: {
			lib: ['es2022'],
			alwaysStrict: true,
			declaration: true,
			esModuleInterop: true,
			experimentalDecorators: true,
			inlineSourceMap: true,
			inlineSources: true,
			noEmitOnError: false,
			noFallthroughCasesInSwitch: true,
			noImplicitAny: true,
			noImplicitReturns: true,
			noImplicitThis: true,
			noUnusedLocals: true,
			noUnusedParameters: true,
			resolveJsonModule: true,
			strict: true,
			strictNullChecks: true,
			strictPropertyInitialization: true,
			stripInternal: true,
			target: 'es2022',
		},
	},
	bundledDeps: [
		'graphql-transformer-core',
		'@aws-amplify/amplify-cli-core',
		'graphql@^15.5.0',
		'graphql-auth-transformer',
		'graphql-connection-transformer',
		'graphql-dynamodb-transformer',
		'graphql-function-transformer',
		'graphql-http-transformer',
		'graphql-key-transformer',
		'graphql-mapping-template',
		'graphql-relational-schema-transformer',
		'graphql-transformer-common',
		'graphql-transformer-core',
		'graphql-versioned-transformer',
		// "cloudform-types",
	],
	// description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
	devDeps: [
		'aws-cdk-lib',
		'@typescript-eslint/parser',
		'@typescript-eslint/eslint-plugin',
		'eslint',
	] /* Build dependencies for this module. */,
	// packageName: undefined,  /* The "name" in package.json. */
});

// project.eslint?.addPlugins("@typescript-eslint");

project.eslint?.overrides.push({
	files: ['custom-vtl-transformer.ts'],
	rules: {
		'import/no-extraneous-dependencies': 'off',
	},
});
project.eslint?.overrides.push({
	files: ['SingleFieldMapTransformer.ts'],
	rules: {
		'import/no-extraneous-dependencies': 'off',
	},
});
project.synth();
