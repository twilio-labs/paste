const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const {toHaveNoViolations} = require('jest-axe');
expect.extend(toHaveNoViolations);
Enzyme.configure({adapter: new Adapter()});
