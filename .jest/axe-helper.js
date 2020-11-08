const {configureAxe} = require('jest-axe');

const axe = configureAxe({
  rules: {
    // ignore all landmark region tests for jest
    region: {enabled: false},
  },
});

module.exports = axe;
