function searchInsert(nums: number[], target: number): number {

    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        let midVal = nums[mid];

        if (midVal < target)
            left = mid + 1;
        else if (midVal > target)
            right = mid - 1;
        else // (midVal === target)
            return mid;
    }

    return left;
}


function searchInsert2(nums: number[], target: number): number {
    // Not O(log(n)), but trick!
    return nums.filter((item: number) => item < target).length;
}


export { searchInsert as searchInsertPosition };


/*
Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/
