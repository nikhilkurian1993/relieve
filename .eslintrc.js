module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint', 'unused-imports'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'no-unused-vars': 'off',
    endOfLine: 'off',
    'react/no-unknown-property': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'consistent-return': 'off',
    'import/no-anonymous-default-export': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'prettier/prettier': 'warn',
    //
  },
};
