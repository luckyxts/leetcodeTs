/**
 * Created by Administrator on 2020/6/7.
 */
/**
 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807
 **/
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let res: ListNode | null = null;
    let n: ListNode | null = null;
    let t: number = 0;
    while( l1 || l2 || t){
        let l: ListNode = new ListNode();
        if( n ){
            n.next = l;
            n = n.next;
        }else{
            res = l;
            n = res;
        }
        let v1: number = l1 ? l1.val : 0;
        let v2: number = l2 ? l2.val : 0;
        let sum: number = v1 + v2 + t;
        l.val = sum > 9 ? sum % 10 : sum;
        t = sum > 9 ? 1 : 0;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return res;
}

