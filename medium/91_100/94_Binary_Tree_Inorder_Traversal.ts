/**
 * Created by Administrator on 2020/6/15.
 */
// 递归
function inorderTraversal(root: TreeNode | null): number[] {
    let res: number[] = [];

    function Mid(root: TreeNode | null ){
        if( root ){
            Mid(root.left);
            res.push(root.val);
            Mid(root.right);
        }
    }
    Mid(root);
    return res;
}

function inorderTraversal2(root: TreeNode | null): number[] {

}
