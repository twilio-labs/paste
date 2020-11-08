const Enzyme = require('enzyme');
const TestingLibrary = require('@testing-library/react');
const Adapter = require('enzyme-adapter-react-16');
require('@testing-library/jest-dom');
const {toHaveNoViolations} = require('jest-axe');
expect.extend(toHaveNoViolations);
TestingLibrary.configure({computedStyleSupportsPseudoElements: false});
Enzyme.configure({adapter: new Adapter()});
