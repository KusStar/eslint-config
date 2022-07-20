module.exports = {
  extends: [
    '@kuss/eslint-config-basic',
    '@kuss/eslint-config-ts',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
