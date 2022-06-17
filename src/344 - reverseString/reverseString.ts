/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

function reverseString2(s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }
}

export { reverseString };

/*
344. Reverse String
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.
*/
