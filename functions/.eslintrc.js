module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "google",
    ],
    parserOptions: {
        sourceType: "module",
        parser: "babel-eslint",
        ecmaVersion: 8,
    },
    rules: {
        'quotes': ["off", "double"],
        'indent': ["error", 4],
        'max-len': ["warn", {"code": 80}],
    },
};
