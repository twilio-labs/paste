const {serializer} = require('jest-emotion');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

expect.addSnapshotSerializer(serializer);
Enzyme.configure({adapter: new Adapter()});
