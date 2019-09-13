module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      stringifyContentPathRegex: '\\.html$'
    }
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"]
}