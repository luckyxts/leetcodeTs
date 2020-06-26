/**
 * Created by Administrator on 2020/6/26.
 */
function preorderTraversal(root: TreeNode | null): number[] {
    // 往前面放
    let res: number[] = [];
    if( !root ) return res;
    let quene: TreeNode[] = [];
    quene.push(root);
    while( quene.length > 0 ){
        let node: any = quene.shift() ;
        res.push(node.val);
        let left: TreeNode | null = node.left;
        let right: TreeNode | null = node.right;
        right && quene.unshift(right);
        left && quene.unshift(left);
    }
    return res;
};