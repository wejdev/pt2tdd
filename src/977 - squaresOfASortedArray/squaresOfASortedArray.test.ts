import { squaresOfASortedArray } from "./squaresOfASortedArray";

describe("test squaresOfASortedArray function", () => {
    test.each(
        [
            { input: [-4, -1, 0, 3, 10], expected: [0, 1, 9, 16, 100] },
            { input: [-7, -3, 2, 3, 11], expected: [4, 9, 9, 49, 121] }
        ])(
            'squaresOfASortedArray(%s) should return %s', (example: { input: number[], expected: number[] }) => {
                expect(squaresOfASortedArray(example.input)).toStrictEqual(example.expected);
            },
        );
});
