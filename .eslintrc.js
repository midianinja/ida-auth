module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'consistent-return': 0,
        'no-underscore-dangle': 0,
        'no-await-in-loop': 1,
        'import/prefer-default-export': 0,
        'func-names': 0,
        'camelcase': 0,
        'no-param-reassign': 0,
        'no-unused-vars': ['error', { "args": "none" }],
    },
  };
  