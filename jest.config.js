

export default  {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.jest.json'
        }
      },
  moduleNameMapper: {
    "^@contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@API/(.*)$" : "<rootDir>/src/services/API/$1",
    "^@services/(.*)$":"<rootDir>/src/services/$1",
    "^@features/(.*)$":"<rootDir>/src/features/$1",
    "^@components/(.*)$":"<rootDir>/src/components/$1",
    "^@models/(.*)$": "<rootDir>/src/models/$1",
    "\\.(css|less|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
};
