module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all',
        quoteProps: 'as-needed',
        bracketSpacing: true,
        arrowParens: 'avoid',
        jsxBracketSameLine: false,
      },
    ],
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-return-assign': 'warn',
    'consistent-return': 'warn',
    'import/no-unresolved': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'import/prefer-default-export': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
  },
};
