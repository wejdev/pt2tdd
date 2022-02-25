import { searchInsertPosition } from "./searchInsertPosition";

describe("test searchInsertPosition function", () => {
    test.each(
        [
            { nums: [1, 3, 5, 6], target: 5, expected: 2 },
            { nums: [1, 3, 5, 6], target: 2, expected: 1 },
            { nums: [1, 3, 5, 6], target: 7, expected: 4 }

        ])(
            'searchInsertPosition(nums, target)) should return output', (input: { nums: number[], target: number, expected: number }): void => {

                expect(searchInsertPosition(input.nums, input.target)).toStrictEqual(input.expected);
            },
        );
});
