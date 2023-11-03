import { diagonalDifference } from './diagonalDifference';

describe('test diagonalDifference function', () => {
    test.each(
        [
            {
                arr: [
                    [1, 2, 3,],
                    [4, 5, 6,],
                    [9, 8, 9,],
                ],
                expected: 2
            },
            {
                arr: [
                    [11, 2, 4,],
                    [4, 5, 6,],
                    [10, 8, -12,],
                ],
                expected: 15
            },
        ])(
            'diagonalDifference(%s) should alter input to be %s', (example: { arr: number[][], expected: number }) => {
                const result = diagonalDifference(example.arr);
                expect(result).toEqual(example.expected);
            }
        );
});
