module.exports = function (wallaby) {
    return {
        files: ['**/*.js'],
        tests: ['**/*.test.js'],
        env: {
            type: 'node',
            runner: 'node'
        }
    };
};
