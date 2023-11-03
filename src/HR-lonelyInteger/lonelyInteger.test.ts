import { lonelyInteger } from './lonelyInteger';

describe('test lonelyInteger function', () => {
    test.each(
        [
            {
                arr: [
                    1,
                ],
                expected: 1
            },
            {
                arr: [
                    1, 1, 2,
                ],
                expected: 2
            },
            {
                arr: [
                    0, 0, 1, 2, 1,
                ],
                expected: 2
            },
            {
                arr: [
                    4, 5, 6, 4, 5, 6, 7,
                ],
                expected: 7
            },
        ])(
            'lonelyInteger(%s) should alter input to be %s', (example: { arr: number[], expected: number }) => {
                const result = lonelyInteger(example.arr);
                expect(result).toEqual(example.expected);
            }
        );
});
