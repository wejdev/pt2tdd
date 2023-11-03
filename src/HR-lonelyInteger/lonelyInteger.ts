function lonelyInteger(a: number[]): number | undefined {
    const countDict: Record<number, number> = {};

    for (const num of a) {
        if (countDict[num]) {
            countDict[num]++;
        } else {
            countDict[num] = 1;
        }
    }

    for (const key in countDict) {
        if (countDict[key] === 1) {
            return parseInt(key);
        }
    }

    return undefined;
}

function lonelyIntegerXor(a: number[]): number {

    let result:number = 0;
    a.forEach(n => {
        result ^= n;
    })

    return result;
}

export { lonelyIntegerXor as lonelyInteger };

/*
Lonely Integer

Given an array of integers, where all elements but one occur twice, find the unique element.

Example
a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4.

Function Description
Complete the lonelyinteger function in the editor below.
lonelyinteger has the following parameter(s):
int a[n]: an array of integers

Returns
int: the element that occurs only once

Input Format
The array contains n space-separated integers that describe the values in a.

Constraints
1 <= n < 100
It is guaranteed that n is an odd number and that there is one unique element.
0 <= a[i] <= 100, where 0 <= i < n.

Sample Input 0
1
Sample Output 0
1
Explanation 0
There is only one element in the array, thus it is unique.

Sample Input 1
1 1 2
Sample Output 1
2
Explanation 1
We have two 1's, and 2 is unique.

Sample Input 2
0 0 1 2 1
Sample Output 2
2
Explanation 2
We have two 0's, two 1's, and one 2. 2 is unique.
*/
