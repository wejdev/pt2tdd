import { searchInsertPosition } from "./searchInsertPosition";

describe("test searchInsertPosition function", () => {
    test.each(
        [
            { nums: [2, 4], target: 1, expected: 0 },
            { nums: [2, 4], target: 2, expected: 0 },
            { nums: [2, 4], target: 3, expected: 1 },
            { nums: [2, 4], target: 4, expected: 1 },
            { nums: [2, 4], target: 5, expected: 2 },
            { nums: [1, 3, 5, 8], target: 7, expected: 3 },
            { nums: [1, 3, 5, 6, 7, 9, 10, 11, 14, 19, 20], target: 14, expected: 8 },
            { nums: [1, 3, 5, 6, 7, 9, 10, 11, 14, 19, 20], target: 15, expected: 9 },
            { nums: [1, 3, 5, 6, 7, 9, 10, 11, 14, 19, 20], target: 8, expected: 5 },

            { nums: [1, 3, 5, 6], target: 5, expected: 2 },
            { nums: [1, 3, 5, 6], target: 2, expected: 1 },
            { nums: [1, 3, 5, 6], target: 7, expected: 4 }
        ])(
            'searchInsertPosition(nums, target)) should return output', (input: { nums: number[], target: number, expected: number }): void => {
                expect(searchInsertPosition(input.nums, input.target)).toBe(input.expected);
            },
        );
});
