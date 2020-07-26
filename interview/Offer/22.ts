/**
 * Created by Administrator on 2020/7/26.
 */
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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let res: ListNode[] = [];
    while(head){
        res.push(head);
        head = head.next;
    }
    return res[res.length - k];
};