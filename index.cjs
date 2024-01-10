"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _globals = _interopRequireDefault(require("globals"));
var _js = _interopRequireDefault(require("@eslint/js"));
var _eslintPlugin = _interopRequireDefault(require("@typescript-eslint/eslint-plugin"));
var _parser = _interopRequireDefault(require("@typescript-eslint/parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = [{
  files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
  rules: {
    ..._js.default.configs.recommended.rules
  }
}, {
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "@typescript-eslint": _eslintPlugin.default
  },
  rules: {
    ..._eslintPlugin.default.configs.recommended.rules,
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "local",
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_",
      "caughtErrors": "none"
    }],
    "semi": "off",
    "@typescript-eslint/semi": "error"
  },
  languageOptions: {
    parser: _parser.default,
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  }
}, {
  languageOptions: {
    globals: {
      ..._globals.default.browser,
      ..._globals.default.node
    }
  },
  rules: {
    "semi": "error",
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
}];
