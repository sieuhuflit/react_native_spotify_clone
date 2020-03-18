module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?)$',
  setupFiles: [
    './src/setupTests.js',
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    './src/components/**/*.{js,jsx}',
    './src/screens/**/*.{js,jsx}',
    './src/data/**/*.{js,jsx}',
    '!**/index.js',
    '!**/styles.js'
  ],
  coveragePathIgnorePatterns: ['<rootdir>/node_modules/'],
  verbose: true,
  collectCoverage: false,
  coverageReporters: ['json-summary', 'json', 'lcov', 'html']
};
