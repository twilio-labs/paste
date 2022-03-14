const {matchers: jestEmotionMatchers} = require('jest-emotion');
import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
expect.extend(jestEmotionMatchers);
