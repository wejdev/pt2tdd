module.exports = function (wallaby) {
    return {
        files: ['src/**/*.ts'],
        tests: ['src/**/*.test.ts'],
        env: {
            type: 'node',
            runner: 'node'
        }
    };
};
