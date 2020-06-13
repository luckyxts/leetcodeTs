/**
 * Created by Administrator on 2020/6/13.
 */
function partition(head: ListNode | null, x: number): ListNode | null {
    // 数组缓存法
    let leftArr: ListNode[] = [];
    let rightArr: ListNode[] = [];
    if( !head ){
        return head;
    }
    let p: ListNode | null = head;
    while( p ){
        if( p.val < x ){
            leftArr.push(p);
        }else{
            rightArr.push(p);
        }
        p = p.next;
    }
    leftArr.forEach( (node, i) => {
        if( i < leftArr.length - 1){
            node.next = leftArr[i + 1];
        }else{
            node.next = null;
        }
    })
    rightArr.forEach( (node, i) => {
        if( i < rightArr.length - 1){
            node.next = rightArr[i + 1];
        }else{
            node.next = null;
        }
    })
    if(leftArr.length ){
        leftArr[leftArr.length - 1].next = rightArr[0];
    }

    return leftArr.length > 0 ? leftArr[0] : rightArr[0];
}

// 双指针
function partition(head: ListNode | null, x: number): ListNode | null {

}