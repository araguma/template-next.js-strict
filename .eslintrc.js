/* eslint-env node */

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'next/core-web-vitals',
        'prettier',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    root: true,
    overrides: [
        {
            extends: ['plugin:@typescript-eslint/disable-type-checked'],
            files: ['*.js'],
        },
    ],
    rules: {},
}
