/**
 * Created by Administrator on 2020/7/26.
 */
function mirrorTree(root: TreeNode | null): TreeNode | null {

    function t(root: TreeNode | null): void{
        if( root ){
            let left: TreeNode | null = root.left;
            let right: TreeNode | null = root.right;
            root.left = right;
            root.right = left;
            t(left);
            t(right);
        }
    }
    t(root);
    return root;
};