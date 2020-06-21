/**
 * Created by Administrator on 2020/6/21.
 */
function sumNumbers(root: TreeNode | null): number {
    let res: number = 0;
    if( !root ){
        return res;
    }

    function dfs(root: TreeNode | null, nowStr: string){
        if(root){
            let left: TreeNode | null = root.left;
            let right: TreeNode | null = root.right;
            if(!left && !right){
                res += Number(nowStr + root.val);
            }
            else{
                dfs(root.left, nowStr + root.val);
                dfs(root.right, nowStr + root.val);
            }
        }
    }
    dfs(root, "");
    return res;
}