/**
 * Created by Administrator on 2020/6/21.
 */
function pathSum(root: TreeNode | null, sum: number): number[][] {
    let res: number[][] = [];

    function dfs(nowSum: number, root: TreeNode | null, resTmp: number[]){
        if(root){
            let sumTmp: number = nowSum + root.val;
            let left: TreeNode | null = root.left;
            let right: TreeNode | null = root.right;
            resTmp.push(root.val);
            if(sumTmp === sum ){
                if(!left && !right) {
                    res.push(resTmp);
                }
            }
            dfs(sumTmp, left, resTmp.slice(0));
            dfs(sumTmp, right, resTmp.slice(0));
        }
    }
    dfs(0, root, []);
    return res;
}
