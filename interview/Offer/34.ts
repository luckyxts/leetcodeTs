/**
 * Created by Administrator on 2020/7/26.
 */
function pathSum(root: TreeNode | null, sum: number): number[][] {
    let res: number[][] = [];

    // 深度遍历呗
    function dfs(root: TreeNode | null, tmp: number[], sumNow: number){
        if(root){
            let s: number = root.val + sumNow;
            if(!root.left && !root.right && sum === s){
                res.push([...tmp, root.val]);
                return;
            }
            dfs(root.left, [...tmp, root.val], s);
            dfs(root.right, [...tmp, root.val], s);
        }
    }
    dfs(root, [], 0);
    return res;
};