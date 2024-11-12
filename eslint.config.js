import globals from "globals"; 
import pluginJs from "@eslint/js"; 

/** @type {import('eslint').Linter.Config[]} */ 
export default [ 
  { 
    languageOptions: { 
      globals: { 
        ...globals.browser, // Существующие глобальные переменные для браузера
        ...globals.jest // Добавьте глобальные переменные для Jest
      } 
    } 
  }, 
  pluginJs.configs.recommended, 
];
