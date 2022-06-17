import { moveZeros } from './moveZeros';

describe('test moveZeros function', () => {
    test.each(
        [
            { input: [], expected: [] },
            { input: [0, 0, 0, 0], expected: [0, 0, 0, 0] },
            { input: [1, 1, 0, 0], expected: [1, 1, 0, 0] },
            { input: [0, 1], expected: [1, 0] },
            { input: [1, 0], expected: [1, 0] },
            { input: [1, 0, 2, 0, 3, 0, 4], expected: [1, 2, 3, 4, 0, 0, 0] },
            { input: [1, 0, -2, 0, 3, 0, 5, 4, 0], expected: [1, -2, 3, 5, 4, 0, 0, 0, 0] },

            { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
            { input: [0], expected: [0] }

        ])(
        'moveZeros(%s) should alter input to be %s', (example: { input: number[], expected: number[] }) => {
            let nums = example.input;
            moveZeros(nums);
            expect(nums).toStrictEqual(example.expected);
        }
    );
});
