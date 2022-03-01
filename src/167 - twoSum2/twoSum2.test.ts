import { twoSum2 } from "./twoSum2";

describe("test twoSum2 function", () => {
    test.each(
        [
            { numbers: [2, 7, 11, 15], target: 9, expected: [1, 2] },
            { numbers: [2, 3, 4], target: 6, expected: [1, 3] },
            { numbers: [-1, 0], target: -1, expected: [1, 2] }
        ])(
            'twoSum2(%s) should alter input to be %s', (example: { numbers: number[], target: number, expected: number[] }) => {
                expect(twoSum2(example.numbers, example.target)).toStrictEqual(example.expected);
            },
        );
});
