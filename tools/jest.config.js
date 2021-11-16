module.exports = {
  verbose: true,
  silent: process.env.CI === 'true' ? true : false,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)?$',
  cacheDirectory: '<rootDir>/.jest-cache',
  snapshotSerializers: ['jest-emotion'],
  transform: {
    '^.+\\.tsx?$': '<rootDir>/../.jest/transform-typescript.js',
    '^.+\\.js?$': '<rootDir>/../.jest/transform-esm.js',
  },
  transformIgnorePatterns: ['node_modules/'],
};
