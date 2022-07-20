module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'simple-import-sort',
  ],
  rules: {
    'multiline-comment-style': ['error', 'separate-lines'],
    'space-before-function-paren': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': [
      "error",
      {
        "singleQuote": true,
        "semi": false
      }
    ]
  },
  ignorePatterns: ['**/dist/*', '**/build/*']
}
