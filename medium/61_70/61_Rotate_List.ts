/**
 * Created by Administrator on 2020/6/11.
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // 搞个数组，记录每一个位置
    let p = head;
    if( !p ){
        return p;
    }
    let tmpArr: ListNode[] = [];
    while(p){
        tmpArr.push(p);
        p = p.next;
    }
    k = k % tmpArr.length;
    // 没有变化的情况
    if( k === 0 || k === tmpArr.length){
        return head;
    }
    // 找到3个位置, 倒数第K个, k, 末尾
    head = tmpArr[ tmpArr.length - k];
    tmpArr[tmpArr.length - 1].next = tmpArr[0];
    tmpArr[tmpArr.length - k - 1].next = null;
    return head;
};