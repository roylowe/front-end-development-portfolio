import js from '@eslint/js'
import react from 'eslint-plugin-react'
import globals from 'globals'

export default [
  // base JS Rules
  js.configs.recommended,

  // REact plugin in FLAT cONFIG format
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      // Modern React does NOT require importing React
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
]
