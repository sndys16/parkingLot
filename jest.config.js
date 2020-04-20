module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  transformIgnorePatterns: ['/node_modules/(?!element-ui)'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{vue}', '!**/node_modules/**', '!<rootDir>/dist/**',
    '!<rootDir>/src/plugins/**', '!<rootDir>/tests/unit/**'],
  coverageReporters: ['lcov', 'text-summary'],
};
