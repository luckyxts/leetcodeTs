/**
 * Created by Administrator on 2020/7/26.
 */
function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return null;
    let p: ListNode = head;
    let q: ListNode | null = p.next;
    while(q){
        let t: ListNode | null = q.next;
        if( p === head) p.next = null;
        q.next = p;
        p = q;
        q = t;
    }
    return p;
};