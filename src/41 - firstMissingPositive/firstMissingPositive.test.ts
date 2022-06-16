import { firstMissingPositive } from "./firstMissingPositive";

describe("test firstMissingPositive function", () => {
    test.each(
        [
            [
                [1, 2, 0],
                3
            ],
            [
                [5, 4, -1, 1],
                2
            ],
            [
                [7, 8, 9, 11, 12],
                1
            ],
            [
                [2, 3, 7, 6, 8, - 1, -10, 15],
                1
            ],
            [
                [0, -10, 1, 3, -20],
                2
            ],
            [
                [1, 1, 0, - 1, -2],
                2
            ]
        ]
    )(
        'firstMissingPositive(%j) should compute %i', (numbers: number[], expected: number) => {
            const result = firstMissingPositive(numbers);
            expect(result).toStrictEqual(expected);
        },
    );
});
