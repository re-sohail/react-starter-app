// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import prettierConfig from "eslint-config-prettier";

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // React recommended rules
  {
    files: ["src/**/*.{js,jsx}"],
    ignores: ["node_modules/", "build/", "dist/", "public/", "**/*.test.js"],

    plugins: {
      react: reactPlugin,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
    rules: {
      // React rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off",

      // React Refresh rule
      "react-refresh/only-export-components": "warn",
    },
  },

  // Prettier compatibility (add this last)
  {
    ignores: ["dist", "node_modules"],
    rules: {
      // Add any Prettier conflicts to disable here
    },
  },

  prettierConfig,
];
