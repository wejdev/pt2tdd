import { flippingTheMatrix } from './flippingTheMatrix';

describe('test flippingTheMatrix function', () => {
    test.each(
        [
            {
                arr: [
                    [1, 2,],
                    [3, 4,],
                ],
                expected: 4,
            },
            {
                arr: [
                    [112, 42, 83, 119],
                    [56, 125, 56, 49],
                    [15, 78, 101, 43],
                    [62, 98, 114, 108]
                ],
                expected: 414,
            },
        ])(
            'flippingTheMatrix(%s) should alter input to be %s', (example: { arr: number[][], expected: number }) => {
                const result = flippingTheMatrix(example.arr);
                expect(result).toStrictEqual(example.expected);
            }
        );
});
/*
The approach you're suggesting for the flipping matrix problem involves a greedy algorithm, where you choose the best option available at each step in the hope of finding the optimal solution. However, for this particular problem, there is a more efficient way to approach it without iteratively checking for the best flip at each step.

Here’s a strategy that works for this problem:

Understand the Problem
You are typically given a 2n x 2n matrix, and the goal is to maximize the sum of the elements of the top-left n x n submatrix (quadrant) by flipping the rows and columns.

Insight
Realize that for each position (i, j) in the top-left quadrant, you have exactly four choices:
The element itself matrix[i][j]
The element in the same row but mirrored column matrix[i][2n-j-1]
The element in the same column but mirrored row matrix[2n-i-1][j]
The element diagonally mirrored matrix[2n-i-1][2n-j-1]

Optimal Choice
Without loss of generality, for each cell in the top-left quadrant, you can always flip rows and/or columns such that the maximum of these four corresponding cells will end up in the top-left quadrant. This is because flipping rows and columns doesn't change the set of 4 numbers that can be moved into each position of the top-left quadrant, it just changes their positions.

Algorithm
For each cell in the top-left n x n submatrix, choose the maximum of the four symmetrical positions from the four quadrants. This ensures that for each cell in the top-left quadrant, you have the maximum possible value.

Implementation
Create a loop to iterate over the top-left quadrant of the matrix, and at each cell (i, j), determine the maximum value that can be placed in that cell by examining the cell and its three counterparts. Accumulate this value to a sum variable that represents the maximum sum for the top-left quadrant.

Termination
Once you have gone through all the positions in the top-left quadrant, you have your answer in the sum variable, and no further flips are necessary.

This approach is efficient and works because it's based on the principle that the best move for each individual cell of the target quadrant is independent of the other cells, due to the allowed operations. It's a deterministic approach that guarantees the optimal solution.

For each cell in the top-left quadrant, you can bring the maximum of the four corresponding cells (including the cell itself) from all quadrants to that position by flipping rows and columns. This is because flipping rows and columns doesn't change the set of 4 numbers that can be moved into each position of the top-left quadrant, it just changes their positions.

The highest value from these four positions can always be flipped into the top-left quadrant.

Here is why:
If the maximum is in the (i, j) position already, you don't need to flip.
If the maximum is in the (i, 2n-j-1) position, you can flip the entire row to bring it to the (i, j) position.
If the maximum is in the (2n-i-1, j) position, you can flip the entire column to bring it to the (i, j) position.
If the maximum is in the (2n-i-1, 2n-j-1) position, you can flip the entire row and then the entire column (or vice versa) to bring it to the (i, j) position.

You don't actually have to perform these flips during the algorithm; you just need to know that they are theoretically possible. So, the algorithm involves choosing the maximum of these four values for each element of the top-left quadrant, knowing that they can be achieved by a series of flips.

By doing this for each element in the top-left quadrant, you ensure that each position in the top-left quadrant will end up with the largest possible value from its set of four symmetrical positions. Summing these maximum values will give you the highest possible sum for the top-left quadrant after all possible row and column flips.
*/
