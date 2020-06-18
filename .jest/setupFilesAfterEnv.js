const emotion = require('emotion');
const {createSerializer} = require('jest-emotion');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const {toHaveNoViolations} = require('jest-axe');
expect.extend(toHaveNoViolations);

expect.addSnapshotSerializer(createSerializer(emotion));
Enzyme.configure({adapter: new Adapter()});
