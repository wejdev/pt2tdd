import { rottingOranges, toHash, fromHash } from "./rottingOranges";

describe("toHash", () => {
    test.each(
        [
            [
                0, 0, "0,0"
            ],
            [
                0, 2, "0,2"
            ],
            [
                -1, 0, "-1,0"
            ],
            [
                0, -1, "0,-1"
            ],
            [
                -2, -4, "-2,-4"
            ],
        ])(
            'toHash(%i, %i) should return %s', (row: number, col: number, expected: string) => {
                const result = toHash(row, col);
                expect(result).toEqual(expected);
            });
});

describe("fromHash", () => {
    test.each(
        [
            [
                "0,0", [0, 0]
            ],
            [
                "0,2", [0, 2]
            ],
            [
                "-1,0", [-1, 0]
            ],
            [
                "0,-1", [0, -1]
            ],
            [
                "-2,-4", [-2, -4]
            ],
        ])(
            'fromHash(%s) should return %j', (hash: string, expected: number[]) => {
                const result = fromHash(hash);
                expect(result).toEqual(expected);
            });
});

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
