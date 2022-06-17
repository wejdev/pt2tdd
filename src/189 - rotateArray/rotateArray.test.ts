import { rotateArray } from './rotateArray';

describe('test rotateArray function', () => {
    test.each(
        [
            { input: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
            { input: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
            { input: [1, 2], k: 5, expected: [2, 1] }

        ])(
        'rotateArray(%s) should alter input to be %s', (example: { input: number[], k: number, expected: number[] }) => {
            let nums = example.input;
            rotateArray(nums, example.k);
            expect(nums).toStrictEqual(example.expected);
        }
    );
});
