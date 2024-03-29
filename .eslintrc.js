module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
		'plugin:i18next/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'arrow-parens': ['error', 'always'],
		'@typescript-eslint/naming-convention': 'off',
		'no-unused-vars': 'warn',
		'i18next/no-literal-string': ['error', {markupOnly: true}],
		'@typescript-eslint/no-restricted-imports': 'off',
		'react/no-deprecated': 'off',
		'object-curly-spacing': 'off',
		quotes: 'double',
	},
	globals: {
		__IS_DEV__: true,
	},
};
