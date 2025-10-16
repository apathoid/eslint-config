import globals from "globals";
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin'


export default defineConfig([
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } }
    },
    {
        files: ["**/*.js"],
        plugins: { js },
        extends: ["js/recommended"]
    },
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            "semi": "off",
            "@stylistic/semi": "error"
        }
    },
    tseslint.configs.recommended,
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                ecmaFeatures: {
                    jsx: true
                }
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", {
                "vars": "local",
                "varsIgnorePattern": "^_",
                "argsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
                "caughtErrors": "none"
            }],
        },
    },
    {
        rules: {
            "no-empty": ["error", { "allowEmptyCatch": true }],
            "no-param-reassign": "error",
            "no-unsafe-optional-chaining": "warn",
            "prefer-const": ["warn", { "destructuring": "all" }],
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
            "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
        }
    }
]);
