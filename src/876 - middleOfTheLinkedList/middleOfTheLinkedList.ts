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

function middleNode(head: ListNode | null): ListNode | null {
    let listp = head;
    let midp = head;

    let i = 0;
    while (listp && listp.next && midp) {
        if (i++ % 2 == 0)
            midp = midp.next;
        listp = listp.next;
    }

    return midp;
};

function middleNode2(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast && fast.next && slow && slow.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};

export { middleNode as middleOfTheLinkedList, ListNode }

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


/*
876. Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/
