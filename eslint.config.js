const js = require('@eslint/js')
const pluginVue = require('eslint-plugin-vue')
const vueParser = require('vue-eslint-parser')
const tsParser = require('@typescript-eslint/parser')
const pluginTypescript = require('@typescript-eslint/eslint-plugin')

module.exports = [
  {
    ignores: ['node_modules/', 'dist/', '.vscode/'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser,
        extraFileExtensions: ['.vue'],
      },
      globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypescript,
      vue: pluginVue,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
]
