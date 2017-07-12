module.exports = {
  extends: "eslint-config-airbnb-base",
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    $: true
  },
  rules: {
    'func-names': 0,
    'one-var': 0,
    'comma-dangle': 0
  }
};
