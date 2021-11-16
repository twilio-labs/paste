const {resolve} = require('fs');
const TestTheme = require('./.jest/globals/TestTheme');

module.exports = {
  globals: {
    TestTheme,
  },
  rootDir: './packages',
  roots: [
    '<rootDir>/paste-core/components/tooltip',
    '<rootDir>/paste-core/components/menu',
    '<rootDir>/paste-core/components/modal',
    '<rootDir>/paste-core/components/popover',
    '<rootDir>/paste-core/components/form-pill-group',
    '<rootDir>/paste-core/components/toast',
    '<rootDir>/paste-core/components/tooltip',
    '<rootDir>/paste-core/primitives/modal-dialog',
    '<rootDir>/paste-core/primitives/non-modal-dialog',
    '<rootDir>/paste-core/primitives/tabs',
    '<rootDir>/paste-core/primitives/tooltip',
  ],
  verbose: true,
  silent: process.env.CI ? true : false,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/(?:.+?)/dist/',
    '<rootDir>/(?:.+?)/.cache/',
    '../cypress/',
    '<rootDir>/paste-cra-template/',
    '<rootDir>/components/(?!(disclosure, tooltip, menu).*)/*',
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
