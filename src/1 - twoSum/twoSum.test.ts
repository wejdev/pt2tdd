import { twoSum } from "./twoSum";

describe("test twoSum2 function", () => {
    test.each(
        [
            { numbers: [2, 7, 11, 15], target: 9, expected: [0, 1] },
            { numbers: [3, 2, 4], target: 6, expected: [1, 2] },
            { numbers: [3, 3], target: 6, expected: [0, 1] }
        ])(
            'twoSum2(%s) should alter input to be %s', (example: { numbers: number[], target: number, expected: number[] }) => {
                const result = twoSum(example.numbers, example.target);
                expect(result).toStrictEqual(example.expected);
            },
        );
});
