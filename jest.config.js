const TestTheme = require('./.jest/globals/TestTheme');

module.exports = {
  globals: {
    TestTheme,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)?$',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/dist/',
    '<rootDir>/packages/(?:.+?)/.cache/',
    '<rootDir>/cypress/',
    '<rootDir>/packages/paste-cra-template/',
    '<rootDir>/apps/',
  ],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/dist/',
    '<rootDir>/packages/(?:.+?)/cjs/',
    '<rootDir>/packages/(?:.+?)/esm/',
    '<rootDir>/apps/',
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
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
};
