const path = require("path");

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      configFile: path.resolve(__dirname, "../babel.config.json")
    }
  },
  env: {
    node: true,
    browser: true
  },
  rules: {
    "react/prop-types": "off",
    "import/no-unresolved": [2, { ignore: ["^(all|part):"] }]
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};
