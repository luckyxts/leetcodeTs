/**
 * Created by Administrator on 2020/7/5.
 */
// 打印链表
function reversePrint(head: ListNode | null): number[] {
    let res: number[] = [];
    let p: ListNode | null = head;
    while(p){
        res.unshift(p.val);
        p = p.next;
    }
    return res;
};