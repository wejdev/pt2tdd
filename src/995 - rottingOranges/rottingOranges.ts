function orangesRotting(grid: number[][]): number {
    const NO_ORANGE = 0;
    const FRESH_ORANGE = 1;
    const ROTTEN_ORANGE = 2;
    const IMPOSSIBLE = -1;

    let freshOranges = new Set<string>();

    grid.forEach((row, rowNum) => {
        row.forEach((col, colNum) => {
            if (col === FRESH_ORANGE) {
                const rowIndex = rowNum + '';
                const columnIndex = colNum + '';
                const orangeId = `${rowIndex},${columnIndex}`;
                freshOranges.add(orangeId);
            }
        });
    });

    let numberOfIterations = 0;
    let haveSomeOrangesRotted = false;
    while (!haveSomeOrangesRotted && freshOranges.size > 0) {
        freshOranges.forEach(o => {
            console.log(o);
            const orangeId = o.split(',');
            const row = Number(orangeId[0]);
            const col = Number(orangeId[1]);
            if (isNewlyRotten(grid, row, col)) {
                freshOranges.delete(o);
                grid[row][col] = ROTTEN_ORANGE;
                haveSomeOrangesRotted = true;
            }
        });
        if (haveSomeOrangesRotted)
            numberOfIterations++;
    }

    return freshOranges.size > 0 ? -1 : numberOfIterations;

    function isCurrentlyRotten(grid: number[][], row: number, col: number): boolean {
        if (isOutOfBounds(row, grid, col))
            return false;
        return grid[row][col] === ROTTEN_ORANGE;
    };

    function isNewlyRotten(grid: number[][], row: number, col: number): boolean {
        if (isOutOfBounds(row, grid, col))
            return false;

        return (isCurrentlyRotten(grid, row - 1, col) ||
            isCurrentlyRotten(grid, row + 1, col) ||
            isCurrentlyRotten(grid, row, col - 1) ||
            isCurrentlyRotten(grid, row, col + 1));
    }

    function isOutOfBounds(row: number, grid: number[][], col: number) {
        return (row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length);
    }

    return IMPOSSIBLE;
}

export { orangesRotting as rottingOranges };

/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange.
If this is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten,
because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0,
the answer is just 0.

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/
