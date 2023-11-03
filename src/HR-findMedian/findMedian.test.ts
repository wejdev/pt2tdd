import { findMedian } from './findMedian';

describe('test findMedian function', () => {
    test.each(
        [
            {
                arr: [
                    5, 3, 1, 2, 4
                ],
                expected: 3
            },
            {
                arr: [
                    1, 176, 79, 107, 76, 166, 128,
                    174, 62, 180, 47, 10, 64, 52,
                    48, 143, 171, 125, 178, 125, 125,
                    2, 83, 191, 153
                ],
                expected: 125
            },
            {
                arr: [
                    1, 176, 79, 107, 76, 166, 128, 174, 62, 180, 47, 10, 64, 52, 48, 143, 171, 178, 2, 83, 191, 153, 125
                ],
                // [
                //       1,   2,  10,  47,  48,  52,  62,  64,  76,  79,  83,
                //     107,
                //     125, 128, 143, 153, 166, 171, 174, 176, 178, 180, 191
                // ]
                expected: 107
            },
        ])(
            'findMedian(%s) should alter input to be %s', (example: { arr: number[], expected: number }) => {
                const result = findMedian(example.arr);
                expect(result).toEqual(example.expected);
            }
        );
});
