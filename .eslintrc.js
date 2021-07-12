module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    quotes: [2, "double", { allowTemplateLiterals: true }],
    "no-restricted-globals": [0],
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-alert": "off",
    "consistent-return": "off",
    "no-prototype-builtins": "off",
  },
};
