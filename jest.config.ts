import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: [
    "<rootDir>/src/test/setup.ts",
  ],

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json",
      },
    ],
  },

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
  ],

  testMatch: [
    "<rootDir>/src/**/*.test.ts",
    "<rootDir>/src/**/*.test.tsx",
  ],

  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/main.tsx",
  ],

  coverageDirectory: "coverage",

  coverageReporters: [
    "text",
    "text-summary",
    "lcov",
  ],

  clearMocks: true,
};

export default config;