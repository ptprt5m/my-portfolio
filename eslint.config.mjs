import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Настройки для всех файлов
  { files: ["**/*.{js,mjs,cjs,jsx,tsx}"] },

  // Применение правила semi только для ts и tsx файлов
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@/semi": [
        "error",
        "never", // Запрещает точки с запятой в конце
      ],
    },
  },

  // Настройки для React
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Другие настройки
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
