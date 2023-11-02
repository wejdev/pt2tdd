import { minMaxSum } from './minMaxSum';

describe('test minMaxSum function', () => {
    test.each(
        [
            { numbers: [1, 2, 3, 4, 5], expected: [10, 14] },
            { numbers: [1, 3, 5, 7, 9], expected: [16, 24] }
        ])(
            'miniMaxSum(%s) should alter input to be %s', (example: { numbers: number[], expected: number[] }) => {
                const result = minMaxSum(example.numbers);
                expect(result).toStrictEqual(example.expected);
            }
        );
});
