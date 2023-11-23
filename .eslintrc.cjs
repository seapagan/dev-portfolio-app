module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "build"],
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react-refresh", "simple-import-sort", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-duplicates": "error",
    "import/first": "error",
    "import/newline-after-import": [
      "error",
      {
        "count": 1,
      },
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "warn",
      80,
      2,
      {
        "ignoreComments": false,
        "ignoreStrings": false,
        "ignoreUrls": true,
      },
    ],
    "no-unused-vars": "warn",
    "quotes": ["error", "double"],
    "react/prop-types": [
      "error",
      {
        "skipUndeclared": false,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "semi": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["react-app-polyfill"],
          ["^react$", "^next"],
          ["^react-dom", "^react-router-dom"],
          // Packages starting with `@`
          ["^@"],
          // Packages starting with `~`
          ["^~"],
          // packages starting with alpha chars
          ["^[a-z]"],
          // Side effect imports
          ["^\\u0000"],
          // internal Components
          ["^components/", "^services/", "^constants"],
          // Imports starting with `../`
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Imports starting with `./`
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports
          ["^.+\\.s?css$"],
        ],
      },
    ],
  },
};
