module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'plugin:i18next/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'arrow-parens': ['error', 'always'],
		'@typescript-eslint/naming-convention': 'off',
		'no-unused-vars': 'warn',
		'i18next/no-literal-string': ['error', {markupOnly: true}],
		'@typescript-eslint/no-restricted-imports': 'off',
		'react/no-deprecated': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};

