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
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    // monkey-patch introduced for @testing-library/user-event to improve asynchronous test readability
    // taken from this github issue: https://github.com/testing-library/user-event/issues/938#issuecomment-1111976312
    '^@testing-library/user-event$': '<rootDir>/tools/test/act-user-event.ts',
    '^@testing-library/real-user-event$': require.resolve('@testing-library/user-event'),
    '^@testing-library/react$': '<rootDir>/tools/test/react-testing-library.ts',
    '^@testing-library/real-react$': require.resolve('@testing-library/react'),
    '^react-dom/client$': '<rootDir>/tools/test/react-dom-client.ts',
    '^real-react-dom/client$': require.resolve('react-dom/client'),
  },
  transformIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
};
