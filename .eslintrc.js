"use strict";

module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
