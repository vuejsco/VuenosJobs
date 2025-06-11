// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-plugin-prettier';

export default withNuxt(
	// Your custom configs here
	{
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
	{
		plugins: {
			prettier,
		},
	}
);
