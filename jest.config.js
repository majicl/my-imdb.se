// eslint-disable-next-line import/no-commonjs
module.exports = {
  automock: false,
  browser: true,
  globals: {
    NODE_ENV: 'test'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: ['**/test/**/*.[jt]s?(x)'],
  testURL: 'http://localhost',
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
