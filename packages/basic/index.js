module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  plugins: [
    'simple-import-sort'
  ],
  rules: {
    'multiline-comment-style': ['error'],
    'space-before-function-paren': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  ignorePatterns: ['**/dist/*', '**/build/*']
}
