/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    let zeroCount = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            zeroCount++;
        }
    }

    const zeros = new Array(zeroCount).fill(0);
    nums.push(...zeros);
}

function moveZeroes2(nums: number[]): void {

    let zeroCount = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            zeroCount++;
        }
    }

    for (let i = 0; i < zeroCount; i++)
        nums.push(0);
}

function moveZeroes3(nums: number[]): void {

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }

}

function moveZeroes4(nums: number[]): void {

    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }
}

export { moveZeroes as moveZeros };

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

Follow up: Could you minimize the total number of operations done?
*/
