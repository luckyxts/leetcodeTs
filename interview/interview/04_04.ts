/**
 * Created by Administrator on 2020/8/9.
 */
function isBalanced(root: TreeNode | null): boolean {
    function check(r: TreeNode | null): number{
        if(!r){
            return 0;
        }else{
            let left: number = check(r.left);
            let right: number = check(r.right);
            if(left === -1 || right === -1 || Math.abs( left - right) > 1){
                return -1;
            }
            return Math.max(left, right) + 1;
        }
    }
    return check(root) !== -1;
};