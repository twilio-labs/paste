const {matchers: jestEmotionMatchers} = require('jest-emotion');
import '@testing-library/jest-dom';
expect.extend(jestEmotionMatchers);
