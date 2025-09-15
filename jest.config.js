export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // needed for React components
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  }
};
