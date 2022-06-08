import { rottingOranges, toHash, fromHash } from "./rottingOrangeQueue";

describe("toHash", () => {
    test.each(
        [
            [
                0, 0, 5, 0
            ],
            [
                0, 2, 5, 2
            ],
            [
                2, 4, 5, 14
            ],
            [
                0, 2, 5, 2
            ],
        ])(
            'toHash(%i, %i, %i) should return %i', (row: number, col: number, rowSize: number, expected: number) => {
                const result = toHash(row, col, rowSize);
                expect(result).toEqual(expected);
            });
});

describe("fromHash", () => {
    test.each(
        [
            [
                0, 5, [0, 0]
            ],
            [
                2, 5, [0, 2]
            ],
            [
                5, 5, [1, 0]
            ],
            [
                13, 5, [2, 3]
            ],
            [
                2, 4, [0, 2]
            ],
        ])(
            'fromHash(%i, %i) should return %j', (hash: number, rowSize: number, expected: number[]) => {
                const result = fromHash(hash, rowSize);
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
            [
                [
                    [2, 2, 2, 1, 1],
                ],
                2
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
