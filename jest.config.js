module.exports = {
  moduleNameMapper: {
    '^@project/root/(.*)': '<rootDir>/src/app/$1',
    '^@project/store/(.*)': '<rootDir>/src/app/store/$1',
    '^@project/configs/(.*)': '<rootDir>/src/app/configs/$1',
    '^@project/env/(.*)': '<rootDir>/src/environments/$1',
    '^@project/core/(.*)': '<rootDir>/src/app/core/$1',
    '^@project/modules/(.*)': '<rootDir>/src/app/modules/$1',
    '^@project/shared/(.*)': '<rootDir>/src/app/shared/$1',
    '^@project/tests/(.*)': '<rootDir>/src/tests/$1'
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  cacheDirectory: '<rootDir>/node_modules/jest-test-cache',
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    'global': {
      'branches': 100,
      'functions': 100,
      'lines': 100,
      'statements': 100
    }
  },
  coverageDirectory: 'coverage/Testing101',
  coverageReporters: [["json", {file: 'coverage.json'}], "lcov", "text"],
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ]
};
