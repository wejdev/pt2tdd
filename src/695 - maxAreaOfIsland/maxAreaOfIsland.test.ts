import { maxAreaOfIsland } from './maxAreaOfIsland';

describe('test maxAreaOfIsland function', () => {
    test.each(
        [
            [
                [[]],
                0
            ],
            [
                [[1]],
                1
            ],
            [
                [[1, 1]],
                2
            ],
            [
                [[1, 1],
                    [1, 1]],
                4
            ],
            [
                [[1, 1, 0, 0, 1, 1, 1, 1, 1]],
                5
            ],
            [
                [[0, 0, 0, 0, 0, 0, 0, 0]],
                0
            ],
            [
                [
                    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
                    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
                ],
                6
            ]
        ])(
        'maxAreaOfIsland() should alter %j to be %i', (
            grid: number[][],
            expected: number
        ) => {
            const result = maxAreaOfIsland(grid);
            expect(result).toEqual(expected);
        });
});
