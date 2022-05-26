function maxAreaOfIsland(grid: number[][]): number {
    let maxIslandSize = 0;

    let visited: boolean[][] = [];
    for (let i = 0; i < grid.length; i++) {
        let newRow = [];
        for (let j = 0; j < grid[0].length; j++) {
            newRow.push(false);
        }
        visited.push(newRow);
    }

    grid.forEach((row, rowNumber) => {
        row.forEach((column, columnNumber) => {
            maxIslandSize = Math.max(maxIslandSize, findIsland(grid, rowNumber, columnNumber, visited));
        });
    });

    return maxIslandSize;
}

function findIsland(grid: number[][], rowNumber: number, columnNumber: number, visited: boolean[][]): number {
    if (rowNumber < 0 || rowNumber >= grid.length ||
        columnNumber < 0 || columnNumber >= grid[0].length ||
        visited[rowNumber][columnNumber])
        return 0;

    visited[rowNumber][columnNumber] = true;

    if (grid[rowNumber][columnNumber] === 0)
        return 0;

    return 1 +
        findIsland(grid, rowNumber - 1, columnNumber, visited) +
        findIsland(grid, rowNumber + 1, columnNumber, visited) +
        findIsland(grid, rowNumber, columnNumber - 1, visited) +
        findIsland(grid, rowNumber, columnNumber + 1, visited);
}

export { maxAreaOfIsland as maxAreaOfIsland }

/*
You are given an m x n binary matrix grid. An island is a group of 1's
(representing land) connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:
Input: grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/
