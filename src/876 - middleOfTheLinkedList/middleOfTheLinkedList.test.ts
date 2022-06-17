import { ListNode, middleOfTheLinkedList } from './middleOfTheLinkedList';

describe('test middleOfTheLinkedList function', () => {
    test.each(
        [
            { head: [0], expected: [0] },
            { head: [6], expected: [6] },
            { head: [0, 1], expected: [1] },
            { head: [1, 2, 3], expected: [2, 3] },
            { head: [0, 1], expected: [1] },
            { head: [1, 0], expected: [0] },
            { head: [1, 0, 2, 0, 3, 0, 4], expected: [0, 3, 0, 4] },
            { head: [1, 0, -2, 6, 3, 0, 5, 4, 0], expected: [3, 0, 5, 4, 0] },
            { head: [1, 0, -2, 6, 3, 7, 5, 4, 0, 8], expected: [7, 5, 4, 0, 8] },

            { head: [1, 2, 3, 4, 5], expected: [3, 4, 5] },
            { head: [1, 2, 3, 4, 5, 6], expected: [4, 5, 6] }

        ])(
        'middleOfTheLinkedList(%s) should alter input to be %s', (example: { head: number[], expected: number[] }) => {
            const actual = middleOfTheLinkedList(listFromArray(example.head))?.val;
            expect(actual).toEqual(example.expected[0]);
        }
    );
});

function listFromArray(nums: number[]): ListNode | null {
    if (nums === null || nums.length === 0) {
        return null;
    }

    let prevNode = null;
    for (let i = nums.length - 1; i >= 0; i--) {
        prevNode = new ListNode(nums[i], prevNode);
    }

    return prevNode;
}
