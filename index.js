import globals from 'globals';

import js from '@eslint/js';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';


export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            "semi": "error",
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
            "no-trailing-spaces" : "warn",
            "function-paren-newline" : ["warn", "multiline-arguments"],
            "dot-location" : "warn",
            "no-tabs" : "warn",
            "no-multi-spaces" : "warn",
            "key-spacing" : "warn",
            "block-spacing" : "warn",
            "curly" : "warn",
            "nonblock-statement-body-position" : "warn",
            "new-parens" : "warn",
            "comma-style" : "warn",
            "no-self-compare" : "warn",
            "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
        }
    },
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
        rules: {
            ...js.configs.recommended.rules
        }
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "@typescript-eslint": tsPlugin
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
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
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }
];
