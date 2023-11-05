function spiralMatrix(arr: number[][]): number[] {
    if (arr.length === 0 || arr[0].length === 0)
        return [];

    let startRow = 0;
    let endRow = arr.length - 1;
    let startColumn = 0;
    let endColumn = arr[0].length - 1;
    let result: number[] = [];

    while (startRow <= endRow && startColumn <= endColumn) {
        for (let col = startColumn; col <= endColumn; col++) {
            result.push(arr[startRow][col]);
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            result.push(arr[row][endColumn]);
        }
        endColumn--;

        if (startRow <= endRow) {
            for (let col = endColumn; col >= startColumn; col--) {
                result.push(arr[endRow][col]);
            }
            endRow--;
        }

        if (startColumn <= endColumn) {
            for (let row = endRow; row >= startRow; row--) {
                result.push(arr[row][startColumn]);
            }
            startColumn++;
        }
    }

    return result;
}

export { spiralMatrix as spiralMatrix };

/*
Spiral Matrix 1

Given N, and a N * N numbers , print the the numbers of the matrix (in a space separated format) in the spiral order, clockwise starting from top left corner.

Constraints
N <= 100

Input Format
The first line contains N.
N*N matrix follows, i.e the next N lines contain N numbers each.

Output Format
The list containing elements of matrix in a clockwise spiral order.

Sample Input
4
1 2 3 4
12 13 14 5

11 16 15 6
10 9 8 7

Sample Output
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16

Explanation
Test case is self explanatory.
*/
