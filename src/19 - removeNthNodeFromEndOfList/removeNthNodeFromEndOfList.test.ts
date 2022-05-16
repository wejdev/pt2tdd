import { removeNthNodeFromEndOfList, ListNode } from "./removeNthNodeFromEndOfList";

describe("test removeNthNodeFromEndOfList function", () => {
    test.each(
        [
            { head: [], n: 0, expected: [] },
            { head: [1], n: 1, expected: [] },
            { head: [1, 2], n: 1, expected: [1] },
            { head: [1, 2], n: 2, expected: [2] },
            { head: [1, 2, 3], n: 1, expected: [1, 2] },
            { head: [1, 2, 3], n: 2, expected: [1, 3] },
            { head: [1, 2, 3], n: 3, expected: [2, 3] },
            { head: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
            { head: [1, 2, 3, 4, 5, 6, 7, 8, 9], n: 5, expected: [1, 2, 3, 4, 6, 7, 8, 9] }
        ])(
            'removeNthNodeFromEndOfList(%s) should alter input to be %s',
            (example: { head: number[], n: number, expected: number[] }) => {
                const linkedList = listFromArray(example.head);
                let actual = removeNthNodeFromEndOfList(linkedList, example.n);
                expect(arrayFromList(actual)).toEqual(example.expected);
            },
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

function arrayFromList(node: ListNode | null): number[] {
    let numbers: number[] = [];

    if (node === null)
        return [];

    while (node) {
        numbers.push(node.val);
        node = node.next;
    }

    return numbers;
}
