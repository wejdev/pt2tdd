import { spiralMatrix } from './spiralMatrix1';

describe('test spiralMatrix function', () => {
    test.each(
        [
            {
                arr: [
                    [1, 2, 3,],
                    [8, 9, 4,],
                    [7, 6, 5,],
                ],
                expected: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9,
                ],
            },
            {
                arr: [
                    [1, 2, 3, 4,],
                    [12, 13, 14, 5,],
                    [11, 16, 15, 6,],
                    [10, 9, 8, 7,],
                ],
                expected: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                ],
            },
        ])(
            'spiralMatrix(%s) should alter input to be %s', (example: { arr: number[][], expected: number[] }) => {
                const result = spiralMatrix(example.arr);
                expect(result).toStrictEqual(example.expected);
            }
        );
});
