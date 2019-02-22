module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['alloy', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-else-return': 'off',
    'consistent-return': 'off',
    'prefer-destructuring': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'prettier/prettier': 'error'
  }
}
