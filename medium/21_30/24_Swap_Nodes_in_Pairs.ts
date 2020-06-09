/**
 * Created by Administrator on 2020/6/9.
 */
function swapPairs(head: ListNode | null): ListNode | null {
    let thead: any = {}
    thead.next = head;
    let c: ListNode = thead;
    while( c.next && c.next.next){
        let a: ListNode = c.next;
        let b: ListNode = c.next.next;
        c.next = b;
        a.next = b.next;
        b.next = a;
        c = a;
    }
    return thead.next;
};