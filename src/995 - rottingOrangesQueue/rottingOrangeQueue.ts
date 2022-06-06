function orangesRotting(grid: number[][]): number {
    const FRESH_ORANGE = 1;
    const ROTTEN_ORANGE = 2;
    const IMPOSSIBLE = -1;

    const MAX_ROWS = grid.length;
    const MAX_COLS = grid[0].length;

    let rottenQueue  = [];
    let fresh = 0;
    grid.forEach((row, rowNum) => {
        row.forEach((col, colNum) => {
            if (col === FRESH_ORANGE) {
                fresh++;
            }
            if (col === ROTTEN_ORANGE) {
                rottenQueue.push({ rowNum, colNum });
            }
        });
    });

    let numberOfIterations = 0;
    while (rottenQueue.length > 0 and ) {
        let rottingOranges = new Set<string>();
        freshOranges.forEach(orangeId => {
            if (isNewlyRotten(orangeId)) {
                freshOranges.delete(orangeId);
                rottingOranges.add(orangeId);
            }
        });

        if (rottingOranges.size === 0)
            return IMPOSSIBLE;

        rottenOranges = rottingOranges;
        numberOfIterations++;
    }

    return numberOfIterations;

    function isNewlyRotten(orangeId: string): boolean {
        let row, col;
        [row, col] = fromHash(orangeId);

        return (
            rottenOranges.has(toHash(row + 1, col)) ||
            rottenOranges.has(toHash(row - 1, col)) ||
            rottenOranges.has(toHash(row, col + 1)) ||
            rottenOranges.has(toHash(row, col - 1)));
    }
}

function toHash(row: number, col: number): string {
    const rowIndex = row + '';
    const columnIndex = col + '';
    return `${rowIndex},${columnIndex}`;
}

function fromHash(hash: string): number[] {
    return hash.split(',').map(x => Number(x));
}

export { orangesRotting as rottingOranges, fromHash, toHash };

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
