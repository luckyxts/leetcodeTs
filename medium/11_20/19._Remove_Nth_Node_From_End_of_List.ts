/**
 * Created by Administrator on 2020/6/8.
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let tmp: ListNode[] = [];
    let len = 0;
    let p: ListNode | null= head;
    while(p){
        tmp.push(p);
        p = p.next;
        len++;
    }
    if( len === 1){
        return null;
    }
    if( len === n ){
        return tmp[1];
    }
    else{
        let q = tmp[len - n - 1];
        if( q.next ){
            q.next = q.next.next;
        }
    }
    return tmp[0]
}