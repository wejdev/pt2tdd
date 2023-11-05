function flippingTheMatrix(arr: number[][]): number {
    const n = arr.length / 2;
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            maxSum += Math.max(
                arr[i][j],
                arr[i][2 * n - j - 1],
                arr[2 * n - i - 1][j],
                arr[2 * n - i - 1][2 * n - j - 1]
            );
        }
    }

    return maxSum;
}

export { flippingTheMatrix as flippingTheMatrix };

/*
Flipping the Matrix

Sean invented a game involving a 2n*2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the n*n submatrix located in the upper-left quadrant of the matrix.

Given the initial configurations for  matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

Example
1 2
3 4

It is 2*2 and we want to maximize the top left quadrant, a 1*1 matrix. Reverse row 1:
1 2
4 3

And now reverse column 0:
4 2
1 3

The maximal sum is 4.

Function Description
Complete the flippingMatrix function in the editor below.

flippingMatrix has the following parameters:
- int matrix[2n][2n]: a 2-dimensional array of integers

Returns
- int: the maximum sum possible.

Input Format
The first line contains an integer q, the number of queries.

The next q sets of lines are in the following format:

The first line of each query contains an integer, q.
Each of the next 2n lines contains 2n space-separated integers matrix[i][j] in row i of the matrix.
Constraints
1 ≤ q ≤ 16
1 <= n <= 128
01 ≤ matrix[i][j] ≤ 4096, where 0 ≤ i, j < 2n.

Sample Input
STDIN           Function
-----           --------
1               q = 1
2               n = 2
112 42 83 119   matrix = [[112, 42, 83, 119], [56, 125, 56, 49], \
56 125 56 49              [15, 78, 101, 43], [62, 98, 114, 108]]
15 78 101 43
62 98 114 108

Sample Output
414

Explanation

Start out with the following 2n x 2n matrix:
matrix =
        [ 112   42   83  119 ]
        [  56  125   56   49 ]
        [  15   78  101   43 ]
        [  62   98  114  108 ]

Perform the following operations to maximize the sum of the n x n submatrix in the upper-left quadrant:

2. Reverse column 2 ([83, 56, 101, 114] → [114, 101, 56, 83]), resulting in the matrix:
matrix =
        [ 112  42  114  119 ]
        [  56  125  101   49 ]
        [  15   78   56   43 ]
        [  62   98   83  108 ]

Reverse row 0 ([112, 42, 114, 119] → [119, 114, 42, 112]), resulting in the matrix:
matrix =
        [ 119  114   42  112 ]
        [  56  125  101   49 ]
        [  15   78   56   43 ]
        [  62   98   83  108 ]

The sum of values in the n x n submatrix in the upper-left quadrant is 119 + 114 + 56 + 125 = 414.
*/
