module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 6,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    rules: {
        quotes: ['error', 'single']
    }
};