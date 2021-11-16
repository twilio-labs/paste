const TestTheme = require('./.jest/globals/TestTheme');

module.exports = {
  globals: {
    TestTheme,
  },
  rootDir: './packages',
  verbose: true,
  silent: process.env.CI ? true : false,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/(?:.+?)/dist/',
    '<rootDir>/(?:.+?)/.cache/',
    '../cypress/',
    '<rootDir>/paste-cra-template/',
  ],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/(?:.+?)/dist/',
    '<rootDir>/(?:.+?)/.cache/',
    '../cypress/',
    '<rootDir>/paste-cra-template/',
  ],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: ['node_modules/'],
  resolver: '../.jest/resolver.js',
  transform: {
    '^.+\\.tsx?$': '../.jest/transform-typescript.js',
    '^.+\\.js?$': '../.jest/transform-esm.js',
  },
  setupFilesAfterEnv: ['../.jest/setupFilesAfterEnv.js'],
  snapshotSerializers: ['jest-emotion'],
};

if (process.env.USE_REACT_16 === 'true') {
  module.exports.cacheDirectory = '../.jest-cache-react-16';
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    '^react-dom((\\/.*)?)$': 'react-dom-16$1',
    '^react((\\/.*)?)$': 'react-16$1',
  };
}
