import { floodFill } from "./floodFill";

describe("test floodFill function", () => {
    test.each(
        [
            [
                [
                    [1, 1, 1],
                    [1, 1, 0],
                    [1, 0, 1]
                ], 1, 1, 2,
                [
                    [2, 2, 2],
                    [2, 2, 0],
                    [2, 0, 1]
                ]
            ],
            [
                [
                    [0, 0, 0],
                    [0, 0, 0]
                ], 0, 0, 2,
                [
                    [2, 2, 2],
                    [2, 2, 2]
                ]
            ]
        ])(
            'floodFill() should alter input to be', (
                image: number[][],
                sr: number,
                sc: number,
                newColor: number,
                expected: number[][]
            ) => {
            const result = floodFill(image, sr, sc, newColor);
            expect(result).toEqual(expected);
        });
});
