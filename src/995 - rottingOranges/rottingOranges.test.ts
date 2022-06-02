import { rottingOranges } from "./rottingOranges";

describe("test rottingOranges function", () => {
    test.each(
        [
            [
                [
                    [0, 2]
                ],
                0
            ],
            [
                [
                    [0, 1]
                ],
                -1
            ],
            [
                [
                    [1, 1]
                ],
                -1
            ],
            [
                [
                    [2, 1, 1],
                    [1, 1, 0],
                    [0, 1, 1]
                ],
                4
            ],
            [
                [
                    [2, 1, 1],
                    [0, 1, 1],
                    [1, 0, 1]
                ],
                -1
            ],
            [
                [
                    [2, 0, 0, 2],
                    [1, 1, 1, 1],
                    [0, 0, 1, 1],
                    [0, 0, 0, 0],
                ],
                3
            ],
            [
                [
                    [2, 0, 0, 2],
                    [1, 1, 1, 1],
                    [0, 0, 1, 1],
                    [1, 0, 0, 0],
                ],
                -1
            ],
        ])(
            'rottingOranges() should alter %j to be %i', (
                grid: number[][],
                expected: number
            ) => {
            const result = rottingOranges(grid);
            expect(result).toEqual(expected);
        });
});
