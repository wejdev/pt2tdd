import { reverseInteger } from './reverseInteger';

describe('test reverseInteger function', () => {
    test.each(
        [
            [123, 321],
            [-123, -321],
            [120, 21],
            [111, 111],
            [10000000, 1],
            [9, 9],
            [2147483647, 0]
        ])(
            'reverseInteger(%i) should return %i', (num, expected) => {
                const result = reverseInteger(num);
                expect(result).toStrictEqual(expected);
            }
        );
});
