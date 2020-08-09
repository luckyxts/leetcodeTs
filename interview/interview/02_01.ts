/**
 * Created by Administrator on 2020/8/9.
 */
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    let p: any = head;
    if(!p) return null;
    let q: any = p.next;
    let dict: any = { [p.val]: true}

    while(q){
        if( dict[q.val] ){
            p.next = q.next;
        }else{
            dict[q.val] = true;
            p = q;
        }
        q = q.next;
    }
    return head;
};