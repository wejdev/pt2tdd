import { numberOf1Bits } from "./numberOf1Bits";

describe("test numberOf1Bits function", () => {
    test.each(
        [
            [0b00000000000000000000000000000000, 0],
            [0b00000000000000000000000000001011, 3],
            [0b00000000000000000000000010000000, 1],
            [0b11111111111111111111111111111101, 31],
            [0b11111111111111111111111111111111, 32]
        ])(
            'numberOf1Bits2(%s) should alter input to be %i', (n: number, expected: number) => {
                expect(numberOf1Bits(n)).toEqual(expected);
            },
        );
});
