module.exports = {
  verbose: true,
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },

  testMatch: ['**/test/**/*.test.[jt]s?(x)']
};
