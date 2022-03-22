const {matchers: jestEmotionMatchers} = require('jest-emotion');
require('@testing-library/jest-dom');
const {toHaveNoViolations} = require('jest-axe');
expect.extend(toHaveNoViolations);
expect.extend(jestEmotionMatchers);
