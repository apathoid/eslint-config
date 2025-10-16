"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _globals = _interopRequireDefault(require("globals"));
var _js = _interopRequireDefault(require("@eslint/js"));
var _typescriptEslint = _interopRequireDefault(require("typescript-eslint"));
var _config = require("eslint/config");
var _eslintPlugin = _interopRequireDefault(require("@stylistic/eslint-plugin"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _config.defineConfig)([{
  files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
  languageOptions: {
    globals: {
      ..._globals.default.browser,
      ..._globals.default.node
    }
  }
}, {
  files: ["**/*.js"],
  plugins: {
    js: _js.default
  },
  extends: ["js/recommended"]
}, {
  plugins: {
    '@stylistic': _eslintPlugin.default
  },
  rules: {
    "semi": "off",
    "@stylistic/semi": "error"
  }
}, _typescriptEslint.default.configs.recommended, {
  plugins: {
    '@typescript-eslint': _typescriptEslint.default.plugin
  },
  languageOptions: {
    parser: _typescriptEslint.default.parser,
    parserOptions: {
      projectService: true,
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "local",
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_",
      "caughtErrors": "none"
    }]
  }
}, {
  rules: {
    "no-empty": ["error", {
      "allowEmptyCatch": true
    }],
    "no-param-reassign": "error",
    "no-unsafe-optional-chaining": "warn",
    "prefer-const": ["warn", {
      "destructuring": "all"
    }],
    "no-else-return": "warn",
    "no-case-declarations": "warn",
    "no-useless-escape": "warn",
    "max-len": ["warn", 110],
    "no-return-assign": ["warn", "except-parens"],
    "no-eval": "error",
    "no-var": "warn",
    "no-constructor-return": "warn",
    "no-promise-executor-return": "warn",
    "no-trailing-spaces": "warn",
    "function-paren-newline": ["warn", "multiline-arguments"],
    "dot-location": "warn",
    "no-tabs": "warn",
    "no-multi-spaces": "warn",
    "key-spacing": "warn",
    "block-spacing": "warn",
    "curly": "warn",
    "nonblock-statement-body-position": "warn",
    "new-parens": "warn",
    "comma-style": "warn",
    "no-self-compare": "warn",
    "quotes": ["warn", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }]
  }
}]); // [
//     {
//         languageOptions: {
//             globals: {
//                 ...globals.browser,
//                 ...globals.node
//             }
//         },
//         rules: {
//             "semi": "error",
//             "no-empty": ["error", { "allowEmptyCatch": true }],
//             "no-param-reassign": "error",
//             "no-unsafe-optional-chaining": "warn",
//             "prefer-const": ["warn", { "destructuring": "all" }],
//             "no-else-return": "warn",
//             "no-case-declarations": "warn",
//             "no-useless-escape": "warn",
//             "max-len": ["warn", 110],
//             "no-return-assign": ["warn", "except-parens"],
//             "no-eval": "error",
//             "no-var": "warn",
//             "no-constructor-return": "warn",
//             "no-promise-executor-return": "warn",
//             "no-trailing-spaces" : "warn",
//             "function-paren-newline" : ["warn", "multiline-arguments"],
//             "dot-location" : "warn",
//             "no-tabs" : "warn",
//             "no-multi-spaces" : "warn",
//             "key-spacing" : "warn",
//             "block-spacing" : "warn",
//             "curly" : "warn",
//             "nonblock-statement-body-position" : "warn",
//             "new-parens" : "warn",
//             "comma-style" : "warn",
//             "no-self-compare" : "warn",
//             "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
//         }
//     },
//     {
//         files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
//         rules: {
//             ...js.configs.recommended.rules
//         }
//     },
//     {
//         files: ["**/*.ts", "**/*.tsx"],
//         plugins: {
//             "@typescript-eslint": tsPlugin
//         },
//         rules: {
//             ...tsPlugin.configs.recommended.rules,
//             "@typescript-eslint/no-unused-vars": ["error", {
//                 "vars": "local",
//                 "varsIgnorePattern": "^_",
//                 "argsIgnorePattern": "^_",
//                 "destructuredArrayIgnorePattern": "^_",
//                 "caughtErrors": "none"
//             }],
//             "semi": "off",
//             "@typescript-eslint/semi": "error"
//         },
//         languageOptions: {
//             parser: tsParser,
//             parserOptions: {
//                 ecmaFeatures: {
//                     jsx: true
//                 }
//             }
//         }
//     }
// ];
