

module.exports = {
    testEnvironment: 'node',
    testMatch: ['test/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.js', '!jest.config.js', '!test/*.js', '!coverage/**/*.js'],
    coverageReporters: ['text', ['lcov', { projectRoot: '../../../' }]],
    moduleDirectories: ['node_modules', 'nodejs/node_modules','lambda/aws-sdk-layer/node_modules', 'lambda/aws-sdk-layer/nodejs/node_modules'],
    moduleNameMapper: {
        "../../../../../../../../../../opt/lib/query.js": "<rootDir>/test/__mocks__/esQueryMock.js"
      },
    modulePaths: [
        "<rootDir>/../qnabot-common-layer/",
        "<rootDir>/../aws-sdk-layer/"
    ]
};
