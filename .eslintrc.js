module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  'rules': {
    'comma-dangle': [2, 'always-multiline'],
    indent: [2, 2],
    eqeqeq: 2,
  },
  plugins: [
    'react'
  ],
}
