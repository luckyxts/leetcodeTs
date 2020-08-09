/**
 * Created by Administrator on 2020/8/9.
 */
function isPalindrome(head: ListNode | null): boolean {
    let res: number[] = [];
    let p: ListNode | null = head;
    while(p){
        res.push(p.val);
        p = p.next;
    }

    return res.join("-") === res.reverse().join("-");
};