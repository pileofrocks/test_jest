const path = require('path');
const projectRoot = path.resolve('.');

// `jest` Test Suites must be run serially
//   @see test/helpers/globalLifecycleDatabase.ts
//   @see package.json + 'jest -i ...'
// "why not use { maxConcurrency: 1 } ?"
//   it only relates to `test.concurrent`
// "why not use { maxWorkers: 1 } ?"
//   same as above
// "why not use `jest --runInBand` ?"
//   oh, believe me, i tried ... but the Test Suites still ran in parallel ಠ_ಠ
//   fortunately, `jest -i` does the trick


module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}',
  ],
  coverageDirectory: '<rootDir>/test_reports/',
  coverageReporters: [
    'json',
    'lcov',
    'text',
  ],
  coverageThreshold: {
    global: {
      // ADVICE:
      //   | File      |  % Stmts | % Branch |  % Funcs |  % Lines |
      //   |-----------|----------|----------|----------|----------|
      //   | All files |    95.91 |     90.3 |    94.83 |    95.94 |
      //   ...
      //   you'll get different measurements, possibly on the order of 0.3% lower, in CircleCI
      //   so subtract 0.3, and then another
      //   and 0.5 of wiggle room for TODOs and hacks -- but you GOTTA pay that debt down
      // boiling the frog on this, I will be gradually increasing it:
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: {
        warnOnly: false, // In Case of Emergency Break Glass
      },
    },
  },
  coveragePathIgnorePatterns: [
    "<rootDir>/src/service/autobot/generated.ts",
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
  ],
  preset: 'ts-jest/presets/js-with-ts',
  rootDir: projectRoot,
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/*.spec.{ts,js}',
    '<rootDir>/src/**/*.test.{ts,js}',
    '<rootDir>/test/**/*.{ts,js}',
  ],
  testPathIgnorePatterns: [
    '/test/fixtures/.+$',
    '/test/helpers/.+$',
    '/test/seed/.+$',
  ],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  verbose: true,
};
