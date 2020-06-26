/**
 * Created by Administrator on 2020/6/26.
 */
function reorderList(head: ListNode | null): void {
    let temp: ListNode[] = [];
    if( !head ) return;
    let p: ListNode | null = head;
    while(p){
        temp.push(p);
        p = p.next;
    }
    let i: number = 0;
    let j: number = temp.length - 1;
    while( i <= j){
        let head: ListNode = temp[i];
        let tail: ListNode = temp[j];
        if( head === tail ){
            head.next = null;
            break;
        }
        head.next = tail;
        if( i + 1 < j ){
            tail.next = temp[i + 1];
        }else{
            tail.next = null;
        }
        i++;
        j--;
    }
};