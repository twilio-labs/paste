const TestTheme = require("./.jest/globals/TestTheme");

module.exports = {
  globals: {
    TestTheme,
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)?$",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/packages/(?:.+?)/dist/",
    "<rootDir>/packages/(?:.+?)/.cache/",
    "<rootDir>/cypress/",
    "<rootDir>/apps/",
    "<rootDir>/packages/(?:.+?)/.next/",
    "<rootDir>/templates/(?:.+?)/.next/",
    "<rootDir>/packages/(?:.+?)/.netlify/",
  ],
  cacheDirectory: ".jest-cache",
  coverageDirectory: ".jest-coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/packages/(?:.+?)/dist/",
    "<rootDir>/packages/(?:.+?)/cjs/",
    "<rootDir>/packages/(?:.+?)/esm/",
    "<rootDir>/apps/",
  ],
  coverageReporters: ["html", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    // monkey-patch introduced for @testing-library/user-event to improve asynchronous test readability
    // taken from this github issue: https://github.com/testing-library/user-event/issues/938#issuecomment-1111976312
    "^@testing-library/user-event$": "<rootDir>/tools/test/act-user-event.ts",
    "^@testing-library/real-user-event$": require.resolve("@testing-library/user-event"),
    // monkey-patch to help with @testing-library/reat-hooks being deprecated
    // the render hook method is being exported from @testing-library/react in later versions
    "^@testing-library/react$": "<rootDir>/tools/test/react-testing-library.ts",
    "^@testing-library/real-react$": require.resolve("@testing-library/react"),
    // helper method to handle the changes in the react-dom api for react 18
    "^testing-tools/react-dom-create-root$": "<rootDir>/tools/test/react-dom-create-root.ts",
    // jest can't find lerna for the codemod tests, so we need to tell it where to look
    "^lerna$": require.resolve("lerna"),
  },
  transformIgnorePatterns: ["node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "@swc/jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupFilesAfterEnv.js"],
  snapshotSerializers: ["@emotion/jest/serializer"],
};
