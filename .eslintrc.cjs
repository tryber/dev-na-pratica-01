module.exports = {
    root: true,
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', "vite.config.ts"],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        project: './tsconfig.json',
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react-refresh',
        'react'
    ],
    'rules': {
        'react/react-in-jsx-scope': 0,
        // 'indent': [
        //     'error',
        //     4
        // ],
        // 'linebreak-style': [
        //     'error',
        //     'unix'
        // ],
        // 'quotes': [
        //     'error',
        //     'single'
        // ],
        // 'semi': [
        //     'error',
        //     'always'
        // ],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    }
};
