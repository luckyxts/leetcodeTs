/**
 * Created by Administrator on 2020/6/21.
 */
function sortedListToBST(head: ListNode | null): TreeNode | null {
    let arr: number[] = [];
    if( !head ){
        return null;
    }
    let p: ListNode | null = head;
    while(p){
        arr.push(p.val);
        p = p.next;
    }

    function getTree(list: number[], start: number, end: number): TreeNode | null{
        if( list.length === 0 ){
            return null;
        }
        let mid: number = Math.ceil((start + end ) / 2);
        let node: TreeNode = new TreeNode(list[mid]);
        let leftTree = getTree(list, start, mid - 1);
        let rightTree = getTree(list, mid + 1, end);
        node.left = leftTree;
        node.right = rightTree;
        return node;
    }
    return getTree(arr, 0, arr.length - 1);
}