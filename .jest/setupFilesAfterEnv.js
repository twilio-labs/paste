const {matchers: jestEmotionMatchers} = require('@emotion/jest');
require('@testing-library/jest-dom');
const {toHaveNoViolations} = require('jest-axe');
expect.extend(toHaveNoViolations);
expect.extend(jestEmotionMatchers);
