/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(firstNode: ListNode | null, nodesFromEnd: number): ListNode | null {
    if (firstNode === null) {
        return firstNode;
    }

    let head = new ListNode(0);
    head.next = firstNode;

    let laggingNode: any = head;
    let seekingNode: any = head;

    for (let i = 0; i < nodesFromEnd + 1; i++) {
        seekingNode = seekingNode.next;
    }

    while (seekingNode) {
        laggingNode = laggingNode.next;
        seekingNode = seekingNode.next;
    }

    const deletedNode = laggingNode.next;
    laggingNode.next = deletedNode.next;

    return head.next;
};

export { removeNthFromEnd as removeNthNodeFromEndOfList, ListNode }

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/*
19. Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

Follow up: Could you do this in one pass?
*/
