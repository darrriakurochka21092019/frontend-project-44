export default {
  testEnvironment: 'node',
  transform: {
      '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};