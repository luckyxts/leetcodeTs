/**
 * Created by Administrator on 2020/6/13.
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    // a , b双指针，
    // null, 1 ， 2， 2， 3, 3分为别 p => , a = >1 , b => 2;
    // 看a和b是否相等通过 ， b = b.next;
    // 相等过 =》 p,a,b 向右平移相等的距离
    // 否则 => 全部往右移动1个 p,a,b
    let p: any = {};
    p.next = head;
    let q: any = p;
    if(!head ){
        return head;
    }
    let a: ListNode | null = head;
    let b: ListNode | null = a.next;
    while(b){
        let flag: boolean = false;
        while (b && a.val === b.val){
            flag = true;
            b = b.next;
        }
        if( flag ){
            p.next = b;
        }else{
            p = a;
        }
        if(b){
            a = b;
            b = b.next;
        }
    }
    return q.next;
}