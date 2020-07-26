/**
 * Created by Administrator on 2020/7/26.
 */
function kthLargest(root: TreeNode | null, k: number): number {
    // 前序
    let res: number[] = [];

    function preOrder(root: TreeNode | null){
        if(root){
            preOrder(root.left);
            res.push(root.val);
            preOrder(root.right);
        }
    }
    preOrder(root);
    return res[res.length - k];
};