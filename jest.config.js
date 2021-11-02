const TestTheme = require('./.jest/globals/TestTheme');

module.exports = {
  globals: {
    TestTheme,
  },
  verbose: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/dist/',
    '<rootDir>/packages/(?:.+?)/.cache/',
    '<rootDir>/cypress/',
    '<rootDir>/packages/paste-cra-template/',
  ],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/dist/',
    '<rootDir>/packages/(?:.+?)/cjs/',
    '<rootDir>/packages/(?:.+?)/esm/',
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
  resolver: '<rootDir>/.jest/resolver.js',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/.jest/transform-typescript.js',
    '^.+\\.js?$': '<rootDir>/.jest/transform-esm.js',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.js'],
  snapshotSerializers: ['jest-emotion'],
};

if (process.env.USE_REACT_16 === 'true') {
  module.exports.cacheDirectory = '.jest-cache-react-16';
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    '^react-dom((\\/.*)?)$': 'react-dom-16$1',
    '^react((\\/.*)?)$': 'react-16$1',
  };
}
