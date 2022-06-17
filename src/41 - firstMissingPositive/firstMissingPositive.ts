function firstMissingPositive(nums: number[]): number {
    let n = nums.length;

    for (let i = 0; i < n; i++)
        if (nums[i] <= 0 || nums[i] > n)
            nums[i] = n + 1;

    for (const element of nums) {
        let index = Math.abs(element);
        if (index > n)
            continue;

        index--;
        if (nums[index] > 0)
            nums[index] = (-1) * nums[index];
    }

    for (let i = 0; i < n; i++)
        if (nums[i] > 0)
            return i + 1;

    return n + 1;
}

function firstMissingPositiveBrute(nums: number[]): number {
    let i: number;
    for (i = 1; i < nums.length; i++) {
        let found = false;
        for (let j = i - 1; j < nums.length && !found; j++) {
            if (i > 0 && nums[j] == i) {
                found = true;
                break;
            }
        }
        if (!found)
            return i;
    }
    return i;
}

export { firstMissingPositive as firstMissingPositive };

/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

Example 1:
Input: nums = [1,2,0]
Output: 3

Example 2:
Input: nums = [3,4,-1,1]
Output: 2

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1

Constraints:
1 <= nums.length <= 5 * 105
-2^31 <= nums[i] <= 2^31 - 1
*/
