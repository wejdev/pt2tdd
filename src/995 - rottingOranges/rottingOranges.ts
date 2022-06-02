function orangesRotting(grid: number[][]): number {
    let freshOranges = new Set<string>();

    grid.forEach((row, rowNum) => {
        row.forEach((col, colNum) => {
            if (col === 1) {
                const rowIndex = String.fromCharCode(("A".charCodeAt(0) + rowNum));
                const columnIndex = String.fromCharCode(("0".charCodeAt(0) + colNum));
                const orangeId = `${rowIndex}${columnIndex}`;
                freshOranges.add(orangeId);
            }
        })
    });

    freshOranges.forEach(o => {
        console.log(o);

    });

    function isCurrentlyRotten(grid: number[][], row: number, col: number): boolean {
        return grid[row][col] === 2;
    };

    function isNewlyRotten(grid: number[][], row: number, col: number): boolean {

        if (row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length)
            return false;

        const curColor = grid[row][col];

        if (curColor === newColor)
            return;

        if (curColor == seekColor) {
            grid[row][col] = newColor;
            fill(grid, row - 1, col, newColor, seekColor);
            fill(grid, row + 1, col, newColor, seekColor);
            fill(grid, row, col - 1, newColor, seekColor);
            fill(grid, row, col + 1, newColor, seekColor);
        }
        return (grid[row][col] === 2);
    }

    return -1;
}

export { orangesRotting as rottingOranges }

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
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/
