/**
 * Created by Administrator on 2020/7/5.
 */
// 删除链表的节点
function deleteNode(head: ListNode | null, val: number): ListNode | null {
    let p: ListNode | null = head;
    if( !p ){
        return null;
    }
    let q: ListNode | null = p.next;
    if( p.val === val ){
        return q;
    }
    while(q){
        if( q.val === val ){
            p.next = q.next;
            q.next = null;
            break;
        }
        p = q;
        q = q.next;
    }
    return head;
};