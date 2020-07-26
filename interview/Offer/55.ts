/**
 * Created by Administrator on 2020/7/26.
 */
function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    let left: number =  maxDepth(root.left);
    let right: number = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

function isBalanced(root: TreeNode | null): boolean {
    function check(root: TreeNode | null): number {
        if( root ){
            let leftHeight = check(root.left);
            let rightHeight = check(root.right);
            if( leftHeight === -1 || rightHeight === -1
                || Math.abs(rightHeight - leftHeight) > 1){
                return -1;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        }else{
            return 0;
        }
    }
    return check(root) !== -1;
};