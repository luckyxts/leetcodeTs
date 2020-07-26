/**
 * Created by Administrator on 2020/7/26.
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    let head = new ListNode();
    let p = head;
    while(l1 || l2){
        let n1 = l1 ? l1.val: Infinity;
        let n2 = l2 ? l2.val: Infinity;
        if( n1 < n2 ){
            p.val = n1;
            l1 = l1.next;
        }else{
            p.val = n2;
            l2 = l2.next;
        }
        if(l1 || l2){
            p.next = new ListNode();
            p = p.next;
        }
    }
    return head;
};